import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./ProductList.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../Sidebar/Sidebar.js";
import {
  getAdminProducts,
  deleteProduct,
  resetStatusError,
} from "../../../Redux/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const { error, products, isDeleted } = useSelector((state) => state.products);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct({ id }));
  };

  useEffect(() => {
    if (error) {
      swal2.fire({
        icon: "error",
        title: error,
        timer: 2500,
      });

      dispatch(resetStatusError());
    }

    if (isDeleted) {
      swal2.fire({
        title: "Deleted",
        timer: 2500,
        text: "Product Deleted Successfully",
        icon: "success",
      });

      dispatch(resetStatusError());
    }
    dispatch(getAdminProducts());
  }, [dispatch, isDeleted, error]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
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
            <Link to={`/admin/product/${params.id}`}>
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

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        category: item.category,
        // stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h3 className="adminhead">ALL<span>PRODUCTS</span></h3>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
