import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./TagTable.module.scss";
import EditEvent from "../EditEvent";
import DeleteEvent from "../DeleteEvent";

export default function TagTable({ dummyData }) {

    const columns = [
        { id: "tagID", label: "Tag Id", minWidth: 110 },
        {
            id: "tagName",
            label: "Tag",
            minWidth: 130
        },
        {
            id: "edit",
            label: "Edit",
            minWidth: 90
        },
        {
            id: "deleteTag",
            label: "Delete",
            minWidth: 90
        },

    ];


    function createData(
        tagID,
        tagName,
        edit,
        deleteTag,
    ) {
        return {
            tagID,
            tagName,
            edit,
            deleteTag,
        };
    }

    let allIssueData = [];
    dummyData.map((list) => {
        allIssueData.push(
            createData(
                list?.id,
                list?.tagName,
                <EditEvent data={list} />,
                <DeleteEvent data={list} />
            )
        );
    });

    return (
        <Box>
            <Box >
                <TableContainer sx={{ maxHeight: "65vh" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ maxHeight: "60vh", overflow: "scroll" }}>
                            {allIssueData.map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
