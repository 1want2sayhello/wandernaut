import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launch from "./screens/Launch/Launch";
import Map from "./screens/Map/Map";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/explore" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
