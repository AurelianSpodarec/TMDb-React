import { useState } from 'react';

const useForm = (callback?:any, customValues?:any) => {
    const [values, setValues] = useState(customValues)

    const handleChange = (event:any) => {
        const { name, value }:any = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        callback()
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm;