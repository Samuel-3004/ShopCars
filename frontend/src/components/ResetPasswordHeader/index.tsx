import React, { useState } from "react";
import { Menu } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, Link } from "react-router-dom";
import { ButtonHeader, DivHeader, Logo, MobileNav, Nav } from "./style";
import { ButtonDarkMode } from "../ButtonDarkMode";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider/UserContext";

const ResetPasswordHeader = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const { darkMode, setDarkMode } = useContext(UserContext);

  darkMode !== true ? setDarkMode(false) : setDarkMode(true);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <DivHeader id="register_header">
        <section>
          <ButtonDarkMode />
          <Link to="/home">
              <Logo dark={darkMode}>
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
              <ButtonHeader onClick={() => navigate("/home")} dark={darkMode}>
                Ir para Home
              </ButtonHeader>
              <ButtonHeader onClick={() => navigate("/login")} dark={darkMode}>
                Fazer Login
              </ButtonHeader>
            </Menu>
          </MobileNav>
        ) : (
          <Nav>
            <ButtonHeader onClick={() => navigate("/home")} dark={darkMode}>
              Ir para Home
            </ButtonHeader>
            <ButtonHeader onClick={() => navigate("/login")} dark={darkMode}>
              Fazer Login
            </ButtonHeader>
          </Nav>
        )}
      </DivHeader>
    </>
  );
};

export default ResetPasswordHeader;
