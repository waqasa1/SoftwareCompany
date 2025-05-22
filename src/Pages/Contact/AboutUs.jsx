import React from 'react';

const teamMembers = [
    {
        name: 'Alice Johnson',
        designation: 'CEO',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        name: 'Bob Smith',
        designation: 'CTO',
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
        name: 'Carol Lee',
        designation: 'Lead Designer',
        image: 'https://randomuser.me/api/portraits/women/47.jpg',
    },
    {
        name: 'David Kim',
        designation: 'Marketing Head',
        image: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
];

const AboutUs = () => (
    <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Us</h2>
        <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            {teamMembers.map((member, idx) => (
                <div key={idx} style={{
                    width: '220px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    textAlign: 'center',
                    background: '#fff',
                    padding: '1rem'
                }}>
                    <img
                        src={member.image}
                        alt={member.name}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            marginBottom: '1rem'
                        }}
                    />
                    <h3 style={{ margin: '0.5rem 0 0.2rem' }}>{member.name}</h3>
                    <p style={{ color: '#666', margin: 0 }}>{member.designation}</p>
                </div>
            ))}
        </div>
    </div>
);

export default AboutUs;