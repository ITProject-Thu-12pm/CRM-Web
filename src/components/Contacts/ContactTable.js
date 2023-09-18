import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup, Badge, Modal } from 'react-bootstrap'; // Import Modal from react-bootstrap
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import '../ButtonStyle.css'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ContactTable = ({ contacts }) => {
    /* add a tag */
    /* unique tag */
    const allTags = contacts.flatMap(contact => contact.tags);
    const uniqueTags = [...new Set(allTags)];
    /* store tag */
    const [currentContactId, setCurrentContactId] = useState(null);
    const [newTags, setNewTags] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [currentContactTags, setCurrentContactTags] = useState([]);


    const handleTagClick = (tags, contactId) => {
        setSelectedTags(tags);
        setCurrentContactId(contactId);
        setNewTags(tags); // set the initial tags when editing
        setShowModal(true);
    };
    
    const navigate = useNavigate();

    const handleLogInClick = () => {
        navigate("/login");
    };
    const handleSaveTags = () => {
        // Step 1: Update the local state
        setCurrentContactTags(newTags);  // assuming `newTags` holds the updated tags

        // Step 2: Update the local JSON data
        // Find the contact in the contacts array and update its tags
        const updatedContacts = contacts.map(contact => {
            if (contact.id === currentContactId) {  // assuming `currentContactId` holds the ID of the contact being edited
                return {
                    ...contact,
                    tags: newTags
                };
            }
            return contact;
        });
        setContacts(updatedContacts);  // assuming you have a `setContacts` function to update state

        // Step 3: Save to localStorage (optional)
        // localStorage.setItem('contacts', JSON.stringify(updatedContacts));

        // Close the dialog after saving (if you have one open)
        // setTagDialogOpen(false);
    };


    const columns = [
        {
            field: 'fullName',  // Use a custom field name here, which doesn't directly map to your data
            headerName: 'Name',
            flex: 1,
            valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`, // Compute the full name here
            renderCell: (params) => (
                <Link to={`/contacts/${params.row.id}`}>
                    {params.value}
                </Link>
            ),
        },
        {
            field: 'tags',
            headerName: 'Tags',
            flex: 1,
            valueGetter: (params) => params.row.tags.join(', '),
            renderCell: (params) => (
                params.value.split(',').map(tag => (
                    <Badge
                        key={tag}
                        pill
                        className="contact-table-badge"
                        variant="secondary"
                        onClick={() => handleTagClick(params.row.tags, params.row.id)}
                    >
                        {tag.trim()}
                    </Badge>
                ))
            ),
        },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'address',
            headerName: 'Address',
            flex: 2,
            valueGetter: (params) => {
                const addr = params.row.address;
                return `${addr.streetAddress}, ${addr.city}, ${addr.state} ${addr.postcode}`;
            }
        },
        /* { field: 'dob', headerName: 'DOB', flex: 1 }, */
        { field: 'status', headerName: 'Status', flex: 1 }
    ];

    /* const allTags = contacts.reduce((acc, contact) => {
        return acc.concat(contact.tags);
    }, []); */

    return (
        <div>
            {/* "all contacts" and drop down */}
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h3>All Contacts</h3>
                <ButtonGroup>
                    <Dropdown>
                        <Dropdown.Toggle className='change-color-btn' variant="secondary" id="dropdown-basic">
                            Add a Contact
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Add by Email</Dropdown.Item>
                            <Dropdown.Item href="#">Add manually</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            </div>

            {/* table content */}
            <Box sx={{ height: 430, width: '100%' }}>
                <DataGrid
                    rows={contacts}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                    disableColumnSelector
                    disableColumnMenu={true}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                />
            </Box>

            {/* Modal containing the Autocomplete for tags */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Tags</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Autocomplete
                        multiple
                        id="tags-filled"
                        options={uniqueTags}
                        defaultValue={currentContactTags}
                        freeSolo
                        onChange={(event, newValue) => setNewTags(newValue)}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField {...params} variant="filled" label="Tags" placeholder="Add Tag" />
                        )}
                        

                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveTags}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ContactTable;
