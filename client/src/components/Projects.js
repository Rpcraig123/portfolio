import React from 'react'
// import PortfolioList from './PortfolioList';
import { useEffect, useState } from 'react';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from './data';

export default function Projects() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    // const list = [
    //   {
    //     id: "featured1",
    //     title: "Main",
    //   },
    //   {
    //     id: "featured2",
    //     title: "Featured2"
    //   },
    //   {
    //     id: "featured3",
    //     title: "Featured3"
    //   },
    //   {
    //     id: "featured4",
    //     title: "Featured4"
    //   },
    //   {
    //     id: "featured5",
    //     title: "Featured5"
    //   }
    // ];

    useEffect(() => {

      // switch(selected){
      //   case "featured1":
      //     setData(featuredPortfolio);
      //     break;
      //   case "featured2":
      //     setData(webPortfolio);
      //     break;
      //   case "featured3":
      //     setData(mobilePortfolio);
      //     break;
      //   case "featured4":
      //     setData(designPortfolio);
      //     break;
      //   case "featured5":
      //     setData(contentPortfolio);
      //     break;
      //   default:
          setData(featuredPortfolio);
    // }

    }, [selected])
    
  return (
    <div className="projects" id="projects">
      <h1>Portfolio</h1>
      {/* <ul>
        {list.map((item)=> (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul> */}
      <div className="project-container">
        {data.map((d) => (
          <a href={d.gitLink}>
            <div className="project-item">
              <img src={d.img} alt=""/>
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
        {/* <div className="project-item">
          <img src="assets/SnakeGame.gif" alt=""/>
          <h3>Snake</h3>
        </div>
        <div className="project-item">
          <img src="assets/SnakeGame.gif" alt=""/>
          <h3>Snake</h3>
        </div>
        <div className="project-item">
          <img src="assets/SnakeGame.gif" alt=""/>
          <h3>Snake</h3>
        </div>
        <div className="project-item">
          <img src="assets/SnakeGame.gif" alt=""/>
          <h3>Snake</h3>
        </div>
        <div className="project-item">
          <img src="assets/SnakeGame.gif" alt=""/>
          <h3>Snake</h3>
        </div>
        <div className="project-item">
          <img src="assets/SnakeGame.gif" alt=""/>
          <h3>Snake</h3>
        </div> */}
      </div>
    </div>
  )
}
