import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../server';
import styled from 'styled-components';

const autFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(
			/^\w+$/,
			'Логин может содержать только латинские буквы, цифры и символы подчеркивания',
		)
		.min(5, 'Неверный формат логина. Длина логина должна быть не менее 5 символов')
		.max(15, 'Неверный формат логина. Длина логина должна быть не более 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#_%]+$/,
			'Неверный формат пароля. Допустимы только латинские буквы, цифры и символы подчеркивания, #, _ и %',
		)
		.min(6, 'Длина пароля должна быть не менее 6 символов')
		.max(30, 'Длина пароля должна быть не более 30 символов'),
});

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(autFormSchema),
	});

	const [serverError, setServerError] = useState(null);

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
			}
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;

	const errorMessage = formError || serverError;

	return (
		<div className={className}>
			<h2>Авторизация</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="Логин..." {...register('login')} />
				<input type="password" placeholder="Пароль..." {...register('password')} />
				<button type="submit" disabled={!formError}>
					Войти
				</button>
				{errorMessage && <div>{errorMessage}</div>}
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;

	& > form {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;
