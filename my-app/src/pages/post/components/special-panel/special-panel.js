import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="post-published">
				<div className="calendar">
					<Icon id="fa-calendar-o" margin="0 10px 0 0" size="20px" hover="#25680e" />
					<div>{publishedAt}</div>
				</div>
				<div className="post-control-panel">
					{editButton}
					<Icon id="fa-trash-o" size="25px" hover="#b54518" />
				</div>
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	flex-direction: column;

	& .post-published {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	& .pencil-edit {
		position: relative;
	}

	& .post-control-panel {
		align-items: center;
		display: flex;
		gap: 15px;
	}

	& .calendar {
		margin-left: 30px;
		display: flex;
		align-items: center;
	}
`;
