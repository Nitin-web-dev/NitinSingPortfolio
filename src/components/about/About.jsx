import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className="imgWrapper">
        <img
          src="https://img.freepik.com/premium-photo/muslim-man-praying-dark-room_600776-40604.jpg?w=360 "
          alt="profile pic"
        />
      </div>
      <div className="aboutmeSummary">
        <h2 className="heading">About Me</h2>
        <p>
        As an aspiring Full Stack Developer, I am Nitin, a dedicated and passionate individual driven by a relentless pursuit of knowledge and a desire to create impactful solutions. My journey into the world of technology began with a deep-rooted fascination for problem-solving and coding. Throughout my academic years, I excelled in computer science and software development courses, laying a strong foundation for my career.
        </p>

        <h3 className="infoText">Education & Certification</h3>
        <div className="edu-cert-Wrapper">

        <div className="education-certificationSummary">
          <h2>pursuing BCA </h2>
          <h3>2023 (IGNOU)</h3>
        </div>
        <div className="education-certificationSummary">
          <h2>Aspiring Computer Science student (CS50x)</h2>
          <h3>2023 (EDX)</h3>
        </div>
        <div className="education-certificationSummary">
          <h2>MERN Stack enthusiast (Udemy)</h2>
          <h3>2023</h3>
        </div>
     
        </div>
      </div>
    </section>
  );
};

export default About;
// pic url
// https://img.freepik.com/premium-photo/muslim-man-praying-dark-room_600776-40604.jpg?w=360
