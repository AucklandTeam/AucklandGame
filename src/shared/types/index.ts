export type SuccessResponse = 'ОК';

export type ID = {
    id: number;
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

export type UpdateProfileData = {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
}

export type UpdatePasswordData = {
    oldPassword: string;
    newPassword: string;
}
