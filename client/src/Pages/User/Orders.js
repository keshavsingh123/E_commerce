import React from "react";
import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"User Dashboad Order"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>All Order</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
