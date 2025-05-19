import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaChartLine, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

const ReactServices = () => {
  const services = [
    {
      title: "Custom React Development",
      description: "Tailored React applications built from scratch to meet your exact business requirements with optimal performance.",
      icon: <FaCode style={{ fontSize: "2.5rem", color: "#4263eb" }} />,
      features: [
        "Component-based architecture",
        "Custom hooks development",
        "Performance optimization"
      ]
    },
    {
      title: "React Native Apps",
      description: "Cross-platform mobile applications that deliver native-like performance on both iOS and Android.",
      icon: <FaMobileAlt style={{ fontSize: "2.5rem", color: "#4263eb" }} />,
      features: [
        "Single codebase for both platforms",
        "Native module integration",
        "Offline-first approach"
      ]
    },
    {
      title: "Full-Stack Solutions",
      description: "Complete solutions with React frontends paired with Node.js, Express, or other backend technologies.",
      icon: <FaServer style={{ fontSize: "2.5rem", color: "#4263eb" }} />,
      features: [
        "RESTful API integration",
        "GraphQL implementations",
        "Real-time functionality"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Expert analysis and tuning to make your React applications blazing fast.",
      icon: <FaChartLine style={{ fontSize: "2.5rem", color: "#4263eb" }} />,
      features: [
        "Bundle size reduction",
        "Lazy loading implementation",
        "Memoization techniques"
      ]
    },
    {
      title: "Security Hardening",
      description: "Comprehensive security measures to protect your React applications from modern threats.",
      icon: <FaShieldAlt style={{ fontSize: "2.5rem", color: "#4263eb" }} />,
      features: [
        "XSS protection",
        "CSRF prevention",
        "Authentication best practices"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support to keep your React applications up-to-date and running smoothly.",
      icon: <FaSyncAlt style={{ fontSize: "2.5rem", color: "#4263eb" }} />,
      features: [
        "React version upgrades",
        "Bug fixes & patches",
        "Feature enhancements"
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "linear-gradient(135deg,rgb(230, 236, 247) 0%,rgb(176, 206, 230) 100%)",
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
            color: "#212529",
            marginBottom: "1rem",
            lineHeight: "1.2"
          }}>
            Our React Development Services
          </h2>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#495057",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            We build high-performance React applications that drive business growth and deliver exceptional user experiences.
          </p>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr"
          }
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              background: "white",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)"
              }
            }}>
              <div style={{ 
                fontSize: "2.5rem",
                color: "#4263eb",
                marginBottom: "1.5rem"
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#212529",
                marginBottom: "1rem"
              }}>
                {service.title}
              </h3>
              <p style={{
                color: "#495057",
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
                    color: "#495057",
                    display: "flex",
                    alignItems: "flex-start"
                  }}>
                    <span style={{
                      color: "#4263eb",
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

export default ReactServices;