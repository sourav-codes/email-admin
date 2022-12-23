import React, { useState } from "react";
// import TagTable from "components/Email/TagTable";
import Button from "@mui/material/Button";
import './Domainlist.scss';
import AddModal from "components/Modal/AddModal";
import DomainTable from "components/Email/DomainTable";
function DomainList() {
  const dummyData = [
    {
      id: "1",
      tagName: "google",

    },
    {
      id: "2",
      tagName: "yahoo",
    },
    {
      id: "3",
      tagName: "outlook",
    },
    
  ]
  const [openModal, setOpenModal] = useState(false);

  function handleAdd() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
  }

  function handleSave() {
    setOpenModal(false);
  }



  return (
    <>
      <div className="tag-sec">
        <div className="tag-sec__header">
          <h1>Domain List</h1>
          <Button onClick={handleAdd} variant="contained" className="tag-sec__header__btn">Add Domain</Button>
        </div>
        <DomainTable dummyData={dummyData} />
      </div>
      <AddModal
        showModal={openModal}
        handleClose={handleClose}
        handleSave={handleSave}
        title={"Add Domain"}
        cta={"Create"}
        label={"Domain Name"}
      />
    </>
  );
}

export default DomainList;
