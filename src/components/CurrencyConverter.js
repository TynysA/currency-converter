import React from 'react';
import useStore from '../store/store';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const { usd, eur, setUSD, setEUR } = useStore();

    const handleUSDChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setUSD(value);
        }
    };

    const handleEURChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setEUR(value);
        }
    };

    return (
        <div className="container">
            <div className="input-group">
                <label htmlFor="usd">USD</label>
                <input
                    type="text"
                    id="usd"
                    value={usd}
                    onChange={handleUSDChange}
                />
            </div>
            <div className="input-group">
                <label htmlFor="eur">EUR</label>
                <input
                    type="text"
                    id="eur"
                    value={eur}
                    onChange={handleEURChange}
                />
            </div>
        </div>
    );
};

export default CurrencyConverter;
