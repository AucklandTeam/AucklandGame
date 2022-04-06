import {ChangeEvent, FormEvent} from 'react';

export type FormErrors<T extends object> = {[K in keyof T]: string}

export type UseFormProps<T extends object = {}> = {
    initialState: T;
    onSubmit: (values:T)=>void;
    validate?: (values:T)=>FormErrors<T>;
}
export type UseFormResult<T extends object = {}> = {
    values: T;
    setFieldValue: <T>(name: keyof T, value: any) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    errors: FormErrors<T>;
    handleReset: (state?: T) => void;
    isValid: boolean;
    handleSubmit: (event: FormEvent<HTMLFormElement>)=>void;
}
