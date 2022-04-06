import { Col, Row, Spin } from "antd";
import React from "react";
const Loader = () => {
  return (
    <>
      <Row justify="center" style={{ margin: "10px" }}>
        <Col>
          <Spin tip="Loading..." size="middle" />
        </Col>
      </Row>
    </>
  );
};

export default Loader;
