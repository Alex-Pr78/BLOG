import { useDispatch } from 'react-redux';
import { openModal, CLOSE_MODAL, removeCommentAsync } from '../../../../../../actions';
import { Icon } from '../../../../../../components';
import { useServerRequest } from '../../../../../../hooks';
import styled from 'styled-components';

const CommentContainer = ({ className, id, postId, author, publishedAt, content }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				title: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id))
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							className="user-avatar"
							id="fa-user-circle-o"
							size="25px"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						{publishedAt}
						<Icon id="fa-calendar-o" size="25px" onClick={() => {}} />
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				size="25px"
				hover="#b54518"
				onClick={() => onCommentRemove(id)}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;

	& .comment {
		display: flex;
		flex-direction: column;
		padding: 10px;
		width: 500px;
		border: 2px solid #000;
		margin: 5px 15px 5px 0;
		border-radius: 5px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		align-items: center;
	}

	& .author {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		gap: 10px;
	}
`;
