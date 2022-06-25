import React from "react";
import { Link } from "react-router-dom";
import Layout from "ShellApp/Layout";

type Props = {};

function OrderDetail({}: Props) {
  return (
    <Layout>
      <Link to={"/product"} style={{textDecoration: "none"}}>
      <div>
        OrderDetail
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Customer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jacket</td>
              <td>$100</td>
              <td>John</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      </Link>
    </Layout>
  );
}

export default OrderDetail;
