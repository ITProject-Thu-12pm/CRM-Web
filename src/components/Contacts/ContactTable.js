import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup, Badge, Modal } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../ButtonStyle.css'

const ContactTable = ({ contacts, setContacts }) => {
    /* add a tag */
    const allTags = contacts.flatMap(contact => contact.tags);
    const uniqueTags = [...new Set(allTags)];
    const [showModal, setShowModal] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [currentContactTags, setCurrentContactTags] = useState([]);
    const [editingContactId, setEditingContactId] = useState(null);

    const handleTagClick = (id, tags) => {
        setEditingContactId(id);
        setCurrentContactTags(tags);
        setShowModal(true);
    };

    /* add a contact */
    const navigate = useNavigate();
    const [showEmailModal, setShowEmailModal] = useState(false);

    const handleAddManullyClick = () => {
        navigate("/addContact");
    };

    const handleAddByEmailClick = () => {
        setShowEmailModal(true);
    };

    /* save tags */
    const handleSaveTags = () => {
        const updatedContacts = contacts.map(contact => {
            if (contact.id === editingContactId) {
                return { ...contact, tags: selectedTags };
            }
            return contact;
        });
    
        /* local storage */
        setContacts(updatedContacts); 
        localStorage.setItem('contactsData', JSON.stringify(updatedContacts)); 
    
        /* Close the modal and reset the states */
        setShowModal(false);
        setEditingContactId(null); 
        setSelectedTags([]);
        setCurrentContactTags([]);
    };
    
    /* link to contactDetail and contactTag by id */
    const columns = [
        {
            field: 'fullName',
            headerName: 'Name',
            flex: 1,
            valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`, 
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {params.value.split(',').map(tag => (
                        tag.trim() && <Badge
                            key={tag}
                            pill
                            className="contact-table-badge"
                            variant="secondary"
                            onClick={() => handleTagClick(params.row.id, params.row.tags)}
                        >
                            {tag.trim()}
                        </Badge>
                    ))}
                    {params.row.tags.length === 0 && (
                        <Badge
                            pill
                            className="contact-table-badge"
                            variant="light"
                            onClick={() => handleTagClick(params.row.id, params.row.tags)} 
                        >
                            + Add Tag
                        </Badge>
                    )}
                </div>
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
                <h3 className='contact-table-header-title'>All Contacts</h3>
                <ButtonGroup>
                    <Dropdown>
                        <Dropdown.Toggle className='change-color-btn' variant="secondary" id="dropdown-basic">
                            Add a Contact
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleAddByEmailClick}>Add by Email</Dropdown.Item>
                            <Dropdown.Item onClick={handleAddManullyClick}>Add Manually</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup>
            </div>

            {/* Add by Email Modal */}
            <Modal show={showEmailModal} onHide={() => setShowEmailModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add by Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   {/* todo: adding by email goes here */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEmailModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

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
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField {...params} variant="filled" label="Tags" placeholder="Add Tag" />
                        )}
                        onChange={(event, newValue) => {
                            console.log("Autocomplete newValue:", newValue);
                            setSelectedTags(newValue);
                        }}

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
