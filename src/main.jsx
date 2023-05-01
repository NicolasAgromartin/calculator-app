// react dom
import ReactDOM from 'react-dom/client';
// app
import App from './App.jsx';
// css
import './assets/css/main.css';
import './assets/css/app.css';
// contexts
import { ThemeContextProvider } from './context/ThemeContextProvider.jsx';
import { CalculatorContextProvider } from './context/CalculatorContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CalculatorContextProvider>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </CalculatorContextProvider>
)
