import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function EditTaskModal({ open, onClose, onSave, task }) {
  const [taskContent, setTaskContent] = useState(task?.content || "");
  const [selectedPriority, setSelectedPriority] = useState(task?.priority || "medium");

  const priorities = ["high", "medium", "low"];

  useEffect(() => {
    setTaskContent(task?.content || "");
    setSelectedPriority(task?.priority || "medium");
  }, [task]);

  const handleSave = () => {
    onSave(task.id, taskContent, selectedPriority);
    onClose();
  };

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Autocomplete
          value={selectedPriority}
          onChange={(event, newValue) => setSelectedPriority(newValue)}
          id="priority-box-demo"
          options={priorities}
          getOptionLabel={(option) => option}
          style={{ width: 200, marginBottom:"1rem" }}
          renderInput={(params) => (
            <TextField {...params} label="Priority" />
          )}
        />
        <TextField
          fullWidth
          label="Description"
          multiline 
          rows={4}
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTaskModal;
