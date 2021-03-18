import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

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

const Field = styled.span.attrs(props => ({
	className: props.className,
}))`
	display: inline-block;
	width: 100%;
	margin-bottom: 16px;
`;

const FieldLabel = styled.label.attrs(props => ({
	htmlFor: props.htmlFor,
	className: props.className,
}))`
	display: flex;
	align-items: center;

	input {
		margin-right: 8px;
	}
`;

const FieldTextarea = styled.textarea`
	width: 100%;
	padding: 12px 16px;
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	background-color: #e5e5e5;
	border: 0;
	border-radius: 4px;
`;

const TextareaField = ({
	cols,
	rows,
	value,
	id,
	name,
	text,
	placeholder,
	order,
	onChange,
}: TextareaFieldProps) => {
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
