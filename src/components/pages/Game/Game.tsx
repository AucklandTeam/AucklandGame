import React from 'react';
import CanvasComponent from './conponents/CanvasComponent';

const Game = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <CanvasComponent />
        </div>
    );
};

export default Game;
