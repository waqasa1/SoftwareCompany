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

const pages = [
  { label: "H.", path: "/" },
  { label: "Services", path: "/solution" },
  { label: "Company", path: "/herodev" },
  // { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Resources", path: "/contact" },
];

{
  /* navbar */
}
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
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
                <MenuItem
                  key={page.label}
                  onClick={() => handleNavClick(page.path)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.label}
                  </Typography>
                </MenuItem>
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
