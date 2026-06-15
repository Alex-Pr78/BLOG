import { useEffect, useLayoutEffect } from 'react';
import { useParams, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';
import { PostContent, Comments, PostForm } from './components';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const isCreating = useMatch('/post');
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA)
	}, [dispatch, isCreating])

	useEffect(() => {
		if (isCreating) {
			return;
		}
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params.id, isCreating]);

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post}/>
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 40px 80px;
`;
