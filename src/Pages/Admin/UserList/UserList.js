import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

import Sidebar from "../Sidebar/Sidebar.js";
import { getAllUsers } from "../../../Redux/slices/user";

const UserList = () => {
  const dispatch = useDispatch();

  const { allUsers } = useSelector((state) => state.user);

  const deleteProductHandler = (id) => {
    // dispatch(deleteProduct(id));
  };

  useEffect(() => {
    // if (error) {
    //   swal2.fire({
    //     title: "Error",
    //     timer: 2500,
    //   });
    // }

    dispatch(getAllUsers());
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "User ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "User Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "email",
      headerName: "User Email",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button onClick={() => deleteProductHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  allUsers &&
    allUsers.forEach((item) => {
      rows.push({
        _id: item._id,
        name: item.name,
        email: item.email,
      });
    });
  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>

          <DataGrid
            rows={allUsers}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            getRowId={(row) => row._id}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UserList;
