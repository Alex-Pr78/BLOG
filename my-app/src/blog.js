import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import styled from 'styled-components';
import { Authorization, Registration } from './pages';

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

export const Blog = () => {
	return (
		<AppColum>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<h2>Главная</h2>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
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
