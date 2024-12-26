import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <div style={{ backgroundColor: "#f2cac3" }}>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{ minHeight: "70vh" }}>
          <ToastContainer />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
Layout.defaultProps = {
  title: "Ecommerce app",
  description: "mern stack project",
  keywords: "mern react node mongodb seo",
  author: "keshav singh",
};
export default Layout;
