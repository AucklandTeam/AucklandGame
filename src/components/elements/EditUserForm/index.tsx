import useForm from "src/hooks/useForm";
import TextInput from "../Inputs/TextInput";
import Button from "../Buttons/Button";
import React from "react";
import {FormErrors} from "src/hooks/useForm/types";

type EditUserDataForm = {
    login: string;
    email: string;
};

const EditUserData = () => {
    const { handleSubmit, handleChange } = useForm<EditUserDataForm>({
        initialState: {
            login: 'test',
            email: 'test@test.info',
        },
        validate: values => {
            let errors: FormErrors<EditUserDataForm> = {} as FormErrors<EditUserDataForm>;
            if (values.login.length < 5) {
                errors.login = 'Поле короткое';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values, 'values');
        },
    });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextInput
                    inputType={'text'}
                    inputName={'login'}
                    inputTitle={'Login'}
                    placeholder={'test'}
                    value={'test'}
                    onChange={handleChange}
                />
                <TextInput
                    inputType={'email'}
                    inputName={'email'}
                    inputTitle={'E-mail'}
                    placeholder={'test@test.info'}
                    value={'test@test.info'}
                    onChange={handleChange}
                />
                <Button
                    buttonType={'submit'}
                    buttonName={'userEdit'}
                    buttonTitle={'Save Changes'}
                />
            </form>
        </>
    );
};

export default EditUserData;
