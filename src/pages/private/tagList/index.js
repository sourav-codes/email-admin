import React, { useState } from "react";
import TagTable from "components/Email/TagTable";
import Button from "@mui/material/Button";
import './Taglist.scss';
import AddModal from "components/Modal/AddModal";

function TagList() {
  const dummyData = [
    {
      id: "1",
      tagName: "paid",

    },
    {
      id: "2",
      tagName: "gifts",

    },
    {
      id: "3",
      tagName: "call",

    },
    {
      id: "4",
      tagName: "job",

    },
    {
      id: "5",
      tagName: "invited",

    },
    {
      id: "6",
      tagName: "notice",

    },
    {
      id: "7",
      tagName: "free",
    },
  ]
  const [openModal, setOpenModal] = useState(false);

  function handleAdd() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
  }

  function handleSave(tagName) {
    
    dummyData.push({
      id : dummyData.length + 1,
      tagName : tagName
    })

    setOpenModal(false);
  }



  return (
    <>
      <div className="tag-sec">
        <div className="tag-sec__header">
          <h1>Tag List</h1>
          <Button onClick={handleAdd} variant="contained" className="tag-sec__header__btn">Add Tag</Button>
        </div>
        <TagTable dummyData={dummyData} />
      </div>
      <AddModal
        showModal={openModal}
        handleClose={handleClose}
        handleSave={handleSave}
        title={"Add Tag"}
        cta={"Create Tag"}
        label={"Tag Name"}
      />
    </>
  );
}

export default TagList;
