import React from "react";
import "./AddModal.scss";
import {
    Box,
    Button,
    // DialogActions,
    DialogContent,
    DialogTitle,
    // Grid,
    Typography,
    Dialog,
    // OutlinedInput,
    // Divider
} from "@mui/material";
import TextField from '@mui/material/TextField';

function AddModal(props) {

    function handleOnClick(e) {
        e.preventDefault();
        console.log("eeee", e.target.inputName.value);
        props.handleSave(e.target.inputName.value)
    }
    return (
        <>
            <Dialog fullWidth={true} maxWidth={"sm"} open={props.showModal}>
                <DialogTitle >
                    <Typography>
                        {props?.title}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleOnClick}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label={props.label}
                            fullWidth
                            variant="standard"
                            name="inputName"
                        />
                        <Box className="btn-container">
                            <Box >
                                <Button onClick={props.handleClose}>Cancel</Button>
                            </Box>
                            <Box >
                                <Button variant="contained" type="submit" >{props?.cta}</Button>
                            </Box>
                        </Box>
                    </form>
                </DialogContent>
            </Dialog>
            {/* <SuccessModal
                modalShow={modalShow}
                title={"Issue added successfully"}
                successText={""}
                buttonText={"Return to Lobby"}
                handleButtonEvent={handleButtonEvent}
            /> */}
        </>
    )
}

export default AddModal;