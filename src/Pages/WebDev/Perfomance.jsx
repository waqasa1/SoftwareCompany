import { Box, Button, Typography } from "@mui/material";
import Testimonal from "../../assets/Testimonail-Bar.svg";
import { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useNavigate } from "react-router-dom";
function Performance() {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact")
  }
  const accordionData = [
    {
      id: 1,
      title: "What is web development?",
      content:
        "Web development or website development generally refers to the process of developing websites or web applications on several or any certain coding language. The development may also be performed on content management systems for the ease of use of customers.",
    },
    {
      id: 2,
      title: "What does a web development agency do?",
      content:
        "A web development agency such as ours ‘Digital Otters’ assists in designing, developing, deploying, migrating, managing, and maintaining websites and web applications. The agency uses streamlined development processes, security compliance coding practices, efficient development, and optimized website development processes.",
    },
    {
      id: 3,
      title: "What does web development services include?",
      content:
        "Web Development Services include frontend, backend, and full-stack development. Furthermore, it also has a web design process that is included in the service for all kinds of websites required.We offer Shopify Development, WordPress Development, Custom development, CMS, CRM, LMS, and other developments for our clients.",
    },
    {
      id: 4,
      title: "How long does it take to develop a Website?",
      content:
        "Web app development has a varied timeline based on the required process. From project scope, design, development, and deployment the time for web app development may take 4-6 months based on the complexities.However, the development process for a CMS-based website such as Shopify or WordPress might take 7 to 14 days for standard development and 21 to 28 days for custom development.",
    },
    {
      id: 5,
      title: "How do I know which tech stack to use?",
      content:
        "You don't always have to know what tech stack you want. We as an agency are here to help you out and select the best possible tech stack for your requirements. For instance, if you have a basic e-commerce website with zero to minimum functionalities, you can choose Shopify Development.Similarly, based on your requirements for a web application, we can suggest you use the MERN stack or any other stack that is ideal for performance.",
    },
  ];
  const [expanded, setExpanded] = useState(null);
  const [cardHeight, setCardHeight] = useState("auto");
  const contentRef = useRef(null);

  const handleChange = (panelId) => (_, isExpanded) => {
    setExpanded(isExpanded ? panelId : null);
  };
  useEffect(() => {
    // Match the height of expanded AccordionDetails
    if (contentRef.current) {
      setCardHeight(contentRef.current.scrollHeight + 80); // Add padding/margin
    } else {
      setCardHeight("auto");
    }
  }, [expanded]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{ m: 5 }}>
        <Grid
          container
          sx={{
            width: { xs: "100%", lg: "80%" },
            margin: "0 auto",
          }}
          spacing={2}
        >
          {/* Left Card */}
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}
            sx={{
              transition: "height 0.3s ease",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                width: "95%",
                height: "100%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                justifyContent: "space-evenly",
                alignItems: "center",
                //   gap:6,
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  FAQs Website Development
                </Typography>
              </CardContent>
              <CardContent>
                <Typography sx={{ color: "#666" }}>
                  Establishing an unmatched presence and trust on the web
                  requires a perfectly balanced website for performance and
                  aesthetics. Opting for a web development agency sometimes
                  becomes a hassle, so we make it easy for you. Here are a few
                  frequently asked questions for our services.
                </Typography>
              </CardContent>
              <Box m={1}>
                <Button  onClick={handleContact} variant="contained" color="primary">
                  Get a free quote
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Right Accordions */}
          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {accordionData.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  boxShadow: 1,
                  width: "100%",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="bold" fontSize={20}>
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#666" }}>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          my: 5,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "80%",
            },
            margin: "0 auto",
            display: "flex",
            height: "auto",
            alignItems: "center",
            justifyContent: "space-evenly",
            py: 2,
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <Box
            component="img"
            src={Testimonal}
            alt=""
            sx={{
              height: "20vh",
            }}
          />
          <Box
            sx={{
              width: { xs: "80%", lg: "50%" },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
              Performance Focused Website Development Services
            </Typography>
            <Typography>
              Existing in a wide spectrum of industries, our clientele has been
              retained for more than 10 years. Settling our roots in
              development, we ensure your website outperforms your expectations.
            </Typography>
          </Box>
          <Button onClick={handleContact} variant="contained">get a free quote</Button>
        </Box>
      </Box>
    </>
  );
}
export default Performance;
