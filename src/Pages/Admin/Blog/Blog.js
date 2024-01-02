import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import Sidebar from "../Sidebar/Sidebar.js";
import {
  getBlogs,
  deleteBlog
} from "../../../Redux/slices/blogSlice.js";


const Blogs = () => {

  const dispatch = useDispatch();

  const { error, blogs, success } = useSelector(
    (state) => state.blogs
  );

  const deleteBlogHandler = (id) => {
    dispatch(deleteBlog({ id }));
  };

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch, error, success]);

  const columns = [
    {
      field: "_id",
      headerName: "Blog Id",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "title",
      headerName: "Blog Title",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "content",
      headerName: "Content",
      minWidth: 350,
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
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/blog/${params.id}`}>
              <EditIcon />
            </Link>
            <Button onClick={() => deleteBlogHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const row = [];

  blogs &&
    blogs.forEach((item) => {
      row.push({
        _id: item._id,
        title: item.title,
        content: item.content,
      });
    });


  return (
    <Fragment>
      <div className="dashboard">
        <Sidebar />
        <div className="productListContainer">
          <h1 className="adminhead">ALL<span> BLOGS</span></h1>
          <br></br>
          <div className="btn create">
            <Link
              to="/admin/blog/create"
              className="theme-btn-one bg-black btn_md"
              style={{ color: "white" }}
            >
              Create Blog
            </Link>
          </div>
          <br></br>
          <DataGrid
            rows={blogs}
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

export default Blogs;