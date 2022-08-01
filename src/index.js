import { createRoot } from 'react-dom/client';
import App from "./components/App"
import "./assets/reset.css"
import "./assets/style.css"

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);