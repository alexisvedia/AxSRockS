import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import TextPressure from "../TextPressure";
import Aurora from "../Aurora";

const Home: React.FC = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  marginBottom: "20px",
                }}
              >
                <TextPressure
                  text="Que haces Coquenshi?"
                  flex={true}
                  alpha={false}
                  stroke={true}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#623686"
                  minFontSize={36}
                />
              </div>

              <h1 className="heading-name">
                Soy <strong className="main-name"> ALEXIS VEDIA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
};

export default Home;
