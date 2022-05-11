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

const App = () => {
    const dispatch = useAppDispatch();

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

    return (<Results />);
};

export default App;
