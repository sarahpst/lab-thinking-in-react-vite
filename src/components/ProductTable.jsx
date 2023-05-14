import React from "react";
import { useState } from "react";
import jsonData from "../data.json";
import ProductRow from "./ProductRow";
import { Row, Col } from "antd";

function ProductTable({ search }) {
  const [products, ] = useState(jsonData);

  return (
    <div>
      <Row>
        <Col style={{ width: 230, margin: 10 }}>Name</Col>
        <Col style={{ width: 230, margin: 10 }}>Price</Col>
      </Row>

      {products
        .filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((item) => {
          return <ProductRow product={item} />;
        })}
    </div>
  );
}

export default ProductTable;
