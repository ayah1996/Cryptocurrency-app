import React from "react";

import { Col, Row, Spin } from "antd";

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
