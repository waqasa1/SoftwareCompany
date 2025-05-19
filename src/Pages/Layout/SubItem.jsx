import { Box, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CompanySubItems = ({ closeMenu }) => {
  const navigate = useNavigate();

  const data = [
    { title: "Node Development", path: "/node" },
    { title: "Custom PHP Development", path: "/php" },
    { title: "React Development", path: "/react" },
    { title: "Shopify Development", path: "/shopify" },
  ];

  return (
    <Box>
      {data.map((item, i) => (
        <MenuItem
          key={i}
          onClick={() => {
            navigate(item.path);
            closeMenu();
          }}
          sx={{ pl: 3 }}
        >
          <Typography>{item.title}</Typography>
        </MenuItem>
      ))}
    </Box>
  );
};
export default CompanySubItems;
