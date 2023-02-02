import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:keywords/:style/" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
