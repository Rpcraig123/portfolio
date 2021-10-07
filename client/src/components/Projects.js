import React from 'react'
import { useEffect, useState } from 'react';
import { featuredPortfolio } from './data';
import { Card, Container } from 'react-bootstrap';

export default function Projects() {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(featuredPortfolio);
    }, [data])
    
  return (
    <div className="projects" id="projects">
      {/* <Container> */}
      <h1>Projects</h1>
      <div className="project-container">
        {data.map((d) => (
          // <a href={d.gitLink}>
            <div className="project-card">
              <Card style={{ width: '18rem' }}>
              <div className="project-item">
                <img src={d.img} alt=""/>
                {/* <h3>{d.title}</h3> */}
              </div>
                <Card.Body>
                  <Card.Title>{d.title}</Card.Title>
                  <Card.Text>{d.desc}</Card.Text>
                  <Card.Link href={d.gitLink}>GitHub</Card.Link>
                  <Card.Link href="#">Deployed Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
            
          // </a>
        ))}
      </div>
      {/* </Container> */}
    </div>
  )
}
