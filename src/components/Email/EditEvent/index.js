import React, { useState } from "react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { IconButton } from "@mui/material";
import EditModal from "components/Modal/EditModal";
export default function EditEvent({ data }) {

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
            <IconButton onClick={handleClick}>
                <ModeEditOutlineOutlinedIcon />
            </IconButton>
            <EditModal
                data={data}
                showModal={openModal}
                handleClose={handleClose}
                handleSave={handleSave}
                title={"Edit Tag"}
                cta={"Edit"}
                label={"Tag Name"}
            />
        </>
    )
}