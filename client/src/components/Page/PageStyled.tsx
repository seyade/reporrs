import styled from 'styled-components';

export const PageWrapper = styled.main`
	display: flex;
	flex-
	padding: 32px;

	h1 {
		text-align: center;
		margin-bottom: 24px;
	}
`;

export const PageInnerWrapper = styled.main`
	flex: 1 0 75%;

	header {
		> h1,
		> h2 {
			text-align: center;
			margin-bottom: 24px;
		}
	}
`;

export const PageContentWrapper = styled.div`
	width: 960px;
	padding: 44px;
	margin: 0 auto;
	border-radius: 12px;
`;
