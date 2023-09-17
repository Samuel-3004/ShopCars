import React, { useState } from "react";
import { Menu } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { DivHeader, MobileNav, ButtonHeader, Nav } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Header/style";
import { ButtonDarkMode } from "../ButtonDarkMode";

const RegisterHeader = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  let darkMode: boolean | null = JSON.parse(
    localStorage.getItem("@darkMode") || "null"
  );

  darkMode !== true ? darkMode = false : darkMode = true

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <DivHeader id="register_header" dark={darkMode!}>
        <section>
          <ButtonDarkMode />
          <Link to="/home">
            <Logo dark={darkMode!}>
              <h2>Motors</h2>
              <span>Shop</span>
            </Logo>
          </Link>
        </section>
        {isMobile ? (
          <MobileNav>
            <IconButton onClick={handleMenuOpen}>
              <GiHamburgerMenu />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <ButtonHeader onClick={() => navigate("/")} dark={darkMode!}>
                Ir para Home
              </ButtonHeader>
              <ButtonHeader onClick={() => navigate("/login")} dark={darkMode!}>
                Fazer Login
              </ButtonHeader>
            </Menu>
          </MobileNav>
        ) : (
          <Nav>
            <ButtonHeader onClick={() => navigate("/home")} dark={darkMode!}>
              Ir para Home
            </ButtonHeader>
            <ButtonHeader onClick={() => navigate("/login")} dark={darkMode!}>
              Fazer Login
            </ButtonHeader>
          </Nav>
        )}
      </DivHeader>
    </>
  );
};

export default RegisterHeader;
