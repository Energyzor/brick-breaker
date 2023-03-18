
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Breakout from "./games/index";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Breakout />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};
export default App;

createRoot(document.getElementById("root")).render(<App />);