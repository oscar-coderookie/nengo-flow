import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Layout />
      </div>
    </Router>
  );
}

export default App;
