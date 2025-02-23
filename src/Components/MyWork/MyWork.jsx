import React, { useState } from 'react';
import './MyWork.css';
import { Mywork_data } from '../../assets/mywork_data';
import WhiteArrow from '../WhiteArrow';
import underline from '/src/assets/underline.png';

const MyWork = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={underline} alt="underline" />
      </div>

      <div className="mywork-container">
        {Mywork_data.slice(0, visibleProjects).map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt="Project" />
            <div className="work-overlay">
              <h3>{work.w_name}</h3>
              <p>{work.w_descrip}</p>
              <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < Mywork_data.length && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>Show More</p>
          <WhiteArrow />
        </div>
      )}
    </div>
  );
};

export default MyWork;
