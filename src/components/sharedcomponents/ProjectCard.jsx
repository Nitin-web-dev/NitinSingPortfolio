import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({data}) => {
  return (
    <div className='projectWrapper' style={{backgroundImage:`url('${data.img}')`}}>
        
      

        <div className='projectSummery'>

        <h2>{data.title}</h2>
        <a href={data.link}>View Project</a>
        </div>

      
    </div>
  )
}

export default ProjectCard
