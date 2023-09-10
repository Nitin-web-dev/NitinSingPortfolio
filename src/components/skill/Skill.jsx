import React from 'react'
import './Skill.css'
import jsimg from '../../assets/icons/icons8-javascript-96.png'
import reactimg from '../../assets/icons/icons8-react-native-64.png'
import reactreduximg from '../../assets/icons/icons8-redux-an-open-source-javascript-library-for-managing-application-state-96.png'
import nodeimg from '../../assets/icons/icons8-nodejs-64.png'
import expressimg from '../../assets/icons/icons8-express-js-96.png'
import mongodbimg from '../../assets/icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png'
import Card from '../sharedcomponents/Card'

const skillData = [
  {
    img: jsimg,
    title: 'Javascript',
    desc : 'JavaScript is a high-level, versatile, and widely-used programming language primarily known for its role in web development.'
  },
  {
    img: reactimg,
    title: 'React',
    desc : 'React is an open-source JavaScript library for building user interfaces (UIs) and single-page applications (SPAs).'
  },
  {
    img: reactreduximg,
    title: 'redux toolkit',
    desc : 'Redux Toolkit is an open-source library that simplifies the process of managing state in Redux, which is a popular JavaScript library for managing the state of an application.'
  },
  {
    img: nodeimg,
    title: 'node.js',
    desc : 'Node.js is an open-source, server-side JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser.'
  },
  {
    img: expressimg,
    title: 'express.js',
    desc : 'Express.js, commonly referred to as Express, is a popular open-source web application framework for Node.js. '
  },
  {
    img: mongodbimg,
    title: 'mongodb',
    desc : 'MongoDB is a popular open-source, NoSQL (non-relational) database management system designed for the storage, retrieval, and management of data. '
  }
]
const Skill = () => {

  return (
    <section id='skills'>
           <h2 className='heading'>Skills</h2>
           <div className="skillWrapper">
                {
                  skillData.map((skill,idx) => <Card key={idx} data={skill}/>)
                }
           </div>
    </section>
  )
}

export default Skill
