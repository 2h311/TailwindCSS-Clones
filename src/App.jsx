import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import {
  HomeSection,
  TeamSection,
  ContactSection,
  ContentSection,
} from "./pages";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route index path="/" element={<HomeSection />} />
        <Route path="/meet-the-team" element={<TeamSection />} />
        <Route path="contact-us" element={<ContactSection />} />
        <Route path="blog" element={<ContentSection />} />
      </Routes>
    </Fragment>
  );
};

export default App;
