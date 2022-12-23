import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from "@mui/material";
import DeleteModal from "components/Modal/DeleteModal";

export default function DeleteEvent({ data }) {
    const [openModal, setOpenModal] = useState(false);

    function handleClose() {
        setOpenModal(false);
    }

    function handleClick() {
        setOpenModal(true);
    }

    function handleSave() {
        setOpenModal(false);
    }
    return (
        <>
            <IconButton  onClick={handleClick}>
                <DeleteOutlineIcon />
            </IconButton>
            <DeleteModal
                data={data}
                showModal={openModal}
                handleClose={handleClose}
                handleSave={handleSave}
                title={"Are you sure ?"}
                cta={"Delete"}
            />
        </>
    )
}