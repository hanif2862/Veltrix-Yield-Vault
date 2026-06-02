import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import HowItWorks from './components/HowItWorks';
import Roadmap from './components/Roadmap';
import SmartContract from './components/SmartContract';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-bg" />
      <Navbar />
      <div className="navbar-sep" />
      <main className="scroll-content">
        <div className="page-container">
          <Hero />
          <StatsBar />
          <div className="main-grid">
          <div className="main-left">
            <Dashboard />
        
            <div className="bottom-row">
              <Leaderboard />
              <HowItWorks />
            </div>
          </div>
        
          <SmartContract />
        </div>
        
        <Roadmap />
        </div>
      </main>
      <Footer />
    </div>
  );
}
