import React, {useEffect} from 'react';
import {authYandexGetServiceID, authYandexLogin} from '../actions';
import HomePageWrap from 'src/components/elements/HomePageWrap';
import {useAppDispatch} from 'src/index';
import yandex from 'src/../www/Images/yandex.svg';
import {useLocation} from 'react-router-dom';
import {RouterPath} from '../../../../shared/consts';



const AuthViaYandex = ()=>{
    const dispatch = useAppDispatch();
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    useEffect(()=>{
        const code = param.get('code');
        if(code){
            dispatch(authYandexLogin({code, redirect_uri: `http://${window.location.host}${RouterPath.SignYandex}`}));
        }
    },[param]);
    return (
        <HomePageWrap titleContent={'Sign via Yandex'}>
            <div onClick={()=>dispatch(authYandexGetServiceID())}>
                <img src={yandex} alt=""/>
            </div>
        </HomePageWrap>
    );
};

export default AuthViaYandex;

