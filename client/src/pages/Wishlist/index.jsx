import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Helmet } from "react-helmet";
import { WishlistItemContext } from "../../context/WishlistItemContext";

const Wishlist = () => {
  const { wishlist, deleteItem } = useContext(WishlistItemContext);

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "50px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Wishlist</h2>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wishlist &&
                wishlist.map((data) => (
                  <TableRow
                    key={data._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      <img
                        style={{ width: "100px", height: "100px" }}
                        src={data?.image}
                        alt={data?.name}
                      />
                    </TableCell>
                    <TableCell align="center" component="th" scope="row">
                      {data?.name}
                    </TableCell>
                    <TableCell align="center">{data?.price}</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => deleteItem(data)}
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Wishlist;
