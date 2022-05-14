//import styles from '../Game.scss';
import React from 'react';
import ConfigArrowButton from './ConfigArrowButton';
import SpaceButtonIcon from '../Icons/SpaceButtonIcon';

const StartModal = ({startGameHandler, attempts, score}: any) => {
    const isNewGame = attempts === 0;
    const startButtonText = isNewGame ? 'START' : 'TRY AGAIN';
    return (
        <div className="modalStartWrapper">
            <div className="modalStart">
                {
                    !isNewGame && <div className="modalScore">
                        <div>GAME OVER</div>
                        <div>score: {score}</div>
                    </div>
                }
                <div
                    className="configTitle"
                    style={{ cursor: 'pointer'}}
                    onClick={startGameHandler}
                >
                    {startButtonText}
                </div>
                {
                    isNewGame && <div className="buttonsConfig">
                        <div className="configTitle">
                            <ConfigArrowButton deg={180} />
                            <ConfigArrowButton deg={90} margin={100} />
                            <ConfigArrowButton deg={270} margin={-100} marginLeft={-50}/>
                            <ConfigArrowButton deg={0}/>
                        </div>
                        <div>Move</div>
                        <SpaceButtonIcon />
                        <div>Shoot</div>
                    </div>
                }
 
            </div>
        </div>
    );
};

export default StartModal;
