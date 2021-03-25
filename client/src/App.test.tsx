import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the App', () => {
	const { queryByTestId } = render(<App />);
	const app = queryByTestId('reporrs');

	expect(app).toBeTruthy();
});
