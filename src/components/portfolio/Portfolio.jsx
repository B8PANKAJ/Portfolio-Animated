import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Portfolio",
    img: "https://img.freepik.com/free-vector/young-programmer-businessman-freelance-working-desk-with-laptop_40876-2661.jpg?size=626&ext=jpg&ga=GA1.1.1399000807.1697700028&semt=ais",
    desc: "My portfolio is curated collection of my most significant achievement and work samples , providing a comprehensive view of my Skills and Personal growth.",
    link: "",
  },
  {
    id: 2,
    title: "Dice Game",
    img: "https://images.unsplash.com/photo-1608231883522-2efb1897a608?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpY2UlMjBnYW1lfGVufDB8fDB8fHww",
    desc: "I developed an engaging and interactive dice game as my project. This project demonstrated my strong problem solving skill in react.",
    link: "https://dice-for-fun.netlify.app/",
  },
  {
    id: 3,
    title: "Foody-Zone",
    img: "https://images.unsplash.com/photo-1614633833026-0820552978b6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R5fGVufDB8fDB8fHww",
    desc: "I developed foody-zone, it is an dynamic platform that allows users to explore a wide array of detectable of food items. While users can’t make direct purchase through the app, it serves as an immersive showcase of diverse food options.",
    link: "https://github.com/B8PANKAJ/Foody-Zone",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Recent Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
