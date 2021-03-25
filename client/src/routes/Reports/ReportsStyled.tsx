import styled from 'styled-components';

export const MainTitle = styled.header`
	h1 {
		font-weight: 300;
		margin-bottom: 44px;
		margin-left: 16px;
		text-align: left;

		span {
			font-weight: 700;
		}
	}
`;

export const AddReportButton = styled.button`
	display: flex;
	align-items: center;
	padding: 16px 20px;
	margin-left: 28px;
	margin-bottom: 16px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	color: #333;
	background-color: rgba(255, 192, 0, 1);
	border: 0;
	border-radius: 4px;
	cursor: pointer;

	span {
		margin-right: 8px;
		font-size: 20px;
	}
`;

export const ReportItemWrapper = styled.article`
	position: relative;
	display: flex;
	width: 640px;
	min-height: 160px;
	padding: 32px;
	background-color: #fff;
	overflow: hidden;

	:first-child {
		::before {
			border-top: 0;
		}
	}

	:last-child {
		::before {
			border-bottom: 0;
		}
	}

	::before {
		position: absolute;
		top: 0;
		left: 112px;
		width: 2px;
		height: 100%;
		background-color: #e5e5e5;
		border-top: 2px solid #000;
		border-bottom: 2px solid #000;
		content: '';
	}

	h2,
	h3 {
		margin: 0;
		font-weight: 300;
	}

	> span {
		color: #888;
		font-size: 14px;
	}
`;

export const ReportItemContent = styled.div`
	position: relative;
	z-index: 10;
	flex: 1 0 auto;
	padding: 24px;
	margin-left: 64px;
	border-radius: 8px;
	box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);

	header {
		> h1,
		> h2 {
			text-align: left;

			span {
				color: #888;
			}
		}

		> h1 {
			margin-top: 0;
			margin-bottom: 4px;
			font-weight: 600;
			font-size: 22px;
		}

		> h2 {
			margin-bottom: 0;
			font-size: 16px;
		}
	}
`;

export const DeleteButton = styled.button`
	color: #ff2600;
	font-size: 16px;
	border: 0;
	background-color: transparent;
	cursor: pointer;
`;

export const ReportItemOptionPanel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
