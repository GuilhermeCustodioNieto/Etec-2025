import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TablePage from "./pages/TablePage/TablePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablePage></TablePage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
