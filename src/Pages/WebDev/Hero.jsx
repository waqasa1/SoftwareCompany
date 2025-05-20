import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  Card,
  CardMedia,
  Divider,
  CardActions,
  CardContent,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Performance from "./Perfomance";
import Otters from "./Otters";
import { useLocation, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Timeout ensures the DOM has mounted
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  const cardData = [
    {
      title: "Custom Website Development",
      description:
        "Custom website development is not only a customized approach to development but also design. From the very start of the design process to the very end of development and deployment, the whole process is customized. Boost your sales and ROI with custom website development services.",
    },
    {
      title: "Web Application Development",
      description:
        "We develop your web apps by your business goals and requirements, we use progressive development techniques with years of experience. Our end-to-end web application development services offer the complete lifecycle of development from design, and development to deployment and maintenance..",
    },
    {
      title: "eCommerce Web Development",
      description:
        "Attract sales like a magnet, with a custom-designed, custom-developed eCommerce website. Ranging from top platforms such as Shopify, Woocommerce, Magento, and Wix to custom e-commerce platforms designed just for you. Optimized to generate sales and outperform search engines.",
    },
    {
      title: "Web Portal Development",
      description:
        "Get your web portal developed on the right architecture and tech stack. With an effective development roadmap, our web development services focus on developing web portals with a documented approach to ensure your infrastructure and business processes are in sync and can be easily managed.",
    },
    {
      title: "UI/UX Web Design",
      description:
        "It is important to have a website that presents itself as a work of art all while delivering the right message to the end user. Our approach to UI focuses on multiple aspects and user preferences to design and ideal user interface with a perfect UX without compromising the performance of your project.",
    },
    {
      title: "Custom CMS Development",
      description:
        "Custom websites based on top-level content management systems such as the open-source WordPress to Experience Manager platform by Adobe, are all developed by our professional web developers. We customize your CMS with our result-oriented custom CMS development services.",
    },
  ];

  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 4,
          infinite: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          infinite: false,
          autoplay: false,
        },
      },
    ],
  });

  const logos = [
    "https://www.digitalotters.com/wp-content/uploads/2024/05/WordPress-Development-Award.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Goodfirms-SEO-Award.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Goodfirms-SEO-Award.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Google-Partner-Certification.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Goodfirms-SEO-Award.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Goodfirms-SEO-Award.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Google-Partner-Certification.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Goodfirms-SEO-Award.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Goodfirms-SEO-Award.webp",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Google-Partner-Certification.webp",
  ];
  const images = [
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Casabella-Interiors.jpg",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/BreezeFans.jpg",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Economy-Pk.jpg",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/TheCurrent.jpg",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Vascular-Health.jpg",
    "https://www.digitalotters.com/wp-content/uploads/2024/05/Zaitoon.jpg",
  ];
  const otterCard = [
    {
      image:
        "https://www.digitalotters.com/wp-content/uploads/2024/05/ecommerce-SEO-icon.webp",
      title: "Ecommerce",
      description:
        "Sale-oriented e-commerce web development services on Shopify, Woocommerce, Magento, Bigcommerce, Wix, and even custom websites.",
    },
    {
      image:
        "https://www.digitalotters.com/wp-content/uploads/2024/05/Healthcare-SEO-icon.webp",
      title: "Healthcare",
      description:
        "Healthcare web applications and websites focused on the ease of patients. Developed the best tech stack, optimized for performance.",
    },
    {
      image:
        "https://www.digitalotters.com/wp-content/uploads/2024/05/Real-Estate-SEO-Icon.webp",
      title: "Real Estate",
      description:
        "We have helped countless real estate companies with websites and web apps for ideal real estate listing management and sales.",
    },
    {
      image:
        "https://www.digitalotters.com/wp-content/uploads/2024/05/SaaS-SEO-Icon.webp",
      title: "SaaS Projects",
      description:
        "Our team of developers are experts in developing SaaS projects. From MERN, and MEAN to more tech stacks ideal for SaaS.",
    },
    {
      image:
        "https://www.digitalotters.com/wp-content/uploads/2024/05/EdTech-SEO-icon.webp",
      title: "EdTech",
      description:
        "Developing Edtech websites, LMS, and CRMs to manage instructors, courses, students, and more for educational purposes.",
    },
    {
      image:
        "https://www.digitalotters.com/wp-content/uploads/2024/05/Corporate-SEO-icon.webp",
      title: "Cryptocurrency",
      description:
        "Expertise in building decentralized applications and smart contracts for DeFi and NFT solutions.",
    },
  ];
  return (
    <>
      {/* -----------------------------Hero Section--------------------*/}
      <Box
        sx={{
          display: "flex",
          width: { lg: "80%" },
          margin: "20px auto",
          px: "20px",
          height: {lg:"80vh"},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", lg: "row" },
            width: "100%",
            py: "20px",
            alignItems: { xs: " ", lg: "center" },
          }}
        >
          <Box sx={{ width: { lg: "50%" } }}>
            <Typography
              sx={{
                fontSize: { xs: "30px", lg: "60px" },
                fontWeight: "700",
                letterSpacing: "0px",
                color: "#0A0D31",
                lineHeight: "1em",
                marginTop: "10px",
              }}
            >
              Top Web Development Services Agency
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", color: "gray", marginTop: "30px" }}
            >
              Evolve your digital presence with 360 web development services
              focused on creating a solid online presence. ThinkOWebsite
              transform your ideas into working websites with a next-generation
              tech stack improving ROIs massively.
            </Typography>
            <Button
              onClick={handleContact}
              variant="contained"
              disableElevation
              sx={{ marginTop: "30px" }}
            >
              Get a Free Quote
            </Button>
          </Box>
          <Box sx={{ width: { lg: "50%" }, margin: "0 auto" }}>
            <Box
              component="img"
              src="https://www.digitalotters.com/wp-content/uploads/2024/05/secured-web-development-1024x659-1.png"
              alt=""
              sx={{ width: { xs: "300px", lg: "500px" }, height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
      {/* -----------------------------technology Section--------------------*/}
      <Box
        sx={{
          backgroundColor: "#1976d2",
          height: "auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(auto-fit, minmax(120px, 1fr))",
              md: "repeat(6, 1fr)",
            },
            gap: "30px",
            justifyItems: "center",
            py: { xs: "20px", lg: "80px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.digitalotters.com/wp-content/uploads/2024/05/php.png"
              alt=""
              height={50}
              width={50}
            />
            <Typography
              sx={{
                width: "50%",
                textAlign: "center",
                marginTop: "5px",
                color: "white",
              }}
            >
              Custom PHP Development
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.digitalotters.com/wp-content/uploads/2024/06/laravel-development-services.webp"
              alt=""
              height={50}
              width={50}
            />
            <Typography
              sx={{
                width: "50%",
                textAlign: "center",
                marginTop: "5px",
                color: "white",
              }}
            >
              Laravel Development
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.digitalotters.com/wp-content/uploads/2024/05/shopify.png"
              alt=""
              height={50}
              width={50}
            />
            <Typography
              sx={{
                width: "50%",
                textAlign: "center",
                marginTop: "5px",
                color: "white",
              }}
            >
              Shopify Development
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=FFFFFF"
              alt=""
              height={50}
              width={50}
            />
            <Typography
              sx={{
                width: "50%",
                textAlign: "center",
                marginTop: "5px",
                color: "white",
              }}
            >
              React Development
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.digitalotters.com/wp-content/uploads/2024/05/wordpress.png"
              alt=""
              height={50}
              width={50}
            />
            <Typography
              sx={{
                width: "50%",
                textAlign: "center",
                marginTop: "5px",
                color: "white",
              }}
            >
              WordPress Development
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=FFFFFF"
              alt=""
              height={50}
              width={50}
            />
            <Typography
              sx={{
                width: "50%",
                textAlign: "center",
                marginTop: "5px",
                color: "white",
              }}
            >
              Node Development
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* -----------------------------Card Section--------------------*/}
      <Box>
        <Box sx={{ width: { lg: "80%" }, margin: "0 auto", py: "20px" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "48px" },
              fontWeight: "700",
              letterSpacing: "-1px",
              textAlign: "center",
            }}
          >
            Website Development Services
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              textAlign: "center",
              color: "gray",
            }}
          >
            Expert in creating robust web applications, and websites on the top
            tech stack. With secured and optimized development practices, our
            web development services are driven by innovation and creativity.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            {cardData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  width: { xs: "100%", lg: "45%" },
                  padding: "10px",
                  margin: { xs: "10px", lg: "0" },
                  transition: "0.3s",
                  ":hover": {
                    boxShadow: 24,
                  },
                  "&:hover .hover-text": {
                    color: "blue",
                  },
                }}
              >
                <CardContent sx={{ minHeight: "100px" }}>
                  <Typography
                    gutterBottom
                    className="hover-text"
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "24px", fontWeight: 600 }}
                  >
                    {card.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              onClick={() => navigate("/solution")}
              variant="contained"
              sx={{
                textTransform: "none",
                ":hover": { backgroundColor: "black" },
              }}
            >
              View All Solutions
            </Button>
          </Box>
        </Box>
      </Box>
      {/*----------Have a Project? Section -----------------*/}
      <Box
        sx={{
          backgroundColor: "#1976d2",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: "20px",
        }}
      >
        <Box
          sx={{
            gap: "30px",
            justifyItems: "center",
            py: { xs: "20px", lg: "80px" },
          }}
        >
          <Typography
            sx={{ fontSize: "36px", color: "white", marginBottom: "20px" }}
          >
            Have a Project? Let's Discuss
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "left", lg: "center" },
              width: { lg: "80%" },
              color: "white",
            }}
          >
            Let’s elevate your digital presence with a website that speaks your
            brand the way you want. From custom web development services, you
            can have a digital portfolio, corporate website, or an online store.
            Convert your ideas, and designs into a functional dynamic website.
          </Typography>
          <Button
            onClick={handleContact}
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "black",
              marginTop: "20px",
              marginLeft: { xs: "-50%", lg: "0px" },
            }}
          >
            Get a Free Quote
          </Button>
        </Box>
      </Box>
      {/*---------Webdev Services Section-------------*/}
      <Box>
        <Box sx={{ width: { lg: "80%" }, margin: "0 auto", py: "20px" }}>
          <Typography
            sx={{
              fontSize: { xs: "20px", lg: "48px" },
              fontWeight: "700",
              letterSpacing: "-1px",
              textAlign: "center",
            }}
          >
            Website Development Services
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              textAlign: "center",
              color: "gray",
            }}
          >
            With an experienced in-house development team, we operate as a web
            development agency focusing on frontend, backend, and full-stack
            development.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { lg: "80%" },
            margin: "20px auto",
            px: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", lg: "row" },
              width: "100%",
              py: "20px",
              alignItems: { xs: " ", lg: "center" },
            }}
          >
            <Box sx={{ width: { lg: "50%" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "30px", lg: "1.8em" },
                  fontWeight: "700",
                  letterSpacing: "0px",
                  color: "#0A0D31",
                  lineHeight: "1em",
                  marginTop: "10px",
                }}
              >
                Frontend Development
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", color: "gray", marginTop: "20px" }}
              >
                Seamless frontend development on top-notch tech stacks, or
                content management systems. As a website development agency, we
                focus on visually stunning websites, web applications, and more
                for all our clients. To blend creativity and functionality with
                the design, our skilled developers engage in creating the best
                user experience for every website visitor.
              </Typography>
              <Button
                onClick={handleContact}
                variant="contained"
                disableElevation
                sx={{ marginTop: "20px" }}
              >
                Get a Free Quote
              </Button>
            </Box>
            <Box sx={{ width: { lg: "50%" }, margin: "0 auto" }}>
              <Box
                component="img"
                src="https://www.digitalotters.com/wp-content/uploads/2024/06/otter-logo-07-_1_-1.webp"
                alt=""
                sx={{ width: { xs: "300px", lg: "500px" }, height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { lg: "80%" },
            margin: "20px auto",
            px: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              width: "100%",
              py: "20px",
              alignItems: { xs: " ", lg: "center" },
              gap: "100px",
            }}
          >
            <Box sx={{ width: { lg: "50%" }, margin: "0 auto" }}>
              <Box
                component="img"
                src="https://www.digitalotters.com/wp-content/uploads/2024/06/basckend-developers.webp"
                alt=""
                sx={{ width: { xs: "300px", lg: "500px" }, height: "auto" }}
              />
            </Box>
            <Box sx={{ width: { lg: "50%" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "30px", lg: "1.8em" },
                  fontWeight: "700",
                  letterSpacing: "0px",
                  color: "#0A0D31",
                  lineHeight: "1em",
                  marginTop: "10px",
                }}
              >
                Backend Development
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", color: "gray", marginTop: "20px" }}
              >
                A strong backbone of the website or web app is what makes your
                web development reliable. With a focus on reliability and
                performance, backend development can be customized with
                front-end development and designs. Every web application and
                website has a tech stack that covers all possible
                functionalities required by the brand, selected by our team of
                professionals.
              </Typography>
              <Button
                onClick={handleContact}
                variant="contained"
                disableElevation
                sx={{ marginTop: "20px" }}
              >
                Get a Free Quote
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { lg: "80%" },
            margin: "20px auto",
            px: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", lg: "row" },
              width: "100%",
              py: "20px",
              alignItems: { xs: " ", lg: "center" },
              gap: "100px",
            }}
          >
            <Box sx={{ width: { lg: "50%" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "30px", lg: "1.8em" },
                  fontWeight: "700",
                  letterSpacing: "0px",
                  color: "#0A0D31",
                  lineHeight: "1em",
                  marginTop: "10px",
                }}
              >
                Fullstack Web Development
              </Typography>
              <Typography
                sx={{ fontSize: "1rem", color: "gray", marginTop: "20px" }}
              >
                Our full stack development services focus not only frontend and
                backend development but also on API Integrations, database
                management and more. With efficient, secure and scalable
                development, our web development services are focused on
                end-user experience as much as its focused on clients
                satisfaction.
              </Typography>
              <Button
                onClick={handleContact}
                variant="contained"
                disableElevation
                sx={{ marginTop: "20px" }}
              >
                Get a Free Quote
              </Button>
            </Box>
            <Box sx={{ width: { lg: "50%" }, margin: "0 auto" }}>
              <Box
                component="img"
                src="https://www.digitalotters.com/wp-content/uploads/2024/06/full-stack.webp"
                alt=""
                sx={{ width: { xs: "300px", lg: "500px" }, height: "auto" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/*----------------grayscale images-----------------------*/}
      <Box
        sx={{
          backgroundColor: "#1976d2",
          px: "20px",
          py: { xs: "20px", lg: "80px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "36px",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Websites We've Built
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {images.map((src, index) => (
            <Box
              key={index}
              component="img"
              src={src}
              alt={`interior-${index}`}
              sx={{
                width: { xs: "80%", sm: "30%" },
                height: "auto",
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  filter: "grayscale(0%)",
                  transform: "scale(1.2)",
                  zIndex: "1500",
                },
              }}
            />
          ))}
        </Box>
      </Box>
      {/*--------------Industries We Cater-----------------------*/}
      <Box id="industries-section">
        <Box
          sx={{
            width: { lg: "80%" },
            margin: "0 auto",
            py: "50px",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "center", lg: "stretch" },
          }}
        >
          <Box
            sx={{
              width: { xs: "80%", lg: "30%" },
              height: "auto",
              backgroundColor: "#f5f5f5",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>
              Industries We Cater
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              Top-notch Web Development Services
            </Typography>
            <Typography sx={{ marginTop: "10px", fontSize: "17px" }}>
              Utilizing a collection of top-notch programming and developing
              languages, we have successfully catered to more than 15 different
              sectors. Some of our latest works are related to Edtech, Fintech,
              Real Estate, and Healthcare sectors. We Focus on performance,
              scalability, continuous improvements, and ease of use as the core
              elements of our development services.
            </Typography>
            <Typography sx={{ marginTop: "50px", fontSize: "17px" }}>
              Have a web development project in mind? Let us help you out with
              all your frontend, backend and full-stack development.
            </Typography>
            <Button
              onClick={handleContact}
              variant="contained"
              disableElevation
              sx={{ marginTop: "10px", backgroundColor: "black" }}
            >
              Get a Free Quote
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              width: { xs: "90%", lg: "80%" },
            }}
          >
            {otterCard.map((card, index) => (
              <Card
                key={index}
                sx={{
                  width: { xs: "100%", lg: "40%" },
                  padding: "10px",
                  margin: { xs: "10px", lg: "10px" },
                  transition: "0.3s",
                  ":hover": {
                    boxShadow: 24,
                  },
                  "&:hover .hover-text": {
                    color: "blue",
                  },
                  height: "auto",
                }}
              >
                <CardContent sx={{ minHeight: "120px" }}>
                  <img
                    alt={card.title}
                    src={card.image}
                    height="50"
                    width="50"
                    style={{
                      paddingLeft: "20px",
                      marginLeft: "-20px",
                      marginBottom: "10px",
                    }}
                  />
                  <Typography
                    gutterBottom
                    className="hover-text"
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "24px", fontWeight: 600 }}
                  >
                    {card.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      {/*----------Lets discuss the future? Section -----------------*/}
      <Box
        sx={{
          backgroundColor: "#1976d2",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: "20px",
        }}
      >
        <Box
          sx={{
            gap: "30px",
            justifyItems: "center",
            py: { xs: "20px", lg: "80px" },
          }}
        >
          <Typography
            sx={{ fontSize: "36px", color: "white", marginBottom: "20px" }}
          >
            Let's Discuss The Future of Your Web Presence
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "left", lg: "center" },
              width: { lg: "80%" },
              color: "white",
            }}
          >
            With pricing custom to you, your project, and your requirements feel
            free to contact us for a web development proposal. Let’s discuss and
            strategize your digital presence on the web with your digital
            portfolio, your website
          </Typography>
          <Button
            onClick={handleContact}
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "black",
              marginTop: "20px",
              marginLeft: { xs: "-50%", lg: "0px" },
            }}
          >
            Get a Free Quote
          </Button>
        </Box>
      </Box>
      {/*-------------------*/}
      <Performance />
      <Otters />
    </>
  );
};

export default Hero;
