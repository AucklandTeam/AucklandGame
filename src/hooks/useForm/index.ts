import { useCallback, useMemo, useState } from 'react';
import { UseFormProps, UseFormResult, FormErrors } from './types';
import useValidate from '../useValidate';

const useForm = <T extends object = {}>({ initialState, onSubmit }: UseFormProps<T>): UseFormResult<T> => {
    const [formError, setFormError] = useState('');
    const [values, setValues] = useState<T>(() => initialState);
    const [errors, setErrors] = useState({} as FormErrors);

    const setFieldValue: UseFormResult<T>['setFieldValue'] = useCallback(
        (name, value) => {
            setValues(prev => ({ ...prev, [name]: value }));
        },
        [values],
    );

    const handleChange: UseFormResult['handleChange'] = useCallback(({ target }) => {
        setFieldValue(target.name, target.value);
    }, []);

    const handleBlur: UseFormResult['handleBlur'] = ({ target }) => {
        const validate = useValidate(target);
        setErrors(prev => ({ ...prev, [target.name]: validate }));
        return errors;
    };

    const isValid = useMemo(() => !Object.values(errors).includes('wrong'), [errors]);

    const handleReset: UseFormResult<T>['handleReset'] = state => {
        if (state) {
            setValues(() => state);
        } else {
            setValues(() => initialState);
        }
    };

    const handleSubmit: UseFormResult['handleSubmit'] = event => {
        event.preventDefault();
        onSubmit(values);
    };

    return {
        values,
        setFieldValue,
        handleChange,
        handleBlur,
        handleReset,
        errors,
        isValid,
        handleSubmit,
        formError,
        setFormError,
    };
};

export default useForm;
