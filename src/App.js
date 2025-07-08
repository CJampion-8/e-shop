import { Routes, Route} from 'react-router-dom';
import './style.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import ThankYou from './pages/ThankYou.js';

export default function App() {
    return (
        <>
            <Header />
            
            <div className="container-wrapper">
                <div className="container">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/thank-you" element={<ThankYou />} />
                        </Routes>
                    </div>
                </div>
            </div>

            <a href="https://cjampion-8.github.io/project_portfolio" target="_blank" rel="noopener noreferrer" className="portfolioRedirect">
                Check out my other projects!
            </a>
        </>
    )
}