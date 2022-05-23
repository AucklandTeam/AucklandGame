export const ENDPOINTS = {
    HTTP: 'https://ya-praktikum.tech/api/v2',
    AUTH: {
        USER: '/auth/user',
        SIGNIN: '/auth/signin',
        SIGNUP: '/auth/signup',
        LOGOUT: '/auth/logout',
        OAUTH: '/oauth/yandex/service-id',
        OAUTH_LOGIN: '/oauth/yandex'

    },
    USER: {
        PATH: '/user',
        PROFILE: 'user/profile',
        PASSWORD: 'user/password',
        AVATAR: 'user/profile/avatar',
    },
};

export enum RouterPath {
    Main = '/',
    SignIn = '/sign-in',
    SignYandex = '/sign-via-yandex',
    SignUp = '/sign-up',
    Profile = '/profile',
    Game = '/game',
    Results = '/results',
    Forum = '/forum',
}

export const RESOURCE_URL = 'https://ya-praktikum.tech/api/v2/resources';
