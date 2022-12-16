import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css";
// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const fontColor = {
  color: "whitesmoke",
  fontSize: "18px",
  paddingTop: " 15px ",
  paddingBottom: "15px",
};
const intputSm = {
  fontSize: "15px",
  paddingTop: " 15px ",
  paddingBottom: "15px",
  backgroundColor: "#efefef",
  color: "#000000d1",
};

function SmTables({ users, showUser }) {
  return (
    <div className="smTables-main-div">
      <div className="smTables-sub-div">
        <TableContainer sx={{ borderRadius: "13px" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell sx={fontColor} align="center">
                  Name
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  Age
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  Email
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  Number
                </TableCell>
              </TableRow>
            </TableHead>
            {showUser ? (
              <TableBody>
                {users?.map((item, index) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={intputSm}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {item.name}
                    </TableCell>
                    <TableCell sx={intputSm} align="center">
                      {item.age}
                    </TableCell>
                    <TableCell sx={intputSm} align="center">
                      {item.email}
                    </TableCell>
                    <TableCell sx={intputSm} align="center">
                      {item.number}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <p>no users</p>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default SmTables;
