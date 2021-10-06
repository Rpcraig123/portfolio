import React from 'react'
import { ActivityTimeline, TimelineMarker } from 'react-rainbow-components';

export default function AboutMe() {

  const iconStyles = { width: 40 };
  const container = { width: 500, margin: 'auto', marginTop: 36, };

  return (
    <div className="aboutme" id="aboutme">
      
      <div className="About-Me-Left">
        <img src="assets/Intro3.gif" alt="" />
      </div>
      <div className="About-Me-Right">
        <div style={container} className="timeline">
          <ActivityTimeline>
            <TimelineMarker
              label="Finished Software Engineering Bootcamp"
              icon={<img src="assets/GA Logo.png" alt="GA Logo" style={iconStyles}/>}
              datetime="2021"
              description="Graduated from the Software Engineering Immersive program with General Assembly."
            />
            <TimelineMarker
              label="Earned my EIT license"
              icon={<img src="assets/eng-logo.png" alt="UH Logo" style={iconStyles}/>}
              datetime="2019"
              description="Passed the Fundamentals of Engineering exam and earned my EIT license with the state of Texas."
            />
            <TimelineMarker
              label="Graduated from the University of Houston"
              icon={<img src="assets/UH-Logo.jpg" alt="UH Logo" style={iconStyles}/>}
              datetime="2019"
              description="Earned my Bachelor of Science in Mechanical Engineering and a minor in Mathematics."
            />
          </ActivityTimeline>
        </div>
      </div>
    </div>
  )
}
