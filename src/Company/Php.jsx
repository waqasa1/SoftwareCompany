import React from "react";
import { FaWordpress, FaLaravel, FaShieldAlt, FaCogs, FaDatabase, FaSyncAlt } from "react-icons/fa";

const Php = () => {
  const services = [
    {
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins tailored to your business needs.",
      icon: <FaWordpress style={{ fontSize: "2.5rem", color: "#777BB3" }} />,
      features: [
        "Custom theme development",
        "Plugin customization",
        "WooCommerce solutions"
      ]
    },
    {
      title: "Laravel Applications",
      description: "Enterprise-grade web applications built with Laravel framework.",
      icon: <FaLaravel style={{ fontSize: "2.5rem", color: "#FF2D20" }} />,
      features: [
        "MVC architecture",
        "Eloquent ORM",
        "Blade templating"
      ]
    },
    {
      title: "Security Enhancements",
      description: "PHP application hardening against common vulnerabilities.",
      icon: <FaShieldAlt style={{ fontSize: "2.5rem", color: "#777BB3" }} />,
      features: [
        "SQL injection prevention",
        "XSS protection",
        "CSRF mitigation"
      ]
    },
    {
      title: "Legacy System Modernization",
      description: "Upgrade and refactor older PHP codebases to modern standards.",
      icon: <FaCogs style={{ fontSize: "2.5rem", color: "#777BB3" }} />,
      features: [
        "PHP 8.x migration",
        "Code refactoring",
        "Framework integration"
      ]
    },
    {
      title: "Database Solutions",
      description: "MySQL and PostgreSQL database design and optimization.",
      icon: <FaDatabase style={{ fontSize: "2.5rem", color: "#777BB3" }} />,
      features: [
        "Schema design",
        "Query optimization",
        "Migration systems"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support for PHP applications of all sizes.",
      icon: <FaSyncAlt style={{ fontSize: "2.5rem", color: "#777BB3" }} />,
      features: [
        "Security updates",
        "Bug fixes",
        "Performance tuning"
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "linear-gradient(135deg, #f0f0f7 0%, #d0d0e6 100%)",
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
            color: "#3a3a4a",
            marginBottom: "1rem",
            lineHeight: "1.2"
          }}>
            PHP Development Services
          </h2>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#4a4a5a",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Robust PHP solutions from WordPress to enterprise Laravel applications.
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
                color: service.title.includes("Laravel") ? "#FF2D20" : "#777BB3",
                marginBottom: "1.5rem"
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#3a3a4a",
                marginBottom: "1rem"
              }}>
                {service.title}
              </h3>
              <p style={{
                color: "#4a4a5a",
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
                    color: "#4a4a5a",
                    display: "flex",
                    alignItems: "flex-start"
                  }}>
                    <span style={{
                      color: service.title.includes("Laravel") ? "#FF2D20" : "#777BB3",
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

export default Php;