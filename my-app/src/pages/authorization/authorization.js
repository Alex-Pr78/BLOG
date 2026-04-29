import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { server } from '../../server';
import { Input, Button, H2 } from '../../components';
import styled from 'styled-components';

const autFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(
			/^\w+$/,
			'Логин может содержать только латинские буквы, цифры и символы подчеркивания',
		)
		.min(5, 'Неверный формат логина. Минимум 5 символов')
		.max(15, 'Неверный формат логина. Максимум 15 символов'),
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

const StyledLink = styled(Link)`
	margin-top: 1rem;
	text-align: center;
	color: red;
`;

const ErrorMessage = styled.div`
	background: red;
	color: white;
	padding: 15px;
`;

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
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<Button type="submit" width="200px" disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to="/register">Регистрация</StyledLink>
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
		width: 260px;
		flex-direction: column;
		gap: 10px;
	}
`;
