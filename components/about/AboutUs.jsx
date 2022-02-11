import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import ProgressBar from "./ProgressBar";
import "./AboutUs.module.css";

function AboutUs() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [value, setValue] = useState(0);
  function one (){
    setShow1(!show1)
    setShow2(false)
    setShow3(false)
  }
  function two () {
     setShow1(false);
     setShow2(!show2);
     setShow3(false);
  }
  function three () {
       setShow1(false);
       setShow2(false);
       setShow3(!show3);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []);
  return (
    <section className="about">
      <h1>ABOUT US</h1>

      <div className="infoContainer">
        <div className="aboutUs">
          <h3>ABOUT US</h3>
          <p>
            Welcome to your best choice for painters in Sydney - North Sydney
            Painting. Our professional painting company provide exceptional
            residential and commercial painting services. <br />
            <br /> A family run business, our goal is keeping you completely
            satisfied throughout the entire painting job. We deliver outstanding
            painting projects.
            <br />
            <br /> Highly skilled at both interior and exterior home painting
            across the entire Sydney region, our hard working team transform
            your property from the inside out. <br />
            <br />
            Our painting contractors use the highest quality paints, materials
            and advanced techniques in brush, roller and spray-painting to
            deliver the best results, every time. You can rest assured our years
            of experience and professionalism will deliver exactly what you
            need.
          </p>
        </div>
        <div className="skill">
          <h3>WHY CHOOSE US</h3>
          <p>
            Our team of experienced painters are top of their profession each
            trained to deliver the best possible service to our customers
          </p>
          <div className="progressBar">
            <ProgressBar value={100} max={100} description={"QUALITY"} />
            <ProgressBar value={100} max={100} description={"RELIABILITY"} />
            <ProgressBar
              value={100}
              max={100}
              description={"PROFESSIONALISM"}
            />
          </div>
          <div className="whyUs">
            <div className="box">
              <div className="boxHeader" onClick={one}>
                <button className="awesome">
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <h4>WHAT SETS US APART?</h4>
              </div>
              {show1 && (
                <p>
                  Our quality first approach on projects is the key difference
                  between us and other painters that is noticeable in every job
                  we undertake
                </p>
              )}
            </div>
            <div className="box">
              <div className="boxHeader" onClick={two}>
                <button className="awesome">
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <h4>TOP PRODUCS ON EACH PROJECT</h4>
              </div>
              {show2 && (
                <p>
                  All products used on our projects are localy sourced from
                  reputable distributors
                </p>
              )}
            </div>
            <div className="box">
              <div className="boxHeader" onClick={three}>
                <button className="awesome">
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
                <h4>EXCEPTIONAL TEAM</h4>
              </div>
              {show3 && (
                <p>
                  Our painters have years of proffesional expirience. All our
                  painters undertake safety training as required by current
                  Australian construction regulation.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
