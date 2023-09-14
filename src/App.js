import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SingupPage';

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/login" element={< LoginPage />} />
          <Route path="/" element={< LoginPage />} />
          <Route path="/signup" element={< SignupPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;