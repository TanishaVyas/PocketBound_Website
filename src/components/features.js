import React, { useState, useEffect } from 'react';
import img1 from '../Images/1.png';
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';
import img4 from '../Images/4.png';
import img5 from '../Images/5.png';
import img6 from '../Images/6.png';

const VrFeaturesPage = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (feature) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [feature]: !prevState[feature],
    }));
  };

  const handleResize = () => {
    // Your code to handle resize
  };

  useEffect(() => {
    handleResize(); // Call once to set the initial screen size
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const features = [
    { title: 'Game Engine Software', description: 'Turn any 3D game into VR.', image: img1 },
    { title: 'Mobile-Centric Approach', description: 'Use your existing mobile phone for VR.', image: img2 },
    { title: 'Microcontroller Integration', description: 'Diverse controller options for an immersive experience.', image: img3 },
    { title: 'DIY Headset Option', description: 'Personalize your VR setup.', image: img4 },
    { title: 'Game Plugin', description: 'Effortless conversion with a one-click plugin.', image: img5 },
    { title: 'Open-Source and Premium Models', description: 'Community-driven development and enterprise solutions.', image: img6 },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#180F22',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature-box"
          onClick={() => toggleDetails(feature.title)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #ccc',
            borderRadius: '10px',
            margin: '0 5vw 5vw 0',
            padding: '0',
            cursor: 'pointer',
            width: window.innerWidth < 600 ? "45%" : "20%",
            height: '25rem',
            boxSizing: 'border-box',
            position: 'relative',
            backgroundColor: 'white',
          }}
        >
          <img src={feature.image} alt="Feature Image" style={{ maxwidth: '45%',maxHeight:"40%", borderRadius: '10px 10px 0 0', alignSelf: 'center' }} />
          <h2 style={{ color: '#333', margin: '10px 0' }}>{feature.title}</h2>
          <p className={showDetails[feature.title] ? '' : 'hidden'} style={{ color: '#666' }}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VrFeaturesPage;
