import React, {useEffect} from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import Game from 'src/components/pages/Game/Game';
import Results from 'src/components/pages/Results/Results';
import Profile from 'src/components/pages/Profile/Profile';
import Main from 'src/components/pages/Main/Main';
import Login from 'src/components/pages/Auth/Login';
import Forum from 'src/components/pages/Forum/Forum';
import styles from './App.scss';
import {getUserRequest} from '../pages/Auth/api';
import SignUp from 'src/components/pages/Auth/SignUp';
import ProfileEdit from 'src/components/pages/ProfileEdit/ProfileEdit';
import ErrorBoundary from '../elements/ErrorBoundary/ErrorBoundary';

const App = () => {
    useEffect(()=>{
        getUserRequest().then((user)=>{
            console.log(user, 'user');
        }).catch((err)=>console.log(err,'err'));
    },[]);
    return (
        <>
            <ErrorBoundary>
                <HashRouter>
                    <div>
                        <Routes>
                            <Route
                                path="/"
                                element={<Main />}
                            />
                            <Route
                                path="/game"
                                element={<Game />}
                            />
                            <Route
                                path="/profile"
                                element={<Profile />}
                            />
                            <Route
                                path="/results"
                                element={<Results />}
                            />
                            <Route
                                path="/sign-in"
                                element={<Login />}
                            />
                            <Route
                                path="/forum"
                                element={<Forum />}
                            />
                            <Route
                                path="/settings"
                                element={<ProfileEdit />}
                            />
                            <Route path="/sign-up" element={<SignUp />} />
                        </Routes>
                    </div>
                </HashRouter>
            </ErrorBoundary>
        </>
    );
};
export default App;
