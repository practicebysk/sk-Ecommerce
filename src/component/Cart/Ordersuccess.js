import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";

function Ordersuccess() {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />
      <Typography>Your Order has been Placed successfully</Typography>
      <Link to="/order/me">View Orders</Link>
    </div>
  );
}

export default Ordersuccess;
