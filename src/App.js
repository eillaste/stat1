import React, { Component } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import Detail from './components/Detail';
import Header from './components/Header';
import styled from 'styled-components';

class App extends Component {
	state = {
		data: [],
		subject: ''
	};

	getData = () => {
		axios.get('data.json').then((response) =>
			this.setState({
				data: response.data.data,
				subject: response.data.subject
			})
		);
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		const { data, subject } = this.state;

		const Wrapper = styled.div`
			text-align: center;
			color: #003950;
			font-size: 1rem;
		`;

		return (
			<Wrapper>
				<Header />

				<Router>
					<Detail subject={subject} data={data} path={'/Keskmine-brutokuupalk'} />
				</Router>
			</Wrapper>
		);
	}
}

export default App;
