export const ENDPOINTS = {
    HTTP: 'https://ya-praktikum.tech/api/v2',
    AUTH: {
        USER: '/auth/user',
        SIGNIN: '/auth/signin',
        SIGNUP: '/auth/signup',
        LOGOUT: '/auth/logout',
    },
    USER: {
        PATH: '/user',
        PROFILE: '/profile',
        PASSWORD: '/password',
        AVATAR: '/profile/avatar',
    },
};

export enum RouterPath {
    Main = '/',
    SignIn = '/sign-in',
    SignUp = '/sign-up',
    Profile = '/profile',
    Game = '/game',
    Results = '/results',
    Forum = '/forum',
}
