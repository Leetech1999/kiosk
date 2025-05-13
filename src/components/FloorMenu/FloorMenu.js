import './FloorMenu.css';
import React from 'react';

function FloorMenu({ onSelectFloor, selectedFloor }) {
    return (
        <div className="floor-box-wrapper">
            <button onClick={() => onSelectFloor('third')}>
                <img
                    src={selectedFloor === 'third' ? "/images/Union_blue.svg" : "/images/Union.svg"}
                    alt="3층"
                />
                <span className={selectedFloor === 'third' ? 'selected-floor' : ''}>3F</span>
            </button>
            <button onClick={() => onSelectFloor('second')}>
                <img
                    src={selectedFloor === 'second' ? "/images/Union_blue.svg" : "/images/Union.svg"}
                    alt="2층"
                />
                <span className={selectedFloor === 'second' ? 'selected-floor' : ''}>2F</span>
            </button>
            <button onClick={() => onSelectFloor('first')}>
                <img
                    src={selectedFloor === 'first' ? "/images/Union_blue.svg" : "/images/Union.svg"}
                    alt="1층"
                />
                <span className={selectedFloor === 'first' ? 'selected-floor' : ''}>1F</span>
            </button>
        </div>
    );
}

export default FloorMenu;