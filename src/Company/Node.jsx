import React from "react";
import { FaServer, FaDatabase, FaLock, FaRocket, FaNetworkWired, FaSyncAlt } from "react-icons/fa";

const Node = () => {
  const services = [
    {
      title: "API Development",
      description: "High-performance RESTful and GraphQL APIs built with Node.js and Express.",
      icon: <FaServer style={{ fontSize: "2.5rem", color: "#68A063" }} />,
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "JWT authentication"
      ]
    },
    {
      title: "Database Integration",
      description: "Seamless integration with MongoDB, PostgreSQL, MySQL and other databases.",
      icon: <FaDatabase style={{ fontSize: "2.5rem", color: "#68A063" }} />,
      features: [
        "ORM/ODM configuration",
        "Database optimization",
        "Migration systems"
      ]
    },
    {
      title: "Authentication Systems",
      description: "Secure authentication and authorization systems for your applications.",
      icon: <FaLock style={{ fontSize: "2.5rem", color: "#68A063" }} />,
      features: [
        "OAuth integration",
        "Role-based access",
        "Password encryption"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Node.js application tuning for maximum throughput and efficiency.",
      icon: <FaRocket style={{ fontSize: "2.5rem", color: "#68A063" }} />,
      features: [
        "Cluster mode implementation",
        "Caching strategies",
        "Load testing"
      ]
    },
    {
      title: "Microservices Architecture",
      description: "Design and implement scalable microservices systems with Node.js.",
      icon: <FaNetworkWired style={{ fontSize: "2.5rem", color: "#68A063" }} />,
      features: [
        "Service decomposition",
        "Message brokers",
        "Containerization"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance for your Node.js applications.",
      icon: <FaSyncAlt style={{ fontSize: "2.5rem", color: "#68A063" }} />,
      features: [
        "Version upgrades",
        "Security patches",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "linear-gradient(135deg, #f0f7f0 0%, #d0e6d0 100%)",
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
            color: "#2c3e2c",
            marginBottom: "1rem",
            lineHeight: "1.2"
          }}>
            Node.js Development Services
          </h2>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#3a4a3a",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Scalable server-side solutions built with Node.js for high-performance applications.
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
                color: "#68A063",
                marginBottom: "1.5rem"
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#2c3e2c",
                marginBottom: "1rem"
              }}>
                {service.title}
              </h3>
              <p style={{
                color: "#3a4a3a",
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
                    color: "#3a4a3a",
                    display: "flex",
                    alignItems: "flex-start"
                  }}>
                    <span style={{
                      color: "#68A063",
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

export default Node;