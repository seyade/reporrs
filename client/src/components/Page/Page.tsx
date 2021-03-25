import React, { ReactNode } from 'react';

import Sidebar from '../Sidebar';

import {
	PageWrapper,
	PageInnerWrapper,
	PageContentWrapper,
} from './PageStyled';

export interface PageProps {
	title?: string;
	subTitle?: string;
	children: ReactNode;
}

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
