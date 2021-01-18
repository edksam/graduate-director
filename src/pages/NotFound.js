import React from "react";
// import "./NotFound.css";
import { Result, Button } from "antd";

export default function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="Hmmmmm looks like I am lost..."
        subTitle="Yep, just head back to base by using the button below.."
        extra={<Button type="primary" onClick={() => window.history.back()}>Back Home</Button>}
      />
      ,
    </div>
  );
}
