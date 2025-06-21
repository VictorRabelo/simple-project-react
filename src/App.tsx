import Home from './pages/Home';
import ThemeSwitcher from './components/ThemeSwitcher';

/** Root component with theme switcher */
export default function App() {
  return (
    <div className="font-sans">
      <Home />
      <ThemeSwitcher />
    </div>
  );
}
