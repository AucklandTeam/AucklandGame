import React from 'react';
//import styles from './GameTopBar.scss';
import {Link} from 'react-router-dom';
import LivesIcon from '../../Icons/LivesIcon';
import LivesIconEmpty from '../../Icons/LivesIconEmpty';

interface BottomMenuItemType {
    icon: string;
    name: string;
    url: string;
    text: string;
}

const bottomMenuItems = [
    { icon: 'asEdit', url: '/settings', name: '', text: 'settings' },
    { icon: 'asForum', url: '/forum', name: '', text: 'forum' },
    { icon: 'asPerson', url: '/profile', name: '', text: 'profile' },
    { icon: 'asTrophy', url: '/results', name: '', text: 'results' },
    { icon: 'asPower', url: '/', name: '', text: 'quit' },
];

const showLives = (lives: number) => {
    const iconsArray = [];
    let emptyLives = 3 - lives;
    while (lives > 0) {
        lives -= 1;
        iconsArray.push(<LivesIcon />);
    }
    while (emptyLives > 0) {
        emptyLives -= 1;
        iconsArray.push(<LivesIconEmpty />);
    }
    return (
        <>
            {
                iconsArray.map((el: any) => el)
            }
        </>
    );
};

const GameTopBar = ({ lives, score }: any) => (
    <div className="gameTopBar">
        <div className="gameState">
            {showLives(lives)}
            <div className="gameScore">Score: [{score}]</div>
        </div>
        <div className="gameMenu">
            {
                bottomMenuItems.map((item: BottomMenuItemType, index) =>
                    <div className="menuItem" key={item.url}>
                        <Link
                            to={item.url}
                        >
                            <i
                                className={`${item.icon} 
                                    ${index === bottomMenuItems.length - 1 ? 'quit' : ''}`}
                            />
                            <span>{item.name}</span>
                        </Link>
                    </div>
                )
            }
        </div>
    </div>
);

export default GameTopBar;
