import axios from "axios";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from '../home/Home';

// Code Splitting
const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
  return (
    <main className="max-w-screen-lg mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
