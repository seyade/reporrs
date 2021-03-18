import React, { useState } from 'react';
import styled from 'styled-components';

import Page from '../../components/Page';
import { useGetReports } from '../../hooks/api/useGetReports';
import AddForm from './AddForm';
import ReportItem, { ReportItemProps } from './ReportItem';

const MainTitle = styled.header`
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

const AddReportButton = styled.button`
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

function Reports() {
	const [isVisible, setIsVisible] = useState(false);
	const reports = useGetReports();

	const openModal = () => {
		setIsVisible(true);
	};

	const closeModal = () => {
		setIsVisible(false);
	};

	return (
		<Page>
			<MainTitle>
				<h1>
					<span>QLA</span> reports
				</h1>
			</MainTitle>

			<AddReportButton onClick={openModal}>
				<span>&#x2B;</span> Add day report
			</AddReportButton>

			<AddForm visible={isVisible} closeModal={closeModal} />

			<div>
				{typeof reports !== 'undefined' && reports?.length ? (
					reports.map((report: ReportItemProps['report'], index: number) => {
						return <ReportItem report={report} order={index} key={index} />;
					})
				) : (
					<h1>JUST FUCKING DO IT!</h1>
				)}
			</div>
		</Page>
	);
}

export default Reports;
