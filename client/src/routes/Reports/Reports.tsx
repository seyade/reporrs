import React, { useState } from 'react';

import Page from '../../components/Page';
import ConfirmDialog from '../../components/ConfirmDialog';
import { useGetReports } from '../../hooks/api/useGetReports';
import useDialog from '../../hooks/useDialog';

import AddForm from './AddForm';
import ReportItem, { ReportItemProps } from './ReportItem';
import { MainTitle, AddReportButton } from './ReportsStyled';

function Reports() {
	const [isVisible, setIsVisible] = useState(false);
	const reports = useGetReports();
	const { isShowing, closeDialog, showDialog } = useDialog();

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
						return (
							<ReportItem
								report={report}
								showDialog={showDialog}
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
				onConfirm={closeDialog}
				visible={isShowing}
				confirmTitle="Delete day report"
				confirmText="Are you sure you want to delete this report?"
			/>
		</Page>
	);
}

export default Reports;
