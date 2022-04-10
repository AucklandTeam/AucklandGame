export type SuccessResponse = 'ОК';

export type TextField<NAME> = {
    name: NAME;
    type: HTMLInputElement['type'];
    isHide?: boolean;
}

export type User = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}
