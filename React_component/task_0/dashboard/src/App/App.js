import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
	static propTypes = {
		logOut: PropTypes.func,
	};

	static defaultProps = {
		logOut: () => { },
	};

	componentDidMount() {
		// Add event listener for keydown
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		// Remove event listener
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = (event) => {
		const { logOut } = this.props;
		if (event.ctrlKey && event.key === 'h') {
			alert('Logging you out');
			logOut();
		}
	};

	render() {
		return (
			<div>
				<h1>Welcome to the App</h1>
			</div>
		);
	}
}

export default App;
