import React from "react";
import GraduateCard from "./graduate-card";
import { Row, Col } from "antd";

const GraduateList = ({ graduates }) => {
  const cards = () => {
    return graduates.map((graduate) => {
      return <GraduateCard key={graduate._id} graduate={graduate} />;
    });
  };
  return (
    <>
      <Row display="flex" justify="space-between">
        {cards()}
      </Row>
    </>
  );
};

export default GraduateList;
