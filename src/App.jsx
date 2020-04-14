import React from "react";
import Contact from "./View/Contact";
import Skill from "./View/Skill";
import Proyects from "./View/Proyects";
import AboutMe from "./View/AboutMe";
import TemplateHome from "./Template/TemplateHome";
import SideBar from "./Components/SideBar";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <SideBar />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/skill" component={Skill} />
          <Route path="/proyects" component={Proyects} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/" component={TemplateHome} />
        </Switch>
      </Layout>
    </Router>
  );
}
export default App;
