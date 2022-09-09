import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { motion } from "framer-motion";
import Portfolio1 from "../../images/screenshot-3.png";
import Portfolio2 from "../../images/senior.jpg";
import Portfolio3 from "../../images/react.png";
import "./about.scss";

export const About = () => {
  const h3Variants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const worksVariants = {
    visible: (idx) => ({
      opacity: 1,
      transition: {
        delay: idx * 0.6,
      },
    }),
    hidden: { opacity: 0 },
  };

  const works = [
    {
      title: "Dashboard",
      imgUrl: Portfolio1,
    },
    {
      title: "Senior",
      imgUrl: Portfolio2,
    },
    {
      title: "Mobile App",
      imgUrl: Portfolio3,
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: "reverse",
              type: "string",
            }}
          >
            Hello, I am Hero Coder!
          </motion.h1>
          <p>Frontend React Developer</p>
        </div>
        <div className="about__skills">
          <motion.h3
            variants={h3Variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 1 }}
          >
            My skills
          </motion.h3>
          <ul>
            <motion.li
              whileHover={{
                scale: 1.5,
                backgroundColor: "yellow",
              }}
            >
              <FaHtml5 />
              HTML
            </motion.li>
            <li>
              <FaCss3Alt />
              CSS
            </li>
            <li>
              <FaSass />
              SASS
            </li>
            <li>
              <FaReact />
              REACT.JS
            </li>
            <li>
              <FaDocker />
              DOCKER
            </li>
          </ul>
        </div>
        <div className="about__portfolio">
          <h3>Latest Works</h3>
          <ul>
            {works.map((work, idx) => (
              <motion.li
                key={idx}
                variants={worksVariants}
                initial={"hidden"}
                animate={"visible"}
                custom={idx}
              >
                <img src={work.imgUrl} alt={work.title} />
                <h4>{work.title}</h4>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
