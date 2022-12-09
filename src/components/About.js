import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img className="gp aboutimage" src={`img/about/1.png`} alt="image" /> 
                {/* gp class for image margin */}
                {/* aboutimage for controlling image size */}
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={10} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={24} />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Publications
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Researcher`}</span>
                <h3>I Love To Innovate New Things</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p align="justify">
                  {`Hello there! I'm a researcher, and I'm very passionate and
                  dedicated to my work. With 10 years experience as a
                  professional researcher, I have acquired the skills and
                  knowledge necessary to make a project a success. I enjoy
                  every step of the process, from discussion and
                  collaboration.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
