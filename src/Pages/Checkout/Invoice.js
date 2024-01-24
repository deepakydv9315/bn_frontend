import React from "react";
import "./invoice.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByID } from "../../Redux/slices/orderSlice";

const EmailTemplate = () => {
  let carts = useSelector((state) => state.products.carts);
  const dispatch = useDispatch();
  const params = useParams();
  const orderID = params.orderID;
  const { user } = useSelector((state) => state.user);
  const [order, setOrder] = React.useState({});
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // const { order } = useSelector((state) => state.orders);

  React.useEffect(() => {
    const getInovice = async () => {
      const inoviceResponse = await dispatch(getOrderByID(orderID));
      console.log(inoviceResponse);
      setOrder(inoviceResponse.payload.result);
    };
    getInovice();
  }, [dispatch, orderID]);

  // https://apiv2.shiprocket.in/tracking-form-check?track_type=order_id&track_id=BN-1706122107202&cust_key=9022126326

  return (
    <>
      <section className=" invoice-sec bn-sec">
        <div className="in-wrapper">
          <div className="in-top">{/* <img src= {} alt="asg"> */}</div>
          <div className="in-btm">
            <h1 className="in-head">Order Confirmed!</h1>
            <p className="in-para">
              Your order number is <span className="order-id">{orderID}</span> .
              Your order was placed successfully and you will soon receive your
              order confirmation via email.
            </p>
            <div className="in-btn">
              {/* <button className="in-btn-in">Download invoice</button> */}
              <a
                href={`https://shiprocket.co/tracking/order/${orderID}?company_id=3946029`}
                target="_blank"
              >
                <button>Track order</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailTemplate;
