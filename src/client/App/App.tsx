import React, {useEffect} from 'react';
import {Route, Routes, Router} from 'react-router-dom';
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
import {useAppDispatch} from 'src/index';
import {fetchUser} from 'pages/Auth/actions';
import history, {useInitHistory} from 'src/core/history';

const App = () => {
    const dispatch = useAppDispatch();
    const {stateHistory} = useInitHistory();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    // обработчик для воркера
    const workerMessageHandler = ({data}: any) => {
        // если воркер прислал сообщение
        console.log('web-worker callback data:', data);
    };

    // подключаем воркер
    useEffect(() => {
        initWorkerApi(workerMessageHandler);
    }, []);

    return (
        <Router
            location={stateHistory.location}
            navigator={history}
            navigationType={stateHistory.action}>
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
                    element={<Scores />}
                />
                <Route
                    path="/sign-in"
                    element={<SignIn />}
                />
                <Route
                    path="/forum"
                    element={<ForumMain />}
                />
                <Route
                    path="/settings"
                    element={<ProfileEdit />}
                />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
                <Route
                    path="*"
                    element={<Error404 />}
                />
            </Routes>
        </Router>
    );
};

export default App;
