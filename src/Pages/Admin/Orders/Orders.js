import React, { Fragment, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar.js";
import {
  deleteOrder, getOrders,
  setStatusResponse
} from "../../../Redux/slices/orderSlice.js";

const Orders = () => {

  const dispatch = useDispatch();

  const { error, orders, totalAmount, success } = useSelector(
    (state) => state.orders
  );

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder({ id }));
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
        icon: "Success",
        title: "Order Deleted",
      });
      dispatch(setStatusResponse());
    }

    dispatch(getOrders());

  }, [dispatch, error, success])

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.4,
    },

    {
      field: "amount",
      headerName: "Amount",
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
            <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      console.log("aman", item);
      rows.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        status: item.orderStatus,
      });
    });

  totalAmount && totalAmount.forEach((x) => {
    rows.push({
      amount: x.totalAmount
    })
  })

  return (
    <Fragment>

      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL ORDERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Orders;