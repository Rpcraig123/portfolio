import React from "react"
import { Card, Image } from 'react-bootstrap';

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="contact-left" >
        <Image src="assets/Contact3.gif" alt="email gif" fluid id="contact-image"/>
      </div>
      <div className="contact-right">
        <h2 id="contact-text">Contact Me!</h2>
        <Card bg='info' text='dark' style={{width: '22rem' }} className="mb-2">
          <Card.Body>
            <Card.Title>Email</Card.Title>
            <Card.Text>
              Ryanpcraig1@gmail.com
            </Card.Text>
          </Card.Body>
        </Card>
        <a href="https://www.linkedin.com/in/ryancraigeit/" id="resume-link">
          <Card bg='info' text='dark' style={{width: '22rem' }} className="mb-2">
            <Card.Body>
              <Card.Title>Linkedin</Card.Title>
              <Card.Text>
                https://www.linkedin.com/in/ryancraigeit/
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
        <a href="https://github.com/Rpcraig123" id="resume-link">
          <Card bg='info' text='dark' style={{width: '22rem' }} className="mb-2">
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Card.Text>
                https://github.com/Rpcraig123
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
        <a href="https://drive.google.com/file/d/1ZJxXW8sKGEWzg0wdsEzTL4BXkLXZvB6o/view?usp=sharing" id="resume-link">
          <Card bg='info' text='dark' style={{width: '22rem' }} className="mb-2">
            <Card.Body>
              <Card.Title>Resume</Card.Title>
              <Card.Text>
                Click to View!
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </div>
    </div>
  )
}