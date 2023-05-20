
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SettingPage from './pages/SettingPage';
import CalendarPage from './pages/CalendarPage';
import SchedulePage from './pages/SchedulePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App
