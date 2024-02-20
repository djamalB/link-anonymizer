import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";

function pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default pages;
