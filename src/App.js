import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SingupPage';
import AssistantPage from './pages/AssistantPage';
import ClientPage from './pages/ClientPage';

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/login" element={< LoginPage />} />
          <Route path="/" element={< LoginPage />} />
          <Route path="/signup" element={< SignupPage />} />
          <Route path="/assistant" element={< AssistantPage />} />
          <Route path="/client" element={< ClientPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;