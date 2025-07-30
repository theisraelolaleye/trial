import { Sidebar } from './components/layouts/Sidebar';
import { Topbar } from './components/layouts/Topbar';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 flex-1 flex flex-col min-h-screen bg-gray-50">
          <Topbar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* more routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
