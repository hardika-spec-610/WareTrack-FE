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
                {/* <RxDashboard size="22px" className="mr-3" /> */}
                {/* <img src={dashboardIcon} alt="icon" className="mr-3 filter-white" /> */}
                Dashboard
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/dashboard">
              <CDBSidebarMenuItem icon="shopping-bag">
                {/* <BsBag size="22px" className="mr-3" /> */}
                {/* <img src={bagIcon} alt="icon" className="mr-3" /> */}
                Products
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/dashboard">
              <CDBSidebarMenuItem icon="plus-circle">
                {/* <BsBagPlus size="22px" className="mr-3" /> */}
                {/* <img src={addToBag} alt="icon" className="mr-3" /> */}
                Add Product
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/dashboard">
              <CDBSidebarMenuItem icon="file-alt">
                {/* <BiMessageDetail size="22px" className="mr-3" /> */}
                {/* <img src={messageIcon} alt="icon" className="mr-3" /> */}
                Reports
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/dashboard">
              <CDBSidebarMenuItem icon="user-circle">
                {/* <MdOutlineAccountCircle size="22px" className="mr-3" /> */}
                {/* <img src={accountIcon} alt="icon" className="mr-3" /> */}
                Account
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/dashboard">
              <CDBSidebarMenuItem className="log-out-red" icon="file-export">
                {/* <FiLogOut size="22px" className="mr-3" /> */}
                {/* <img src={logOutIcon} alt="icon" className="mr-3 " /> */}
                Log Out
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
          {/* <CDBSidebarMenu></CDBSidebarMenu> */}
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
