import React, {useEffect} from 'react';
import {Route, Routes, Router} from 'react-router-dom';
import history, {useInitHistory} from 'src/core/history';
import {useAppDispatch} from '@src/index';
import { fetchUser } from '@src/components/pages/Auth/actions';
import initWorkerApi from '@src/api/worker/workerservice';
import Game from '@src/components/pages/Game/Game';
import Results from '@src/components/pages/Results/Results';
import Login from '@src/components/pages/Auth/Login';
import {RouterPath} from '@src/shared/consts';
import AuthViaYandex from '@src/components/pages/Auth/AuthViaYandex';
import ForumMain from '@src/components/pages/Forum/ForumMain';
import ProfileEdit from '@src/components/pages/ProfileEdit/ProfileEdit';
import SignUp from '@src/components/pages/Auth/SignUp';
import Error404 from '@src/components/pages/Errors/404';
import Main from '@src/components/pages/Main/Main';
import Profile from '@src/components/pages/Profile/Profile';

const App = () => {
    const dispatch = useAppDispatch();
    const {stateHistory} = useInitHistory();

    // обработчик для воркера
    const workerMessageHandler = ({data}: any) => {
        // если воркер прислал сообщение
        console.log('web-worker callback data:', data);
    };

    useEffect(() => {
        dispatch(fetchUser());
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
                    element={<Results />}
                />
                <Route
                    path="/sign-in"
                    element={<Login />}
                />
                <Route
                    path={RouterPath.SignYandex}
                    element={<AuthViaYandex/>}
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
