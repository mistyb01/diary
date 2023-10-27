import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import JournalContainer from "./components/JournalContainer";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/journal" Component={JournalContainer} />
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
