import { useRef, useEffect } from "react";

import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Photo from "../../images/moi.jpeg";
import "./Home.scss";
import { init } from "ityped";

export const Home = () => {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["React Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title">Hero Coder</h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus deserunt doloremque officia laboriosam quae,
            consequuntur laborum vel. Sapiente voluptatibus pariatur,
            praesentium laboriosam ex esse quam magni ipsa accusamus reiciendis
            quaerat laborum deserunt labore debitis aspernatur ut, impedit
            obcaecati atque eaque?
          </p>
          <ul className="home__links">
            <li>
              <a
                href="https://fb.com"
                target=" blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target=" blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target=" blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="home__icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="home__right">
          <img
            className="home__photo"
            src={Photo}
            alt="Hero Coder"
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
