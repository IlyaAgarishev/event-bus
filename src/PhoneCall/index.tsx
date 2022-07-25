import React, { useEffect } from "react";
import { IPhoneCall } from "../App";

const PhoneCall: React.FC<IPhoneCall> = ({ who, number, operator }) => {
  return (
    <div className="phone-call-event">
      <h1>{who} is calling...</h1>
      <h2>{number}</h2>
      <h3>Operator: {operator}</h3>
    </div>
  );
};

export default PhoneCall;
