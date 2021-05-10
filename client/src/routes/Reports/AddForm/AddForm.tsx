import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import DatePickerField from '../../../components/DatePickerField';
// import { useForm } from 'react-hook-form';

import InputField from '../../../components/InputField';
import TextareaField from '../../../components/TextareaField';
import Modal from '../../../components/Modal';
import {
	GET_REPORTS,
	CREATE_REPORT_MUTATION,
} from '../../../hooks/api/Mutations';

import 'react-datepicker/dist/react-datepicker.min.css';

const FormWrapper = styled.div`
	position: relative;
	width: 360px;
	padding: 24px;
	margin-bottom: 24px;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);

	h3 {
		margin: 0 0 16px;
	}
`;

const Form = styled.form`
	width: 100%;
`;

const Button = styled.button`
	width: 100%;
	padding: 16px 20px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	color: #333;
	background-color: rgba(255, 192, 0, 1);
	border: 0;
	border-radius: 4px;
	cursor: pointer;
	transition: all 300ms ease-in-out;

	:hover {
		background-color: rgba(255, 171, 0, 1);
	}
`;

const CloseButton = styled.button`
	position: absolute;
	top: 8px;
	right: 8px;
	font-size: 24px;
	border: 0;
	background-color: transparent;
	cursor: pointer;
`;

function AddForm({
	visible,
	closeModal,
}: {
	visible: boolean;
	closeModal: () => void;
}) {
	const [stepName, setStepName] = useState('');
	const [stepTitle, setStepTitle] = useState('');
	const [description, setDescription] = useState('');
	const [addToReport, setAddToReport] = useState(false);
	const [startDate, setStartDate] = useState(new Date());

	const [createReport, { error }] = useMutation(CREATE_REPORT_MUTATION, {
		// update UI when add
		update(cache, { data }) {
			const newReportResponse = data?.createReport;
			const existingReports = cache.readQuery<any>({ query: GET_REPORTS });

			if (existingReports && newReportResponse) {
				cache.writeQuery({
					query: GET_REPORTS,
					data: {
						reports: [...existingReports?.reports, newReportResponse],
					},
				});
			}
		},
	});

	const handleOnChange = (date: Date) => {
		setStartDate(date);
	};

	const handleStepName = (event: ChangeEvent<HTMLInputElement>) => {
		setStepName(event.target.value);
	};

	const handleStepTitle = (event: ChangeEvent<HTMLInputElement>) => {
		setStepTitle(event.target.value);
	};

	const handleDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(event.target.value);
	};

	const handleAddToReport = (event: ChangeEvent<HTMLInputElement>) => {
		setAddToReport(event.target.checked);
	};

	const addReport = () => {
		if (error) {
			console.log('CREATE_REPORT_ERROR::', error);
			return;
		}

		const newReport = {
			stepName,
			stepTitle,
			description,
			addToReport,
			date: startDate,
		};

		createReport({
			variables: newReport,
		});

		closeModal();
	};

	return (
		<Modal isShowing={visible}>
			<FormWrapper onSubmit={event => event.preventDefault()}>
				<CloseButton onClick={closeModal}>&times;</CloseButton>

				<h3>Add a day report</h3>

				<Form>
					<div>
						<DatePickerField
							name="stepDate"
							startDate={startDate}
							handleOnChange={handleOnChange}
							placeholder="Select a date..."
						/>
					</div>
					<div>
						<InputField
							name="stepName"
							onChange={handleStepName}
							value={stepName}
							placeholder="Step name..."
						/>
					</div>

					<div>
						<InputField
							name="stepTitle"
							onChange={handleStepTitle}
							value={stepTitle}
							placeholder="Step title..."
						/>
					</div>

					<div>
						<TextareaField
							name="description"
							cols={7}
							rows={5}
							onChange={handleDescription}
							value={description}
							placeholder="Step description..."
						/>
					</div>

					<div>
						<InputField
							name={`newAddToReport`}
							text="Add to report"
							type="checkbox"
							onChange={handleAddToReport}
							checked={addToReport}
						/>
					</div>

					<Button type="button" onClick={addReport}>
						Add new day report
					</Button>
				</Form>
			</FormWrapper>
		</Modal>
	);
}

export default AddForm;
