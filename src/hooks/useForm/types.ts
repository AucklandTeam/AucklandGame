import {ChangeEvent, FormEvent} from 'react';

export type TFormErrors<T extends object> = {[K in keyof T]: string}

export type TFUseFormProps<T extends object = {}> = {
    initialState: T;
    onSubmit: (values:T)=>void;
    validate?: (values:T)=>TFormErrors<T>;
}
export type TFUseFormResult<T extends object = {}> = {
    values: T;
    setFieldValue: <T>(name: keyof T, value: any) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    errors: TFormErrors<T>;
    handleReset: (state?: T) => void;
    isValid: boolean;
    handleSubmit: (event: FormEvent<HTMLFormElement>)=>void;
}
