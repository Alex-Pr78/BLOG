import { useState } from 'react';
import { Comment } from './components';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments }) => {
	const [newComment, setNewComment] = useState('');

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					className="pencil-edit"
					id="fa-paper-plane"
					size="25px"
					onClick={() => {}}
				/>
			</div>

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
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
		font-size: 20px;
		resize: none;
	}
`;
