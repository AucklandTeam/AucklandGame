import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import HomePageWrap from "client/components/HomePageWrap";
//import {useAuth} from "client/pages/Auth/selectors";

type MenuItems = {
    url: string;
    name: string;
    access: 'public' | 'private';
}

const menuItems: MenuItems[] = [
    {url: 'game', name: 'Start Game', access: 'private'},
    {url: 'sign-in', name: 'Sign In', access: 'public'},
    {url: 'profile', name: 'Profile', access: 'private'},
    {url: 'results', name: 'High-Scores', access: 'public'},
    {url: 'forum', name: 'Forum', access: 'private'},
];


const Main = () => {
    //const {isAuth} = useAuth();
    const isAuth = true;
    return (
        <HomePageWrap>
            <ul>
                {menuItems
                    .filter((item) => isAuth ? item.url !== 'sign-in' : item)
                    .map(item => {
                        return (
                            <li
                                key={item.url}
                                className="menuItem"
                            >
                                <Link to={item.url}>{item.name}</Link>
                            </li>
                        );
                    })}
            </ul>
        </HomePageWrap>
    );
};

export default Main;
