import React from "react";
function Solution(){
    return(
        <>
         <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          m: 3,
          gap: 2,
        }}
      >
        <Typography
          sx={{
            padding: "10px",
            width: "fit-content",
            backgroundColor: "#f5f5f5",
            color: "#9c9c9c",
          }}
        >
          SOLUTIONS
        </Typography>
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
         Services & Solutions
        </Typography>
        <Typography sx={{ color: "#9c9c9c" }}>
          Take your company to new heights by investing in our reliable and efficient technology solutions.
        </Typography>
      </Box>
        </>
    );
}
export default Solution;