import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import { PostContent, Comments } from './components';
import styled from "styled-components";

const PostContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id))
	}, [dispatch, requestServer, params.id])

	return (
			<div className={className}>
					<PostContent post={post} />
					<Comments comments={post.comments}/>
			</div>
		);
};

export const Post = styled(PostContainer)`
	padding: 40px 80px;
`;
