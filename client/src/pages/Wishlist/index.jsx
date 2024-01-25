import React, { useContext, useEffect, useState } from "react";
import { WishlistItemContext } from "../../context/WishlistItemContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const [rows, setRows] = useState("");
  const { deleteItem, wishlist, setWishlist } = useContext(WishlistItemContext);

  useEffect(() => {
    async function fetchData() {
      const getWishlist = await axios.get(
        "http://localhost:3030/flower",
        wishlist
      );
      setRows(getWishlist);
    }
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="wishlist">
        <div className="table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows &&
                  rows.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">
                        <img src={row.image} alt="" />
                      </TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">
                        <button onClick={()=>{deleteItem(wishlist)}}><DeleteIcon /></button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
