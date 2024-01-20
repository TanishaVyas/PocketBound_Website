import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

function Terms() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the top
        height: "auto",
        margin: 0,
        padding: "10px",
        backgroundColor: "#180F22",
        marginBottom: "10",
      }}
    >
      <Box sx={{ marginTop: "auto" }}>
        <Button
          variant="outlined"
          onClick={handleOpen}
          sx={{ p: "8px 16px", m: 0 }}
        >
          Open Terms and Conditions
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%", // Set maximum width
            maxWidth: 600, // Limit maximum width
            maxHeight: "80vh", // Limit maximum height
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflowY: "auto", // Enable vertical scroll when needed
            "@media (max-width: 600px)": {
              width: "95%", // Adjust width for smaller screens
            },
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Terms and Conditions
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            <Typography paragraph>
              The following terms and conditions govern your use of the
              physiotherapy and rehabilitation device ("Physio-mize"). By using
              the Device, you agree to these terms and conditions.
            </Typography>
            <ul>
              <li>
                The Project is provided "as is" without any warranties, express
                or implied. Team PocketBound makes no representations or
                warranties regarding the accuracy, completeness, or reliability
                of the Project.
              </li>
              <li>
                Team PocketBound and its members shall not be liable for any
                direct, indirect, incidental, special, or consequential damages
                resulting from the use or inability to use the Project.
              </li>
              <li>
                This device is an engineering sample and not a fully finished
                product.
              </li>
              <li>
                The creators may update or modify the Device and application
                without prior notice.
              </li>
              <li>
                The creators won't be responsible for any misuse/mishap of the
                project.
              </li>
            </ul>
            <Typography>
              By using the Project, you acknowledge that you have read,
              understood, and agreed to these terms and conditions.
            </Typography>
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Terms;
