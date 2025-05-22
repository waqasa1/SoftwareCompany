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

    <div style={{ padding: '2rem',width:"70%", margin:"0 auto" }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>About Us</h2>
        <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            {teamMembers.map((member, idx) => (
                <div style={{
                    // width: '320px',
                    width:"20%",
                    height:"20%",
                    textAlign: 'center',
                    background: '#fff',
                    padding: '1rem'
                }}>
                    <img
                        src={member.image}
                        alt={member.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            // borderRadius: '50%',
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