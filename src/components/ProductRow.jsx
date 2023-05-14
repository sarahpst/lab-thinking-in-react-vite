import React from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function ProductRow({ product }) {
  return (
    <Row>
      <Col
        style={{
          width: 230,
          margin: 10,
          color: !product.inStock && "red",
        }}
      >
        {product.name}
      </Col>
      <Col style={{ width: 230, margin: 10 }}>{product.price}</Col>
    </Row>
  );
}

export default ProductRow;
