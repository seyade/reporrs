import React, { useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Page from '../../components/Page';
import ConfirmDialog from '../../components/ConfirmDialog';
import { useGetReports } from '../../hooks/api/useGetReports';
import { DELETE_REPORT_MUTATION, GET_REPORTS } from '../../hooks/api/Mutations';

import AddForm from './AddForm';
import ReportItem, { ReportItemProps } from './ReportItem';
import { MainTitle, AddReportButton } from './ReportsStyled';

export type ReportType = {
	_id: string;
	stepName?: string;
	stepTitle?: string;
	description?: string;
	addToReport?: boolean;
	createdAt?: string;
	date?: string;
};

function Reports() {
	const [isVisible, setIsVisible] = useState(false);
	const [isShowing, setIsShowing] = useState(false);
	const [reportData, setReportData] = useState<ReportType | null>();

	const [deleteReport, { error }] = useMutation(DELETE_REPORT_MUTATION, {
		// update UI when delete
		update(cache, { data }) {
			const newReportResponse = data?.deleteReport;
			const existingReports = cache.readQuery<any>({ query: GET_REPORTS });

			if (existingReports && newReportResponse) {
				cache.writeQuery({
					query: GET_REPORTS,
					data: {
						reports: [
							...existingReports.reports.filter(
								(report: ReportType) =>
									newReportResponse.stepName !== report.stepName
							),
						],
					},
				});
			}
		},
	});

	const reports = useGetReports();

	const openModal = () => {
		setIsVisible(true);
	};

	const closeModal = () => {
		setIsVisible(false);
	};

	const removeReportItem = (reportId: string) => {
		if (error) {
			console.log('DELETE_REPORT_ERROR:::', error);
			return;
		}

		deleteReport({
			variables: {
				_id: reportId,
			},
		});

		closeModal();
	};

	const showModal = useCallback(
		(report: any) => {
			if (!report) return;
			setReportData(report);
			setIsShowing(true);
		},
		[setReportData]
	);

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
						return (
							<ReportItem
								report={report}
								showModal={showModal}
								order={index}
								key={index}
							/>
						);
					})
				) : (
					<h1>JUST FUCKING DO IT!</h1>
				)}
			</div>

			<ConfirmDialog
				onConfirm={() => {
					reportData && removeReportItem(reportData._id);
				}}
				confirmTitle="Delete day report"
				confirmText={
					<>
						Are you sure you want to delete this report for step&nbsp;
						{
							<b>
								<i>{reportData?.stepName}</i>
							</b>
						}
					</>
				}
				isShowing={isShowing}
				setIsShowing={setIsShowing}
			/>
		</Page>
	);
}

export default Reports;
