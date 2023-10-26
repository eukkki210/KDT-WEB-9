import { useForm } from 'react-hook-form'

export default function FormPrac1() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onValid = (data) => {
        console.log('onvalid', data);
    };

    console.log('errors', errors);

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    type='text'
                    {...register('name', {
                        required: '이름은 필수 항목입니다.'
                    })}
                    placeholder='name'
                />
                {errors.name?.message}
                <br />
                <input
                    type='number'
                    {...register('age', {
                        validate: { zeroOrMore: (v) => v >= 0 || '0 이상의 숫자만 입력 가능합니다.' },
                    })}
                    placeholder='age'
                />
                {errors.age?.message}
                <br />
                <button>제출</button>
            </form>
        </>
    )
}