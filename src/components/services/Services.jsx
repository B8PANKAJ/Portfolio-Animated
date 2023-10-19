import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Certifiacions</motion.b>{" "}
            Links
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>HTML5</h2>
          <p>
            This is to certify that Pankaj Kumar has demonstrated exemplary
            knowledge and skills in the field of HTML Hypertext Markup Language.
            He has successfully completed the HTML Certification Course offered
            by Great Learning.
          </p>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/AGOBRIXF">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CSS3</h2>
          <p>
            This is to certify that Pankaj Kumar has demonstrated exemplary
            knowledge and skills in the field of Css3. He has successfully
            completed the CSS3 Certification Course offered by Great Learning.
          </p>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/NXUQAMXO">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Javascript</h2>
          <p>
            This is to certify that Pankaj Kumar has demonstrated exemplary
            knowledge and skills in the field of javascript. He has successfully
            completed the Javascript Certification Course offered by Great
            Learning.
          </p>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/OYOPDIDA">
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React Js</h2>
          <p>
            This is to certify that Pankaj Kumar has demonstrated exemplary
            knowledge and skills in the field of React Js. He has successfully
            completed the React Js Certification Course offered by Great
            Learning.
          </p>
          <a href="https://olympus1.mygreatlearning.com/course_certificate/EFYTYERK">
            <button>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
