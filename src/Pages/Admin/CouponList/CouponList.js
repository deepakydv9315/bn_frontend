import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../Sidebar/Sidebar";
import { deleteCoupon, getAllCoupons } from "../../../Redux/slices/utilsSlice";

const CouponList = ({ history }) => {
  const dispatch = useDispatch();

  const { error, coupons, isDeleted } = useSelector((state) => state.utils);

  const deleteCouponHandler = (id) => {
    dispatch(deleteCoupon({ id }));
  };

  useEffect(() => {
    if (error) {
      swal2.fire({
        title: "Error",
        timer: 2500,
      });
    }

    if (isDeleted) {
      swal2.fire({
        title: "Deleted",
        timer: 2500,
        text: "Pincode Deleted Successfully",
        icon: "success",
      });
    }

    dispatch(getAllCoupons());
  }, [dispatch, isDeleted]);

  const columns = [
    { field: "id", headerName: "Size Id", minWidth: 200, flex: 0.5 },

    {
      field: "coupon",
      headerName: "Coupon Code",
      minWidth: 350,
      flex: 1,
    },

    {
      field: "discount",
      headerName: "Discount In Percentage",
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
            <Link to={`/admin/coupon/${params.id}`}>
              <EditIcon />
            </Link>
            <Button onClick={() => deleteCouponHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  coupons &&
    coupons.forEach((item, index) => {
      rows.push({
        id: item._id,
        coupon: item.couponNumber,
        discount: item.discount,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL COUPONS</h1>
          <div className="btn create">
            <Link
              style={{ color: "black",backgroundColor:"yellow" }}
              to="/admin/coupon/create"
              className="theme-btn-one bg-black btn_md"
            >
              Create Coupon
            </Link>
          </div>
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

export default CouponList;
