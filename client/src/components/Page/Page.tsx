import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Sidebar from '../Sidebar';

export interface PageProps {
	title?: string;
	subTitle?: string;
	children: ReactNode;
}

const PageWrapper = styled.main`
	display: flex;
	flex-
	padding: 32px;

	h1 {
		text-align: center;
		margin-bottom: 24px;
	}
`;

const PageInnerWrapper = styled.main`
	flex: 1 0 75%;

	header {
		> h1,
		> h2 {
			text-align: center;
			margin-bottom: 24px;
		}
	}
`;

const PageContentWrapper = styled.div`
	width: 960px;
	padding: 44px;
	margin: 0 auto;
	border-radius: 12px;
`;

function Page({ title, subTitle, children }: PageProps) {
	return (
		<PageWrapper>
			<PageInnerWrapper>
				{(title || subTitle) && (
					<header>
						{title && <h1>{title}</h1>}
						{subTitle && <h2>{subTitle}</h2>}
					</header>
				)}

				<PageContentWrapper>{children}</PageContentWrapper>
			</PageInnerWrapper>
			<Sidebar />
		</PageWrapper>
	);
}

export default Page;
