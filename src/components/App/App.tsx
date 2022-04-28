import React, {useEffect} from 'react';
import {Route, Routes, HashRouter} from 'react-router-dom';
import Game from 'src/components/pages/Game/Game';
import Results from 'src/components/pages/Results/Results';
import Profile from 'src/components/pages/Profile/Profile';
import Main from 'src/components/pages/Main/Main';
import Login from 'src/components/pages/Auth/Login';
import ForumMain from 'src/components/pages/Forum/ForumMain';
import SignUp from 'src/components/pages/Auth/SignUp';
import ProfileEdit from 'src/components/pages/ProfileEdit/ProfileEdit';
import Error404 from 'src/components/pages/Errors/404';
import initWorkerApi from 'src/api/worker/workerservice';
import {useAppDispatch} from 'src/index';
import {fetchUser} from 'src/components/pages/Auth/actions';
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
        <HashRouter
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
        </HashRouter>
    );
};

export default App;
