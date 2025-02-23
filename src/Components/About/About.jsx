import React, { useEffect } from 'react';
import './About.css';
import profile_img from '../../assets/kumar1.svg';
import underline from '/src/assets/underline.png';

const About = () => {
  useEffect(() => {
    // Initialize Intersection Observer for the paragraphs
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add class when in view (opacity 1)
        } else {
          entry.target.classList.remove('visible'); // Remove class when out of view (opacity 0)
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the paragraph is in view

    // Observe all paragraphs
    const paragraphs = document.querySelectorAll('.about-para p');
    paragraphs.forEach((p) => observer.observe(p));

    return () => {
      paragraphs.forEach((p) => observer.unobserve(p)); // Clean up observer
    };
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={underline} alt="none" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="empty" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p className="mb-4 text-lg lg-text-xl">As a recent graduate with a strong academic background in B.tech, I am eager to leverage my theoretical knowledge and enthusiasm to contribute to a dynamic work environment.</p>
            <p className="mb-4 text-lg lg-text-xl">While new to the professional landscape, I am a quick learner, highly adaptable, and passionate about applying my skills to solve real-world problems, making me a valuable asset to any team seeking fresh perspectives and dedication to excellence.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>React Js</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Node Js</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>MySQL</p><hr style={{ width: "75%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0.4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
