import React, { useState } from 'react'
import { Box, Typography, Button, Rating,  Card,
  CardMedia,
  Divider,
  CardActions,
  CardContent, } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Hero = () => {
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
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024, // screens smaller than 1024px
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768, // screens smaller than 768px
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                    autoplay: false
                }
            },
            {
                breakpoint: 480, // screens smaller than 480px
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                    autoplay: false
                }
            }
        ]
    });

    const images = [
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

    ]
    return (
        <>
            <Box sx={{ display: "flex", width: { lg: "80%" }, margin: "20px auto", px: "20px", }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, width: '100%', py: '20px', alignItems: { xs: ' ', lg: 'center' } }}>
                    <Box sx={{ width: { lg: '50%' } }}>
                        <Typography sx={{ fontSize: { xs: '30px', lg: '60px' }, fontWeight: '700', letterSpacing: '0px', color: '#0A0D31', lineHeight: '1em', marginTop: '10px' }}>Top Web Development Services Agency</Typography>
                        <Typography sx={{ fontSize: '1rem', color: 'gray', marginTop: '10px' }}>Evolve your digital presence with 360 web development services focused on creating a solid online presence. Digital Otters transform your ideas into working websites with a next-generation tech stack improving ROIs massively.</Typography>
                        <Box sx={{ paddingRight: '100px', marginTop: '10px' }} >
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <Box key={index} >
                                        <img src={image} alt={'logo'} style={{ height: '50px', width: '50px' }} />
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                        <Button variant='contained' disableElevation sx={{ marginTop: '10px' }}>Get a Free Quote</Button>
                        <Typography sx={{ marginTop: '10px' }}>RECOGNIZED BY:</Typography>
                        <Box sx={{ display: 'flex', gap: '20px', mt: '10px' }}>
                            <Box sx={{ mb: 2 }}>
                                <Box>
                                    Reviewed on
                                    <Rating
                                        name="read-only"
                                        value={5}
                                        readOnly
                                        sx={{ marginLeft: "10px" }}
                                        size="small"
                                    />
                                </Box>
                                <Box>
                                    {" "}
                                    <img
                                        src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/clutch-logo.svg"
                                        alt="logo"
                                        style={{ maxWidth: "80px", marginRight: "10px" }}
                                    />
                                    100+ reviews
                                </Box>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Box>
                                    <Rating
                                        name="read-only"
                                        value={5}
                                        readOnly
                                        sx={{ marginLeft: "10px" }}
                                        size="small"
                                    />
                                </Box>
                                <Box sx={{ marginTop: '8px', marginLeft: '10px' }}>
                                    {" "}
                                    <img
                                        src="https://vectorseek.com/wp-content/uploads/2023/09/Goodfirms-Logo-Vector.svg-.png"
                                        alt="logo"
                                        style={{ maxWidth: "100px", marginRight: "10px" }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: { lg: '50%' }, margin: '0 auto' }}>
                        <Box component="img" src="https://www.digitalotters.com/wp-content/uploads/2024/05/secured-web-development-1024x659-1.png" alt="" sx={{ width: { xs: '300px', lg: '500px' }, height: 'auto' }} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#07304B", height: 'auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(auto-fit, minmax(120px, 1fr))',
                        md: 'repeat(6, 1fr)',
                    },
                    gap: '30px',
                    justifyItems: 'center',
                    py: { xs: '20px', lg: '80px' }
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="https://www.digitalotters.com/wp-content/uploads/2024/05/php.png" alt="" height={50} width={50} />
                        <Typography sx={{ width: '50%', textAlign: 'center', marginTop: '5px', color: 'white' }}>Custom PHP Development</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="https://www.digitalotters.com/wp-content/uploads/2024/06/laravel-development-services.webp" alt="" height={50} width={50} />
                        <Typography sx={{ width: '50%', textAlign: 'center', marginTop: '5px', color: 'white' }}>Laravel Development</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="https://www.digitalotters.com/wp-content/uploads/2024/05/shopify.png" alt="" height={50} width={50} />
                        <Typography sx={{ width: '50%', textAlign: 'center', marginTop: '5px', color: 'white' }}>Shopify Development</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="https://www.digitalotters.com/wp-content/uploads/2024/05/MAGENTO-1.png" alt="" height={50} width={50} />
                        <Typography sx={{ width: '50%', textAlign: 'center', marginTop: '5px', color: 'white' }}>Magento Development</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="https://www.digitalotters.com/wp-content/uploads/2024/05/wordpress.png" alt="" height={50} width={50} />
                        <Typography sx={{ width: '50%', textAlign: 'center', marginTop: '5px', color: 'white' }}>WordPress Development</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="https://www.digitalotters.com/wp-content/uploads/2024/05/python.png" alt="" height={50} width={50} />
                        <Typography sx={{ width: '50%', textAlign: 'center', marginTop: '5px', color: 'white' }}>Python Development</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#B3C9E7" }}>
                <Box sx={{ width: { lg: "80%" }, margin: "0 auto", py:'20px' }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "20px", lg: "48px" },
                            fontWeight: "700",
                            letterSpacing: "-1px",
                            textAlign:'center'
                        }}
                    >
                        Website Development Services
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "15px" ,
                            textAlign:'center',
                            color:'gray'
                        }}
                    >
                        Expert in creating robust web applications, and websites on the top tech stack. With secured and optimized development practices, our web development services are driven by innovation and creativity.
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


        </>
    )
}

export default Hero
