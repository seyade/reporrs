import React from 'react';
import moment from 'moment';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import {
	ReportItemWrapper,
	ReportItemContent,
	ReportItemOptionPanel,
	DeleteButton,
} from './ReportsStyled';

import InputField from '../../components/InputField';

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
	showModal: any;
}

function ReportItem({ report, order, showModal }: ReportItemProps) {
	const createdDate = parseInt(report.createdAt!);

	const showConfirmModal = () => {
		// show modal: need to change function name later.
		showModal(report);
	};

	const animation = useSpring({
		config: { duration: 300 },
		to: [{ opacity: 1 }, { transform: `scale(1)` }],
	});

	return (
		report && (
			<>
				<animated.div style={animation}>
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

								<DeleteButton onClick={showConfirmModal}>
									<FontAwesomeIcon icon={faTrashAlt} />
								</DeleteButton>
							</ReportItemOptionPanel>
						</ReportItemContent>
					</ReportItemWrapper>
				</animated.div>
			</>
		)
	);
}

export default ReportItem;
