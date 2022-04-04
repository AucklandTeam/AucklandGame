import {useCallback, useEffect, useMemo, useState} from 'react';
import {TFormErrors, TFUseFormProps, TFUseFormResult} from './types';

const useForm = <T extends object = {}>(
    {
        initialState,
        onSubmit,
        validate
    }: TFUseFormProps<T>): TFUseFormResult<T> => {

    const [values, setValues] = useState<T>(() => initialState);
    const [errors, setErrors] = useState<TFormErrors<T>>({} as TFormErrors<T>);

    const setFieldValue: TFUseFormResult<T>['setFieldValue'] = useCallback((name, value) => {
        setValues((prev) => ({...prev, [name]: value}))
    }, [values]);

    const handleChange: TFUseFormResult['handleChange'] = useCallback(({target}) => {
        setFieldValue(target.name, target.value);
    }, [])

    const isValid = useMemo(() => !!Object.keys(errors).length, [errors]);

    const handleReset: TFUseFormResult<T>['handleReset'] = (state) => {
        if (state) {
            setValues(() => state);
        } else {
            setValues(() => initialState);
        }
    }

    const handleSubmit: TFUseFormResult['handleSubmit'] = (event) => {
        event.preventDefault();
        onSubmit(values);
    }

    useEffect(() => {
        if (validate) {
            setErrors(() => validate(values));
        }
    }, [values])

    return {
        values,
        setFieldValue,
        handleChange,
        handleReset,
        errors,
        isValid,
        handleSubmit,
    }
}

export default useForm;
