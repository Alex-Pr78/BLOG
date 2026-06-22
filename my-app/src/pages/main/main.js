import { useEffect, useState, useMemo } from 'react';
import { useServerRequest } from '../../hooks';
import { PAGINATION_LIMIT } from '../../constants';
import { PostCard, Pagination, Search } from './components';
import { debounce } from './utils/debounce';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [page, setPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then((posts) => {
			setPosts(posts.res);
			setTotalPages(posts.totalPages);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(true);
	}

	return (
		<div className={className}>
			<Search searchPhrase={searchPhrase} onChange={onSearch}/>
			{posts.length ? <div className="post-list">
				{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div> : <div className='no-post-found'>Статьи не найдены</div>}
			{totalPages > 1 && <Pagination setPage={setPage} page={page} totalPages={totalPages}/>}
		</div>
	);
};

export const Main = styled(MainContainer)`

	& .post-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 20px;
		padding: 20px;
	}

	& .no-post-found {
		text-align: center;
		font-size: 20px;
		padding: 40px;
	}
`;
