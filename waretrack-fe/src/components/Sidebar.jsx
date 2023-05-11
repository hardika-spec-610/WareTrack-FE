import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, useLocation } from "react-router-dom";
import "../css/styles.css";
import Logo from "../assets/Logo.svg";

const Sidebar = () => {
  const location = useLocation();

  const handleLogout = () => {
    // Remove user data from session storage
    localStorage.removeItem("accessToken");
    // Navigate to login page
    window.location.href = "/";
    // Reload the page
    window.location.reload();
  };

  return (
    <div className="sidebar-wrapper d-flex">
      <CDBSidebar className="sidebar-bg">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img src={Logo} alt="logo" />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content pt-0">
          <CDBSidebarMenu>
            <Link
              to="/dashboard"
              className={
                location.pathname === "/dashboard"
                  ? "nav-link activeClicked"
                  : "nav-link sub-font-color "
              }
            >
              <CDBSidebarMenuItem icon="border-all">
                Dashboard
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/products"
              className={
                location.pathname === "/products"
                  ? "nav-link activeClicked"
                  : "nav-link sub-font-color "
              }
            >
              <CDBSidebarMenuItem icon="shopping-bag">
                Products
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/add-product"
              className={
                location.pathname === "/add-product"
                  ? "nav-link activeClicked"
                  : "nav-link sub-font-color "
              }
            >
              <CDBSidebarMenuItem icon="plus-circle">
                Add Product
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/orders">
              <CDBSidebarMenuItem icon="file-alt">Orders</CDBSidebarMenuItem>
            </Link>
            <Link to="/dashboard">
              <CDBSidebarMenuItem icon="user-circle">
                Account
              </CDBSidebarMenuItem>
            </Link>
            <Link onClick={handleLogout}>
              <CDBSidebarMenuItem className="log-out-red" icon="file-export">
                Log Out
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
