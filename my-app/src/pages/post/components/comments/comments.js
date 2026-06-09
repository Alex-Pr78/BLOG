import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { selectUserId } from '../../../../selectors';
import { Comment } from './components';
import { addCommentAsync } from '../../../../actions';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	}

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
				   name='comment'
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					className="pencil-edit"
					id="fa-paper-plane"
					size="25px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						postId={postId}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	margin: 30px auto;
	width: 580px;

	& .new-comment {
		display: flex;
		flex-direction: row;
	}

	& .new-comment textarea {
		width: 500px;
		height: 100px;
		padding: 10px;
		margin-right: 10px;
		margin-bottom: 10px;
		border-radius: 5px;
		font-size: 20px;
		resize: none;
	}
`;
