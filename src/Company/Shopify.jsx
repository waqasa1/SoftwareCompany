import React from "react";
import { FaShoppingCart, FaPalette, FaPlug, FaChartLine, FaMobileAlt, FaHeadset } from "react-icons/fa";

const Shopify = () => {
  const services = [
    {
      title: "Store Setup & Configuration",
      description: "Complete Shopify store setup tailored to your brand and products.",
      icon: <FaShoppingCart style={{ fontSize: "2.5rem", color: "#95BF47" }} />,
      features: [
        "Theme selection",
        "Payment gateway setup",
        "Tax configuration"
      ]
    },
    {
      title: "Custom Theme Development",
      description: "Unique Shopify themes designed to reflect your brand identity.",
      icon: <FaPalette style={{ fontSize: "2.5rem", color: "#95BF47" }} />,
      features: [
        "Responsive design",
        "Custom Liquid templates",
        "Brand-aligned styling"
      ]
    },
    {
      title: "App Integration",
      description: "Seamless integration of essential Shopify apps and plugins.",
      icon: <FaPlug style={{ fontSize: "2.5rem", color: "#95BF47" }} />,
      features: [
        "Inventory management",
        "Marketing tools",
        "Analytics integration"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Speed and performance tuning for your Shopify store.",
      icon: <FaChartLine style={{ fontSize: "2.5rem", color: "#95BF47" }} />,
      features: [
        "Page load optimization",
        "Image compression",
        "Lazy loading"
      ]
    },
    {
      title: "Mobile Experience",
      description: "Exceptional mobile shopping experiences for your customers.",
      icon: <FaMobileAlt style={{ fontSize: "2.5rem", color: "#95BF47" }} />,
      features: [
        "Mobile-first design",
        "PWA capabilities",
        "Touch optimization"
      ]
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance and support for your Shopify store.",
      icon: <FaHeadset style={{ fontSize: "2.5rem", color: "#95BF47" }} />,
      features: [
        "Regular updates",
        "Bug fixes",
        "Feature additions"
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "linear-gradient(135deg, #f0f7e6 0%, #d0e6b0 100%)",
      padding: "5rem 1.5rem"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{
          textAlign: "center",
          marginBottom: "3rem"
        }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
            fontWeight: "700",
            color: "#3a4a2c",
            marginBottom: "1rem",
            lineHeight: "1.2"
          }}>
            Shopify Development Services
          </h2>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#4a5a3a",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Complete e-commerce solutions built on the Shopify platform.
          </p>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease"
            }}>
              <div style={{ 
                fontSize: "2.5rem",
                color: "#95BF47",
                marginBottom: "1.5rem"
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#3a4a2c",
                marginBottom: "1rem"
              }}>
                {service.title}
              </h3>
              <p style={{
                color: "#4a5a3a",
                lineHeight: "1.6",
                marginBottom: "1.5rem"
              }}>
                {service.description}
              </p>
              <ul style={{
                listStyle: "none",
                padding: "0",
                margin: "0"
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{
                    marginBottom: "0.5rem",
                    color: "#4a5a3a",
                    display: "flex",
                    alignItems: "flex-start"
                  }}>
                    <span style={{
                      color: "#95BF47",
                      marginRight: "0.5rem",
                      fontWeight: "bold"
                    }}>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopify;