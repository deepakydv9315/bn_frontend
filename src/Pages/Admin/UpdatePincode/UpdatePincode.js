import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal2 from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar.js"; 
import {
  getPincodeDetail,
  setStatusResponse,
  updatePincode,
} from "../../../Redux/slices/utilsSlice";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";

const UpdatePincode = () => {

  const [pincode, setPincode] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, error, message } = useSelector((state) => state.utils);
  const { isLoading } = useSelector((state) => state.app);
  const { pin } = useSelector((state) => state.utils);

  const submitPincodeSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePincode({ pincode, id,}));
    console.log(pincode, id, "aman")
  }

  useEffect(() => {
        
    if(pin && pin._id !== id){ 
        dispatch(getPincodeDetail({ id }));
    }

    console.log(pin, id, "aman");

    if (pin) {
        setPincode(pin.pincode);
    }

    if (success) {
        swal2.fire({
            title: "Pincode Updated Succesfully",
            icon: "success",
        });
        dispatch(setStatusResponse(false));
        navigate("/admin");
    } else if (error) {
        swal2.fire({
            title: "Pincode Didn't Updated",
            icon: "error",
            text: error,
        });
        dispatch(setStatusResponse(false));
    }
}, [dispatch, success, error, pin]);


  return (
    <Fragment>
    <div className="dashboard">
      <Sidebar />
      {isLoading ? (
        <Loader />
      ) : (
        <section id="add_product_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="add_product_wrapper">
                  <h4>Update Pincode</h4>
                  <form
                    className="add_product_form"
                    onSubmit={submitPincodeSubmitHandler}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="fotm-group">
                          <label htmlFor="product_price">
                            Pincode <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product_price"
                            className="form-control"
                            placeholder="Pincode"
                            required
                            onChange={(e) => setPincode(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="btn_right_table">
                          <button
                            className="theme-btn-one bg-black btn_sm"
                            type="submit"
                          >
                            Update Pincode
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
        </div>
      </Fragment>
  )
}

export default UpdatePincode