import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import swal2 from "sweetalert2";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../Sidebar/Sidebar.js";
import { deletePincode, getAllPincodes } from "../../../Redux/slices/utilsSlice";

const ProductList = ({ history }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const { error, pincodes, isDeleted } = useSelector((state) => state.utils);

  const deletePincodeHandler = (id) => {
    console.log(id);
    dispatch(deletePincode({ id }));
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

    dispatch(getAllPincodes());
  }, [dispatch, isDeleted]);

  const columns = [
    { field: "id", headerName: "Size Id", minWidth: 200, flex: 0.5 },

    {
      field: "pincode",
      headerName: "Pincode",
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
            <Link to={`/admin/pincodes/${params.id}`} >
              <EditIcon />
            </Link>
            <Button onClick={() => deletePincodeHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  pincodes &&
    pincodes.forEach((item, index) => {
      rows.push({
        id: item._id,
        pincode: item.pincode,
      });
    });

  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer" style={{ width:"1270px" }}>
          <h1 id="productListHeading" >ALL PINCODES</h1>
          <div className="btn create">
            <Link
              to="/admin/pincodes/create"
              className="theme-btn-one bg-black btn_md"
              style={{ color: "black" }}
            >
              Create Pincode
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

export default ProductList;
