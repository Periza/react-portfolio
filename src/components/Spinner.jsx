import React, { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";

function Spinner(props) {
  return <BounceLoader size={50} loading={props.loading} color={props.color} />;
}

export default Spinner;
