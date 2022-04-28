import {useCallback, useEffect, useMemo, useState} from 'react';
import {UseFormProps, UseFormResult, FormErrors} from './types';

const useForm = <T extends object = {}>(
    {
        initialState,
        onSubmit,
        validate
    }: UseFormProps<T>): UseFormResult<T> => {

    const [formError, setFormError] = useState('');
    const [values, setValues] = useState<T>(() => initialState);
    const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);

    const setFieldValue: UseFormResult<T>['setFieldValue'] = useCallback((name, value) => {
        setValues((prev) => ({...prev, [name]: value}));
    }, [values]);

    const handleChange: UseFormResult['handleChange'] = useCallback(({target}) => {
        setFieldValue(target.name, target.value);
    }, []);

    const isValid = useMemo(() => !Object.keys(errors).length, [errors]);

    const handleReset: UseFormResult<T>['handleReset'] = (state) => {
        if (state) {
            setValues(() => state);
        } else {
            setValues(() => initialState);
        }
    };

    const handleSubmit: UseFormResult['handleSubmit'] = (event) => {
        event.preventDefault();
        onSubmit(values);
    };

    useEffect(() => {
        if (validate) {
            setErrors(() => validate(values));
        }
    }, [values]);

    return {
        values,
        setFieldValue,
        handleChange,
        handleReset,
        errors,
        isValid,
        handleSubmit,
        formError,
        setFormError,
    };
};

export default useForm;
