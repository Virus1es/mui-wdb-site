import React from 'react';
import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField
} from "@mui/material";

const LogInDialog = ({isOpen, handleClose}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Log In
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="form-dialog-description">
                    Log In to see more blogs
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email address"
                    type="email"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="secondary"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleClose}
                    color="primary"
                >
                    Log In
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LogInDialog;