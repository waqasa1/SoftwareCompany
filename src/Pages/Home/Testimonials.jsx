import { useRef } from "react"
import Slider from "react-slick"
import { Paper, Rating, Box, Typography, IconButton, Divider } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import test1 from '../../assets/test1.webp'
import test2 from '../../assets/test2.webp'
import test3 from '../../assets/test3.svg'

const testimonials = [
  {
    id: 1,
    text: "Tecnologia has been an outstanding partner. Their team is professional, knowledgeable and customer-service driven. Tecnologia proactive collaborative approach has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy.",
    author: "Amanda Parks",
    position: "Network Manager, Healthcare Organization",
    avatar: test1,
  },
  {
    id: 2,
    text: "Tecnologia has been an outstanding partner. Their team is professional, knowledgeable and customer-service driven. Tecnologia proactive collaborative approach has been critical in helping us build an IT infrastructure that enables our success today and supports our long-term positioning strategy.",
    author: "Michael Johnson",
    position: "CTO, Tech Startup",
    avatar: test2,
  },
  {
    id: 3,
    text: "I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed Services should be done. They do their very best to make sure you succeed. If there’s an issue, they step in immediately. We will continue to be a customer for years to come.",
    author: "Sarah Williams",
    position: "Operations Director, Retail Chain",
    avatar: test3,
  },
]

export default function Testimonials() {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  }

  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <Box sx={{ width: { lg: '80%' }, mx:'auto', px: '15px' }}>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 800,
          p: 4,
          borderRadius: 2,
          border: "1px solid #eaeaea",
          mx:'auto'
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="outline-none">
              <div className="mb-5" style={{display:'flex'}}>
                <img src={testimonial.avatar} alt={testimonial.author} width={50} height={50} style={{ marginBottom: '20px' }} />
                <IconButton onClick={goToPrevious} sx={{ bgcolor: "#f5f5f5", mr: 1, "&:hover": { color: "blue" }, display: { xs: 'block', lg: 'none' }, ml:'auto' }}>
                  <ArrowBackIcon />
                </IconButton>
                <IconButton onClick={goToNext} sx={{ bgcolor: "#f5f5f5", "&:hover": { color: "blue" }, display: { xs: 'block', lg: 'none' } }}>
                  <ArrowForwardIcon />
                </IconButton>
              </div>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, fontSize: { xs: '18px', lg: "30px" } }}>
                {testimonial.text}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.position}
                  </Typography>
                </Box>
              </Box>
            </div>
          ))}
        </Slider>

        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: '-8px', flexDirection: { xs: 'column', lg: 'row' } }}>
          <IconButton onClick={goToPrevious} sx={{ bgcolor: "#f5f5f5", mr: 1, "&:hover": { color: "blue" }, display: { xs: 'none', lg: 'block' } }}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={goToNext} sx={{ bgcolor: "#f5f5f5", "&:hover": { color: "blue" }, display: { xs: 'none', lg: 'block' } }}>
            <ArrowForwardIcon />
          </IconButton>
          <Divider sx={{ width: '80%', margin: '0 auto', mb: '20px', display: { xs: 'block', lg: 'none' } }} />
        </Box>
      </Paper>
    </Box>
  )
}
