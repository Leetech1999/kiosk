import './App.css';
import React, { useState } from 'react';
import FirstFloor from './components/FirstFloor/FirstFloor';
import SecondFloor from './components/SecondFloor/SecondFloor';
import ThirdFloor from './components/ThirdFloor/ThirdFloor';
import FloorMenu from './components/FloorMenu/FloorMenu';

function App() {
    const [selectedFloor, setSelectedFloor] = useState('first');

    const changeFloor = (floor) => {
        setSelectedFloor(floor);
    };

    const renderFloorComponent = () => {
        switch (selectedFloor) {
            case 'first':
                return <FirstFloor />;
            case 'second':
                return <SecondFloor />;
            case 'third':
                return <ThirdFloor />;
            default:
        }
    };

    return (
        <div className="App">
            <div className="right-panel">
                {renderFloorComponent()}
            </div>
            <div className="left-panel">
                <FloorMenu onSelectFloor={changeFloor} selectedFloor={selectedFloor} />
            </div>
        </div>
    );
}

export default App;