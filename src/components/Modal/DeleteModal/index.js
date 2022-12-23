import React from "react";
import "./DeleteModal.scss";
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

function DeleteModal(props) {

    function handleDelete() {
        props.handleSave();
    }
    return (
        <>
            <Dialog fullWidth={true} maxWidth={"sm"} open={props.showModal}>
                <DialogTitle >
                    <Typography className="title-container">
                        {props?.title}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Box className="btn-container">
                        <Box >
                            <Button onClick={props.handleClose}>Cancel</Button>
                        </Box>
                        <Box >
                            <Button variant="contained" type="submit" onClick={handleDelete} >{props?.cta}</Button>
                        </Box>
                    </Box>
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

export default DeleteModal;