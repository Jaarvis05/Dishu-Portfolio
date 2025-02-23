import React, { useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/kumar1.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Resume from '/src/assets/dishu.pdf'

const Hero = () => {
  const openResume = () => {
    window.open(Resume, "_blank");
  };

  useEffect(() => {
    // Initialize Intersection Observer for the paragraph tags inside Hero
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add class when in view (opacity 1)
        } else {
          entry.target.classList.remove('visible'); // Remove class when out of view (opacity 0)
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the paragraph is in view

    // Observe all paragraph tags inside Hero
    const paragraphs = document.querySelectorAll('.hero p');
    paragraphs.forEach((p) => observer.observe(p));

    return () => {
      paragraphs.forEach((p) => observer.unobserve(p)); // Clean up observer
    };
  }, []);

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="empty" />
      <h1><span>Hey! I am Dishu Kumar....</span></h1>
      <p>I am a FullStack Developer, Web Developer & Web Designer from Gurugram. I am a Fresher and looking for an opportunity.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume" onClick={openResume}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
