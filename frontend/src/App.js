import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage.js';
import DashboardPage from './component/DashboardPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </Router>
  );
}
export default App