import { Box, Button, Card, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import node from "../../assets/node.png";
import php from "../../assets/php.png";
import react from "../../assets/react1.png";
import shopify from "../../assets/shopify.png";
import { useNavigate } from "react-router-dom";

const CompanyDropdown = ({ closeMenu }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const data = [
    { image: node, title: "Node Development", path: "/node" },
    { image: php, title: "Custom PHP Development", path: "/php" },
    { image: react, title: "React Development", path: "/react" },
    { image: shopify, title: "Shopify Development", path: "/shopify" },
  ];
  const handleHome = () => {
    navigate("/herodev");
    setHovered(false);
  };
  const handleNavClick = (path) => {
    navigate(path);
    setHovered(false);
    closeMenu(false);
  };

  return (
    <>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{ position: "relative" }}
      >
        <Button
          onClick={handleHome}
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
              position: "fixed",
              top: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "75vw",
              // transform: "translateX(14%)",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center",
              padding: "20px",
              zIndex: 1000,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            {data.map((item, i) => (
              <Card
                key={i}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  width: "22%",
                  height: "14vh",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  ":hover": { backgroundColor: "#f0f0f0" },
                  ":hover": {
                    boxShadow: 24,
                  },
                }}
              >
                {/* Box around the image with blue background */}

                <Box
                  sx={{
                    // backgroundColor: "#91c8ff",
                    padding: "8px",
                    borderRadius: "8px", // optional for rounded corners
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{ height: "50px", borderRadius: "50%" }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default CompanyDropdown;
