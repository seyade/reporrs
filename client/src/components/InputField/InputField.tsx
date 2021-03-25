import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Field, FieldInput, FieldLabel } from './InputFieldStyled';

export enum InputTypes {
	Text = 'text',
	Password = 'password',
	Checkbox = 'checkbox',
	Radio = 'radio',
	Email = 'email',
	Date = 'date',
	Number = 'number',
}

export interface InputFieldProps {
	type?: string;
	checked?: boolean;
	id?: string;
	name?: string;
	value?: string;
	text?: string;
	placeholder?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
	type,
	checked,
	value,
	id,
	name,
	text,
	placeholder,
	onChange,
}) => {
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
