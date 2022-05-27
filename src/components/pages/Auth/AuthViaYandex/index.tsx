import React, {useEffect} from 'react';

import yandex from 'src/../www/Images/yandex.svg';
import {useLocation} from 'react-router-dom';
import {useAppDispatch} from '@src/index';
import {authYandexGetServiceID, authYandexLogin} from '../actions';
import {RouterPath} from '@src/shared/consts';
import HomePageWrap from '@src/components/elements/HomePageWrap';




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

