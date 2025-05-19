import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import CompanyDropdown from "./Company";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import CompanySubItems from "./SubItem";

const pages = [
  { label: "H.", path: "/" },
  { label: "Services", path: "/solution" },
  { label: "Company", path: "/herodev" },
  // { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Resources", path: "/contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [hovered, setHovered] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleNavClick = (path) => {
    navigate(path);
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid rgb(201, 193, 193)",
        width: { xs: "100%", lg: "80%" },
        margin: "0 auto",
        overflowX: "clip",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {" "}
          {/* Desktop rocoo icon */}
          <Box
            onClick={handleHomeClick}
            display="flex"
            alignItems="center"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            <AdbIcon sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", lg: "flex" },
                fontFamily: "monospace",
                // flexGrow: '1',
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Rocco
            </Typography>
          </Box>
          {/* Mobile rocoo icon */}
          <Box
            onClick={handleHomeClick}
            display="flex"
            alignItems="center"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            <AdbIcon sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", lg: "none" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Rocco
            </Typography>
          </Box>
          {/* Desktop menu items */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => handleNavClick(page.path)}
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
                  ":hover": { color: "blue", background: "none" },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Button
              onClick={() => handleNavClick("/")}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                ":hover": { color: "blue", background: "none" },
              }}
            >
              H.
            </Button>
            <Button
              onClick={() => handleNavClick("/solution")}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                ":hover": { color: "blue", background: "none" },
              }}
            >
              Services
            </Button>
            {/* <Box
      sx={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Button
        sx={{
          my: 2,
          color: "inherit",
          display: "block",
          ":hover": { color: "blue", background: "none" },
        }}
      >
        Company
      </Button>

      {hovered && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            right: 0,
            width: "100vw",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
            zIndex: 10,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {[1, 2, 3, 4].map((item, i) => (
            <Card
              key={i}
              sx={{
                width: "100%", // Four cards with some gap
                padding: "10px",
                textAlign: "center",
                ":hover": { backgroundColor: "#f0f0f0" },
              }}
            >
              <Typography variant="h6">Card {item}</Typography>
              <Typography variant="body2">Content for card {item}</Typography>
            </Card>
          ))}
        </Box>
      )}
    </Box> */}

            <CompanyDropdown />
            <Button
              onClick={() => handleNavClick("/blog")}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                ":hover": { color: "blue", background: "none" },
              }}
            >
              Blog
            </Button>
            <Button
              onClick={() => handleNavClick("/contact")}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                ":hover": { color: "blue", background: "none" },
              }}
            >
              Resources
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
            }}
          >
            <Button
              href="tel:+923034291974"
              color="black"
              sx={{
                ":hover": {
                  color: "blue",
                  background: "none",
                },
              }}
            >
              {"+ 1-800-356-8933"}
            </Button>
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <Link to="/contact">
              <Button
                variant="contained"
                sx={{ maxHeight: "30px", textTransform: "none" }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
          {/* Mobile burger icon */}
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              elevation={0}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", lg: "none" } }}
            >
              {pages.map((page) => (
                <Box key={page.label}>
                  {page.label === "Company" ? (
                    <>
                      <MenuItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingRight: 0,
                        }}
                      >
                        <Typography
                          onClick={() => handleNavClick("/herodev")}
                          sx={{ cursor: "pointer", flexGrow: 1 }}
                        >
                          Company
                        </Typography>

                        <IconButton
                          onClick={() => setShowDropdown((prev) => !prev)}
                          size="small"
                        >
                          {showDropdown ? (
                            <KeyboardArrowUp />
                          ) : (
                            <KeyboardArrowDown />
                          )}
                        </IconButton>
                      </MenuItem>

                      {showDropdown && (
                        <CompanySubItems
                          closeMenu={() => {
                            setShowDropdown(false);
                            setAnchorElNav(null);
                          }}
                        />
                      )}
                    </>
                  ) : (
                    <MenuItem onClick={() => handleNavClick(page.path)}>
                      <Typography>{page.label}</Typography>
                    </MenuItem>
                  )}
                </Box>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      {/* navbar */}
    </AppBar>
  );
}
export default Navbar;
