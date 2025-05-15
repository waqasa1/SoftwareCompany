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
  "H.",
  "Solutions",
  "Company",
  "Case Studies",
  "Blog",
  "Resources",
];

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
    navigate("/hero");
  };

  const handleSolutionsClick = () => {
    navigate("/solution")
  };

  const handleCompanyClick = () => {
    navigate("/herodev")
  };

  const handleCaseStudiesClick = () => {
    navigate("/case-studies");
  };

  const handleBlogClick = () => {
    navigate("/blog");
  };

  const handleResourcesClick = () => {
   navigate("/contact")
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
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block', ":hover":{color:'blue', background:'none'} }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <Button
              onClick={handleHomeClick}
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
              onClick={handleSolutionsClick}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                ":hover": { color: "blue", background: "none" },
              }}
            >
              Solutions
            </Button>
            <Button
              onClick={handleCompanyClick}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                ":hover": { color: "blue", background: "none" },
              }}
            >
              Company
            </Button>
            <Button
              onClick={handleCaseStudiesClick}
              sx={{
                my: 2,
                color: "inherit",
                display: "block",
                ":hover": { color: "blue", background: "none" },
              }}
            >
              Case Studies
            </Button>
            <Button
              onClick={handleBlogClick}
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
              onClick={handleResourcesClick}
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
              sx={{
                height: "20px",
                fontSize: "10px",
                color: "black",
                bgcolor: "rgb(245, 240, 240)",
              }}
            >
              {"Client Support"}
              <ArrowForwardIcon sx={{ fontSize: "10px" }} />
            </Button>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
