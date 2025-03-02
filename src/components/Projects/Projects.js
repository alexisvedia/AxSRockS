import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TiltedCard from "../TiltedCard";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <TiltedCard
              imageSrc={chatify}
              altText="Chatify"
              captionText="Chatify - Chat en tiempo real"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="project-overlay">
                  <h3>Chatify</h3>
                  <p>
                    Chat Room personal con React.js, Material-UI y Firebase.
                    Mensajería en tiempo real y compartir imágenes.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/soumyajit4419/Chatify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://chatify-49.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <TiltedCard
              imageSrc={bitsOfCode}
              altText="Bits-0f-C0de"
              captionText="Blog Personal con Next.js"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="project-overlay">
                  <h3>Bits-0f-C0de</h3>
                  <p>
                    Blog personal construido con Next.js y Tailwind CSS. Soporte
                    para modo oscuro y markdown.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/soumyajit4419/Bits-0f-C0de"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://blogs.soumya-jit.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <TiltedCard
              imageSrc={editor}
              altText="Editor.io"
              captionText="Editor de código online"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="project-overlay">
                  <h3>Editor.io</h3>
                  <p>
                    Editor de código y markdown online con React.js. Soporte
                    para HTML, CSS y JS con vista previa instantánea.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/soumyajit4419/Editor.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://editor.soumya-jit.tech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <TiltedCard
              imageSrc={leaf}
              altText="Plant AI"
              captionText="IA para detección de enfermedades en plantas"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="project-overlay">
                  <h3>Plant AI</h3>
                  <p>
                    Clasificador de imágenes con PyTorch para detectar
                    enfermedades en plantas. 98% de precisión usando Resnet34.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/soumyajit4419/Plant_AI"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://plant49-ai.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <TiltedCard
              imageSrc={suicide}
              altText="AI For Social Good"
              captionText="IA para el bien social"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="project-overlay">
                  <h3>AI For Social Good</h3>
                  <p>
                    NLP para la detección de posts relacionados con suicidio y
                    prevención.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/soumyajit4419/AI_For_Social_Good"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <TiltedCard
              imageSrc={emotion}
              altText="Face Recognition and Emotion Detection"
              captionText="Reconocimiento facial y detección de emociones"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="project-overlay">
                  <h3>Detección de Emociones</h3>
                  <p>
                    CNN con Keras y TensorFlow para detectar emociones en
                    rostros. 60.1% de precisión.
                  </p>
                  <div className="project-links">
                    <a
                      href="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
