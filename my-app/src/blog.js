import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import styled from 'styled-components';
import { Authorization, Post, Registration, Users } from './pages';

const AppColum = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

export const Blog = () => {
	return (
		<AppColum>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<h2>Главная</h2>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<h2>Новая статья</h2>} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="*" element={<h2>Ошибка</h2>} />
				</Routes>
			</Page>
			<Footer />
		</AppColum>
	);
};
