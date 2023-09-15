import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
/* npm install @mui/x-data-grid */

const ContactTable = ({ contacts }) => {
    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'like', headerName: 'Like', flex: 1, renderCell: (params) => <button>{params.value ? "❤️" : "🤍"}</button> },
        { field: 'tags', headerName: 'Tags', flex: 1 },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 }
    ];


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h3>All Contacts</h3>
                <div>
                    <button className="btn btn-primary mr-2">+ Add New Contact</button>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={contacts}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5,10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default ContactTable;
