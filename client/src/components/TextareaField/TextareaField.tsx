import React, { ChangeEvent } from 'react';

import { Field, FieldLabel, FieldTextarea } from './TextareaFieldStyled';

export interface TextareaFieldProps {
	cols?: number;
	rows?: number;
	id?: string;
	name?: string;
	value?: string;
	text?: string;
	placeholder?: string;
	order?: number | string;
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
	cols,
	rows,
	value,
	id,
	name,
	text,
	placeholder,
	order,
	onChange,
}) => {
	const inputId = order ? `${id}__${order}` : id;

	return (
		<Field>
			<FieldLabel htmlFor={inputId}>
				<span>{text}</span>
				<FieldTextarea
					cols={cols}
					rows={rows}
					id={inputId}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				></FieldTextarea>
			</FieldLabel>
		</Field>
	);
};

export default TextareaField;
