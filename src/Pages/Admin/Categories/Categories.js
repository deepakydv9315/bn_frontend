import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Categories.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

import Sidebar from "../Sidebar/Sidebar.js";
import {
  deleteCategory,
  getCategories,
  setStatusResponse,
} from "../../../Redux/slices/categories.js";

const ProductList = () => {
  const dispatch = useDispatch();

  const { error, categories, success } = useSelector(
    (state) => state.categories
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteCategory({ id }));
  };

  useEffect(() => {
    if (error) {
      swal2.fire({
        title: "Error",
        timer: 2500,
        text: error,
      });
      dispatch(setStatusResponse());
    }
    if (success) {
      swal2.fire({
        icon: "success",
        title: "Category Deleted",
      });
      dispatch(setStatusResponse());
    }

    dispatch(getCategories());
  }, [dispatch, error, success]);

  const columns = [
    {
      field: "_id",
      headerName: "Category Id",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Category Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 150,
      flex: 0.3,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {params.value}
          </div>
        </Tooltip>
      ),
    },

    {
      field: "title",
      headerName: "Title",
      minWidth: 270,
      flex: 0.5,
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
            <Link to={`/admin/category/${params.id}`}>
              <EditIcon />
            </Link>
            <Button onClick={() => deleteProductHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  categories &&
    categories.forEach((item) => {
      rows.push({
        _id: item._id,
        description: item.description,
        title: item.title,
        name: item.name,
      });
    });
  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h3 className="adminhead">ALL<span>CATEGORIES</span></h3>
          <div className="btn create">
            <Link
              to="/admin/categories/create"
              className="theme-btn-one bg-black btn_md"
            >
              Create Category
            </Link>
          </div>
          <br></br>
          <DataGrid
            rows={categories}
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

export default ProductList;
