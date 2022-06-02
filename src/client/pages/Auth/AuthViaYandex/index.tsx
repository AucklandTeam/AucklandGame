import {useAppDispatch} from "src/core/store";
import HomePageWrap from "components/homePageWrap";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import { RouterPath } from "src/client/components/@shared/consts";
import {authYandexGetServiceID, authYandexLogin} from "src/core/ducks/auth/actions";
import yandex from "src/../static/images/yandex.svg";

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