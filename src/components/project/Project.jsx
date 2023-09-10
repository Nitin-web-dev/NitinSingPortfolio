import React from "react";
import "./Project.css";
import ProjectCard from "../sharedcomponents/ProjectCard";
import testimg from '../../assets/imges/testimg.png'
import tasknotesimg from '../../assets/imges/tasknotesimg.png'
import movieappimg from '../../assets/imges/movieappimg.png'
import weatherappimg from '../../assets/imges/weatherappimg.png'

const projectData = [
  {
    img: testimg,
    title: 'testApp',
    link: 'https://nitintestpr.netlify.app'
  },
  {
    img: weatherappimg,
    title: 'WeatherApp',
    link: 'https://npswheather-app.netlify.app/'
  },
  {
    img:tasknotesimg,
    title: 'Clarity Notes',
    link: 'https://npsclaritytasknotes.netlify.app/'
  },
  {
    img: movieappimg,
    title: 'MovieApp',
    link: 'https://npsmovieapp.netlify.app/'
  },

]
const Project = () => {
  return (
    <section id="project">
      <div className="projectheading">
      <h1 className="heading"> project</h1>
      <p>There are some of My Project which I created while learning </p>
      </div>
      <div className="projectsWrapper">
        {
            projectData.map((project, idx)=>  <ProjectCard key={idx} data={project}/>)
               
        }
   
      </div>
    </section>
  );
};

export default Project;
