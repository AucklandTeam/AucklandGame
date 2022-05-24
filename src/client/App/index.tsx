import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from 'pages/Game';
import Scores from 'pages/Scores';
import Profile from 'pages/Profile';
import Main from 'pages/Main';
import SignIn from 'pages/Auth/SignIn';
import ForumMain from 'pages/Forum/ForumMain';
import SignUp from 'pages/Auth/SignUp';
import ProfileEdit from 'pages/ProfileEdit';
import Error404 from 'pages/Errors/404';
import initWorkerApi from 'src/api/worker/workerservice';
import { fetchUser } from 'pages/Auth/actions';
import { Loader } from 'shared/loader';
import { useSsrEffect } from '@issr/core';
import { useDispatch } from 'react-redux';


export const useAppDispatch = () => useDispatch();

/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}*/

const App = () => {
    const dispatch = useAppDispatch();

    useSsrEffect(() => {
        dispatch(fetchUser());
    });

    const workerMessageHandler = ({data}: any) => {
        console.log('web-worker callback data:', data);
    };

    useSsrEffect(() => {
        initWorkerApi(workerMessageHandler);
    });

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/sign-in" element={<SignIn />}/>
                <Route path="/sign-up" element={<SignUp />}/>
                <Route path="/game" element={<Game />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/scores" element={<Scores />}/>
                <Route path="/forum" element={<ForumMain />}/>
                <Route path="/settings" element={<ProfileEdit />}/>
                <Route path="*" element={<Error404 />}/>
            </Routes>
        </Suspense>
    );
}

export default App
