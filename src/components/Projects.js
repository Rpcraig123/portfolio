import React from 'react'
import { useEffect, useState } from 'react';
import { featuredPortfolio } from './data';
import { Card } from 'react-bootstrap';

export default function Projects() {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(featuredPortfolio);
    }, [data])
    
  return (
    <div className="projects" id="projects">
      <div className="project-scale">
        <div className="project-title">
          <h1>Projects</h1>
        </div>
        <div className="project-container">
          {data.map((d) => (
              <div className="project-card">
                <Card>
                <div className="project-item">
                  <img src={d.img} alt=""/>
                </div>
                  <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.desc}</Card.Text>
                    <Card.Link href={d.gitLink} className="btn btn-4"><img src="assets/GitHub_Link.png" width="90px" alt="GitHub Link"/></Card.Link>
                  </Card.Body>
                </Card>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
