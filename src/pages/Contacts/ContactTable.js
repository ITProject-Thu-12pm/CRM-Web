import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const ContactTable = ({ contacts }) => {
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
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
        { field: 'dob', headerName: 'DOB', flex: 1 },
        { field: 'gender', headerName: 'Gender', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 }
    ];

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h3>All Contacts</h3>
                <button className="btn add-contact-btn btn-primary mr-2">+ Add New Contact</button>
            </div>
            <Box sx={{ height: '100%', width: '100%' }}>
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
