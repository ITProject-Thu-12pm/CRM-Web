import React, { useState } from "react";
import {
  DataGrid,
  GridToolbar,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Dropdown, ButtonGroup, Badge, Modal } from "react-bootstrap";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import "../ButtonStyle.css";

const ContactTable = ({ contacts, setContacts }) => {
  /* add a tag */
  const allTags = contacts.flatMap((contact) => contact.tags);
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

  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);

  /* add contacts */
  const handleAddManullyClick = () => {
    navigate("/addContact");
  };

  const handleAddByEmailClick = () => {
    setShowEmailModal(true);
  };

  /* delete contacts */
  const [selectedRows, setSelectedRows] = useState([]);
  /* toolbar */
  function ContactToolbar() {
    return (
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          {/* filter, density, export */}
          <GridToolbar />

          {/* delete */}
          <Button
            variant="text"
            startIcon={<DeleteIcon />}
            onClick={() => {
              console.log("Selected rows to delete:", selectedRows);
              const updatedContacts = contacts.filter(
                (contact) => !selectedRows.includes(contact.id)
              );
              console.log("Updated contacts:", updatedContacts);

              setContacts(updatedContacts);
              setSelectedRows([]); // Clear the selection after deletion
            }}
          >
            Delete
          </Button>
        </div>
        {/* search bar */}
        <GridToolbarQuickFilter />
      </div>
    );
  }

  const handleSaveTags = () => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === editingContactId) {
        return { ...contact, tags: selectedTags };
      }
      return contact;
    });

    setContacts(updatedContacts);

    setShowModal(false);
    setEditingContactId(null);
    setSelectedTags([]);
    setCurrentContactTags([]);
  };

  /* link to contactDetail and contactTag by id */
  const columns = [
    /* avatar */
    {
      field: "profile_picture",
      headerName: "Avatar",
      flex: 0.5,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Profile"
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
      ),
    },
    /* name */
    {
      field: "fullName",
      headerName: "Name",
      flex: 1,
      valueGetter: (params) =>
        `${params.row.first_name} ${params.row.last_name}`,
      renderCell: (params) => (
        <Link to={`/contacts/${params.row.id}`}>{params.value}</Link>
      ),
    },
    /* tags */
    {
      field: "tags",
      headerName: "Tags",
      flex: 1,
      valueGetter: (params) => params.row.tags.join(", "),
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {params.value.split(",").map(
            (tag) =>
              tag.trim() && (
                <Badge
                  key={tag}
                  pill
                  className="contact-table-badge"
                  variant="secondary"
                  onClick={() => handleTagClick(params.row.id, params.row.tags)}
                >
                  {tag.trim()}
                </Badge>
              )
          )}
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
    {
      field: "date_of_birth",
      headerName: "DOB",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.7,
    },
    
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "address",
      headerName: "Address",
      flex: 2,
      valueGetter: (params) => {
        const addr = params.row.address;
        return `${addr.street_address}, ${addr.city}, ${addr.state} ${addr.postcode}`;
      },
    },
   
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <div>
      {/* "all contacts" and drop down */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="contact-table-header-title">All Contacts</h3>
        <ButtonGroup>
          <Dropdown>
            <Dropdown.Toggle
              className="change-color-btn"
              variant="secondary"
              id="dropdown-basic"
            >
              Add a Contact
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleAddByEmailClick}>
                Add by Email
              </Dropdown.Item>
              <Dropdown.Item onClick={handleAddManullyClick}>
                Add Manually
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </div>

      {/* Add by Email Modal */}
      <Modal show={showEmailModal} onHide={() => setShowEmailModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add by Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* todo: adding by email goes here */}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEmailModal(false)}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      {/* table content */}
      <Box sx={{ height: 430, width: "100%" }}>
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
          disableDensitySelector
          disableColumnMenu={true}
          slots={{ toolbar: ContactToolbar }}
          onRowSelectionModelChange={(newSelectionModel) => {
            console.log("Row selection model changed!");
            const ids = newSelectionModel;
            const selectedIDs = new Set(ids.map((id) => id.toString()));
            const selectedContacts = contacts.filter((contact) =>
              selectedIDs.has(contact.id.toString())
            );
            console.log("Selected contacts:", selectedContacts);

            // Update the state with the IDs of the selected rows
            setSelectedRows(ids);
          }}
          selectionModel={selectedRows}
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
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Tags"
                placeholder="Add Tag"
              />
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
};

export default ContactTable;
