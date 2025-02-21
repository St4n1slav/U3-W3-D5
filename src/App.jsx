import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage";

//Mi sono fatto aiutare tantissimo
//Non ce l'avrei mai fatta

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
