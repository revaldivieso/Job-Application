import React from "react";
import Contact from "../View/Contact";
import Skill from "../View/Skill";
import Proyects from "../View/Proyects";
import AboutMe from "../View/AboutMe";
import Home from "../View/Home";
import SideBar from "../Components/SideBar";
import Layout from "../Components/Layout";
import { Container, Row, Col } from "react-bootstrap";

function TemplateHome() {
  return (
    <Layout>
      <SideBar />
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Home />
          </Col>
          <Col lg={12}>
            <AboutMe />
          </Col>
          <Col lg={12}>
            <Skill />
          </Col>
          <Col lg={12}>
            <Proyects />
          </Col>
          <Col lg={12}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
export default TemplateHome;
