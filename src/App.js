import React, { Component } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import Detail from './components/Detail';
import Header from './components/Header';
import styled from 'styled-components';

class App extends Component {
	state = {
		data: [],
		subject: '',
		width: 600,
		height: 300
	};

	getData = () => {
		axios.get('data.json').then((response) =>
			this.setState({
				data: response.data.data,
				subject: response.data.subject
			})
		);
		// .then(() => console.log(this.state));
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		const { width, height, data, subject } = this.state;

		const Wrapper = styled.div`
			text-align: center;
			color: #003950;
			font-size: 1rem;
		`;

		return (
			<Wrapper>
				<Header />

				<Router>
					<Detail
						subject={subject}
						data={data}
						width={width}
						height={height}
						path={'/Keskmine-brutokuupalk'}
					/>
				</Router>
			</Wrapper>
		);
	}
}

export default App;
