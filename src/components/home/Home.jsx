import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const textArray = [
    "Web developer",
    "mern stack developer",
    "full stack developer",
  ]; // Add more text as needed
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 5000); // Change text every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [textArray.length]);
  return (
    <section id="home">
      <div className="bg-home">
        <div className="textWrapper">
          <h3 className="heading">Hey There,<br /> I'am a</h3>
          <div>
            <p>
              <span className="animated-text">{textArray[currentTextIndex]}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// background img
// https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8622.jpg?size=626&ext=jpg&ga=GA1.2.406399251.1694354313&semt=ais
