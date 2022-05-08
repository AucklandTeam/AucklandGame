import {ChangeEvent, FormEvent} from 'react';

export type FormErrors = Record<string, string>

export type UseFormProps<T extends object = {}> = {
    initialState: T;
    onSubmit: (values: T) => void;
}

export type UseFormResult<T extends object = {}> = {
    values: T;
    setFieldValue: <T>(name: keyof T, value: any) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: ChangeEvent<HTMLInputElement>) => FormErrors;
    errors: FormErrors;
    handleReset: (state?: T) => void;
    isValid: boolean;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    formError: string;
    setFormError: (message: string) => void;
}
