import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import InputField from './InputField';

it('renders correctly', () => {
	const { queryByPlaceholderText } = render(
		<InputField placeholder="Report name" />
	);

	expect(queryByPlaceholderText('Report name')).toBeTruthy();
});

describe('InputField Snapshot', () => {
	let wrapper = shallow(<InputField />);

	expect(toJson(wrapper)).toMatchSnapshot();
});

describe('InputField value', () => {
	it('changes on input', () => {
		const { queryByPlaceholderText } = render(
			<InputField placeholder="Username" />
		);
		const inputField = queryByPlaceholderText('Username');

		expect(inputField).toBeTruthy();

		fireEvent.change(inputField, { target: { value: 'Sabrina' } });

		expect(inputField.value).toBe('Sabrina');
	});
});

describe('InputField type', () => {
	describe('as textbox', () => {
		it('displays a textbox', () => {
			const { queryByPlaceholderText } = render(
				<InputField placeholder="Firstname" />
			);

			const inputField = queryByPlaceholderText('Firstname');

			fireEvent.change(inputField, { target: { value: 'Vanessa' } });

			expect(inputField.value).toEqual('Vanessa');
		});
	});

	describe('as checkbox', () => {
		it('displays a checkbox', () => {
			const { queryByLabelText } = render(
				<InputField data-testid="sendreport" type="checkbox" text="Send" />
			);

			const inputField = queryByLabelText('Send');

			fireEvent.change(inputField, { target: { checked: true } });

			expect(inputField.checked).toBe(true);
		});
	});
});
