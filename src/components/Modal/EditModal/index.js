import React, { useState } from "react";
import "./EditModal.scss";
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

function EditModal(props) {
    const [inputVal, setInputVal] = useState(props?.data?.tagName ? props?.data?.tagName : "");
    function handleOnClick(e) {
        e.preventDefault();
        props.handleSave(e.target.inputName.value)
    }

    function handleChange(e){
        setInputVal(e.target.value)
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
                            value={inputVal}
                            onChange={handleChange}
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
        </>
    )
}

export default EditModal;