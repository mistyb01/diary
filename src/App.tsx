import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import JournalContainer from "./components/JournalContainer";
import Landing from "./components/Landing";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="layout-grid-container">
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/journal" Component={JournalContainer} />
          <Route path="/login" Component={Login} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
