import { Routes, Route } from 'react-router-dom';
import {Header} from './components'
import styled from 'styled-components';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;


const Footer = () => <div>Подвал</div>;

export const Blog = () => {
	return (
		<AppColum>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<h2>Главная</h2>} />
					<Route path="/login" element={<h2>Авторизация</h2>} />
					<Route path="/register" element={<h2>Регистрация</h2>} />
					<Route path="/users" element={<h2>Пользователи</h2>} />
					<Route path="/post" element={<h2>Новая статья</h2>} />
					<Route path="/post/:postId" element={<h2>Статья</h2>} />
					<Route path="*" element={<h2>Ошибка</h2>} />
				</Routes>
			</Content>
			<Footer />
		</AppColum>
	);
};
