import React from "react";
import SideBar from "./Components/SideBar";
import AboutMe from "./Components/AboutMe";
import Layout from "./Components/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <SideBar />
      <AboutMe />
    </Layout>
  );
}

export default App;
