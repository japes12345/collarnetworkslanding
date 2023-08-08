
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";
import { Helmet } from "react-helmet";

import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Collar Networks</title>
      </Helmet>
        <HeroSection />

    </Layout>
  </Router>
  );
};