import React from 'react';
import DatePicker from 'react-datepicker';

import './DatePickerField.scss';

export interface DatePickerFieldProps {
	startDate?: Date;
	placeholder?: string;
	name?: string;
	handleOnChange: (date: Date) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
	startDate,
	placeholder,
	name,
	handleOnChange,
}) => {
	return (
		<div className="datepicker-wrapper">
			<DatePicker
				name={name}
				selected={startDate ? startDate : null}
				onChange={handleOnChange}
				placeholderText={placeholder}
			/>
		</div>
	);
};

export default DatePickerField;
