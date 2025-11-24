import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kariera from "./pages/Kariera";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kariera" element={<Kariera />} />
    </Routes>
  </BrowserRouter>
);

export default App;
