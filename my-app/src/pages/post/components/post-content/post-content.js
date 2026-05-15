import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<div className="header">
				{imageUrl && <img src={imageUrl} alt={title} />}
				<div className="post-title">
					<h2>{title}</h2>

					<div className="post-published">
						<div className='calendar'>
							<Icon id="fa-calendar-o" margin="0 10px 0 0" size="20px" hover="#25680e" />
							<div>{publishedAt}</div>
						</div>
						<div className="post-control-panel">
							<Icon className="pencil-edit" id="fa-pencil-square-o" size="25px" />
							<Icon id="fa-trash-o" size="25px" hover="#b54518" />
						</div>
					</div>
				</div>
			</div>
			<p className="post-text">{content}</p>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& .header {
		display: flex;
	}

	& .post-title {
		display: flex;
		flex-direction: column;
	}

	& .post-published {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	& h2 {
		margin: 0 0 30px 30px;
	}

	& .post-text {
		margin-top: 30px;
	}

	& i {
		position: relative;
		top: -3px;
	}

	& .pencil-edit {
		position: relative;
		top: 1px;
	}

	& .post-control-panel {

		align-items: center;
		display: flex;
		gap: 15px;
	}

	& .calendar {
	margin-left: 30px;
		display: flex;
	}
`;
