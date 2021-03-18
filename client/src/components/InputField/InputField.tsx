import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

export interface InputFieldProps {
	type?: string;
	checked?: boolean;
	id?: string;
	name?: string;
	value?: string;
	text?: string;
	placeholder?: string;
	order?: number | string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export enum InputTypes {}

const Field = styled.span.attrs(props => ({
	className: props.className,
}))`
	display: inline-block;
	margin-bottom: 16px;
	display: inline-flex;
	flex: 1 0 100%;
	width: 100%;
`;

const FieldLabel = styled.label.attrs(props => ({
	htmlFor: props.htmlFor,
	className: props.className,
}))`
	display: flex;
	align-items: center;
	width: 100%;
`;

const FieldInput = styled.input`
	display: inline-block;
	width: 100%;
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	border: 0;
	background-color: #e5e5e5;
	border-radius: 4px;
	padding: 12px 16px;

	&[type='checkbox'] {
		width: auto;
		margin-right: 8px;
	}
`;

const InputField = ({
	type,
	checked,
	value,
	id,
	name,
	text,
	placeholder,
	order,
	onChange,
}: InputFieldProps) => {
	return type === 'checkbox' ? (
		<Field className="inputField inputField--checkbox">
			<FieldLabel className="inputField__label" htmlFor={id}>
				<FieldInput
					id={id}
					name={name}
					className="inputField__input"
					type={type}
					defaultChecked={checked}
					onChange={onChange}
				/>
				<span className="inputField__label__text">{text}</span>
			</FieldLabel>
		</Field>
	) : (
		<Field className="inputField">
			<FieldLabel className="inputField__label" htmlFor={id}>
				<span className="inputField__label__text">{text}</span>
				<FieldInput
					id={id}
					name={name}
					className="inputField__input"
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>
			</FieldLabel>
		</Field>
	);
};

export default InputField;
