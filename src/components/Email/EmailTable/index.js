import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./EmailTable.module.scss";

export default function EmailTable() {

    const columns = [
        { id: "emailID", label: "Email Id", minWidth: 110 },
        {
            id: "email",
            label: "Email",
            minWidth: 130
        },
        {
            id: "domain",
            label: "Domain",
            minWidth: 110
        },
        {
            id: "verified",
            label: "verified",
            minWidth: 110
        },
        {
            id: "date",
            label: "Date",
            minWidth: 110
        },
        // {
        //     id: "view",
        //     label: "View",
        //     minWidth: 90
        // },
        // {
        //     id: "edit",
        //     label: "Edit",
        //     minWidth: 90
        // },

    ];

    const dummyData = [
        {
            id: "101",
            email: "satyam@nickelfox.com",
            domain: "nickelfox",
            verified: "true",
            date: "20/12/2022"

        },
        {
            id: "102",
            email: "satyam@nickelfox.com",
            domain: "nickelfox",
            verified: "true",
            date: "20/12/2022"

        },
        {
            id: "103",
            email: "satyam@nickelfox.com",
            domain: "nickelfox",
            verified: "true",
            date: "20/12/2022"

        },
        {
            id: "104",
            email: "satyam@nickelfox.com",
            domain: "nickelfox",
            verified: "true",
            date: "20/12/2022"

        },
        {
            id: "105",
            email: "satyam@nickelfox.com",
            domain: "nickelfox",
            verified: "true",
            date: "20/12/2022"

        },
        {
            id: "106",
            email: "satyam@nickelfox.com",
            domain: "nickelfox",
            verified: "true",
            date: "20/12/2022"

        },
        {
            id: "107",
            email: "satyam@nickelfox.com",
            domain: "nickelfox",
            verified: "true",
            date: "20/12/2022"

        },
    ]
    function createData(
        emailID,
        email,
        domain,
        verified,
        date,
        // view,
        // edit
    ) {
        return {
            emailID,
            email,
            domain,
            verified,
            date,
            // view,
            // edit
        };
    }

    let allIssueData = [];
    dummyData.map((list) => {
        allIssueData.push(
            createData(
                list?.id,
                list?.email,
                list?.domain,
                list?.verified,
                list?.date,
                // "",
                // ""
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
