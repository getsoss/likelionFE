import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3/:text" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
