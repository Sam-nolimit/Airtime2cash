import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Logo from "../../images/Logo2.svg";
import UserIcon from "../../assets/icon/UserIcon.svg";
import SettingsIcon from "../../assets/icon/settings.svg";
import HelpCenterIcon from "../../assets/icon/help.svg";
import LogoutIcon from "../../assets/icon/logout.svg";
import { Button } from "../Utils/Button/Button";
import userImage from "../../images/user.svg";
import "./NavBarDashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBarDashboard = ({
  setToggleModal,
  uploadUrl,
  firstname,
  route,
}) => {
  const navigate = useNavigate();

  const handeClick = () => {
    navigate("/update");
  };

  /**This handle the logout */
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar expand="lg">
      <Container className="col-md-10">
        <Navbar.Brand className="" href="/">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-right-items mr-6 col-md-12">
            {(!firstname || route === "/") && (
              <>
                <Nav.Link className="navlink-active flex-item" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="flex-item" href="/about">
                  <span>About Us</span>
                </Nav.Link>
                <Nav.Link className="flex-item" href="/products">
                  Products
                </Nav.Link>
                <Nav.Link className="flex-item" href="/contact">
                  Contact Us
                </Nav.Link>
                {!firstname && (
                  <a href="/login" className="button-sm flex-item float-right">
                    <Button type="button" text="Login" />
                  </a>
                )}
              </>
            )}

            {firstname && (
              <Nav.Link className="margin-user" href="#">
                <div className="frame-8591">
                  <div className="user">
                    <div className="user-thumb" onClick={handeClick}>
                      <img src={uploadUrl} alt="avatar" />
                    </div>

                    <Dropdown className="d-inline mx-2 user-name">
                      <DropdownButton
                        id="dropdown-button"
                        variant="link"
                        title={firstname}
                        className="mt-2"
                        align={{ md: "end" }}
                      >
                        <Dropdown.Item
                          className="settings-options"
                          href="#/account"
                        >
                          <img src={UserIcon} alt="user icon" />
                          <span>Account</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="settings-options"
                          href="#/settings"
                        >
                          <img src={SettingsIcon} alt="settings icon" />
                          <span>Settings</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="settings-options"
                          href="#/help-center"
                        >
                          <img src={HelpCenterIcon} alt="help center icon" />
                          <span>Help Center</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="settings-options"
                          href="#/logout"
                          onClick={handleLogout}
                        >
                          <img src={LogoutIcon} alt="logout icon" />
                          <span>Logout</span>
                        </Dropdown.Item>
                      </DropdownButton>
                    </Dropdown>
                  </div>
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
