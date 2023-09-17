import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup } from 'react-bootstrap';  // Import Dropdown from react-bootstrap
import '../ButtonStyle.css'

const ContactTable = ({ contacts }) => {
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
        { field: 'tags', headerName: 'Tags', flex: 1 },
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
        </div>
    );
}

export default ContactTable;
