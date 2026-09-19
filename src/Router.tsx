import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launch from "./screens/Launch/Launch";
import Explore from "./screens/Explore/Explore";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
