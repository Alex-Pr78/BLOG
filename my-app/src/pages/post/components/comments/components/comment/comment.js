import { Icon } from '../../../../../../components';
import styled from 'styled-components';

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
	return (
		<div className={className}>
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
					<Icon
						id="fa-calendar-o"
						size="25px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
