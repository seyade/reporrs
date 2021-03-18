import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import InputField from '../../components/InputField';

export type ReportType = {
	stepName?: string;
	stepTitle?: string;
	description?: string;
	addToReport?: boolean;
	createdAt?: string;
	date?: string;
};

export interface ReportItemProps {
	report: ReportType;
	order: number;
}

const ReportItemWrapper = styled.article`
	position: relative;
	display: flex;
	width: 640px;
	min-height: 160px;
	padding: 32px;
	// margin-bottom: 2px;
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

const ReportItemContent = styled.div`
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

function ReportItem({ report, order }: ReportItemProps) {
	const createdDate = parseInt(report.date!);

	return (
		report && (
			<ReportItemWrapper>
				<span>{moment(createdDate).format('DD/MM/YY')}</span>
				<ReportItemContent>
					<header>
						<h1>
							<span>Step:</span> {report.stepName}
						</h1>
						<h2>{report.stepTitle}</h2>
					</header>

					<p>{report.description}</p>

					<InputField
						type="checkbox"
						checked={report.addToReport}
						text="Add to report"
						id={`addToReport_${order + 1}`}
						name={`addToReport_${order + 1}`}
					/>
				</ReportItemContent>
			</ReportItemWrapper>
		)
	);
}

export default ReportItem;
