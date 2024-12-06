import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
	it('calls logOut prop when Control and h keys are pressed', () => {
		const logOutMock = jest.fn();
		const { getByText } = render(<App logOut={logOutMock} />);

		// Simulate pressing Control + h
		fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });

		// Verify the logOut function was called
		expect(logOutMock).toHaveBeenCalledTimes(1);
	});

	it('displays alert when Control and h keys are pressed', () => {
		const logOutMock = jest.fn();
		const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

		render(<App logOut={logOutMock} />);

		// Simulate pressing Control + h
		fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });

		// Verify the alert was called with the correct message
		expect(alertMock).toHaveBeenCalledWith('Logging you out');

		// Restore the original alert
		alertMock.mockRestore();
	});
});
