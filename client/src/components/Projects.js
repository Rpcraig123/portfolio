import React from 'react'
import { useEffect, useState } from 'react';
import { featuredPortfolio } from './data';

export default function Projects() {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(featuredPortfolio);
    }, [data])
    
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-container">
        {data.map((d) => (
          <a href={d.gitLink}>
            <div className="project-item">
              <img src={d.img} alt=""/>
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
