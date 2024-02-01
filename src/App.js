import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from "./Components/Menu";
import AllCom from "./Components/Allcommon";
import Fsd from "./Components/Fsd";
import DataScience from "./Components/Datascience";
import Cybersecurity from "./Components/Cybersecurity";
import Career from "./Components/Career";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<AllCom />}></Route>
          <Route path="/fsd" element={<Fsd />}></Route>
          <Route path="/dataScience" element={<DataScience/>}></Route>
          <Route path="/cybersecurity" element={<Cybersecurity/>}></Route>
          <Route path="/career" element={<Career/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;