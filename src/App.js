import React from 'react';
import './style.css';
import items from './data/items.js';
import ItemCard from './components/itemCard.js';

function App() {
    return (
        <>
            <div className="container-wrapper">
                <div className="container">
                    <div className="title">
                        <h2>E-Shop Title</h2>
                    </div>

                    <div className="content">
                        <div className="item-list">
                            {items.map((item) => (
                                <ItemCard
                                    key={item.title}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <a href="https://cjampion-8.github.io/project_portfolio" target="_blank" rel="noopener noreferrer" className="portfolioRedirect">
                Check out my other projects!
            </a>

        </>
    )
};

export default App;

