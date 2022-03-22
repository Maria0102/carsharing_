import { Routes, Route } from "react-router-dom";
import MainPage from "./Home/index";

import './App.scss';

const NotFound = () => <h1>Not Found</h1>;

function App() {
  return (
    <Routes>
      <Route index element={ <MainPage /> } />
      <Route path="*" element={ <NotFound/> } />
    </Routes>
  );
}
export default App;
