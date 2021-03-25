import React from 'react';
import moment from 'moment';
import { useMutation } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import {
	ReportItemWrapper,
	ReportItemContent,
	ReportItemOptionPanel,
	DeleteButton,
} from './ReportsStyled';

import InputField from '../../components/InputField';
import { DELETE_REPORT_MUTATION } from '../../hooks/api/Mutations';

export type ReportType = {
	_id: string;
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
	showDialog: () => void;
}

function ReportItem({ report, order, showDialog }: ReportItemProps) {
	const [deleteReport, { error }] = useMutation(DELETE_REPORT_MUTATION);
	const createdDate = parseInt(report.date!);

	const handleDelete = () => {
		if (error) {
			console.log('DELETE_REPORT_ERROR::', error);
		}

		showDialog();

		// deleteReport({
		// 	variables: {
		// 		_id: report._id,
		// 	},
		// });
	};

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

					<ReportItemOptionPanel>
						<InputField
							type="checkbox"
							checked={report.addToReport}
							text="Add to report"
							id={`addToReport_${order + 1}`}
							name={`addToReport_${order + 1}`}
						/>

						<DeleteButton onClick={handleDelete}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</DeleteButton>
					</ReportItemOptionPanel>
				</ReportItemContent>
			</ReportItemWrapper>
		)
	);
}

export default ReportItem;
