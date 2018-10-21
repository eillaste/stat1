import React, { Component } from 'react';
import styled from 'styled-components';
import D3chart from './D3chart';

class Chart extends Component {
	state = { show: true };
	handleClick = this.handleClick.bind(this);
	handleClick() {
		this.setState({ show: !this.state.show });
	}
	render() {
		const { data, subject } = this.props;

		// STYLES

		const Title = styled.h1`
			color: white;
			font-size: 1.875rem;
			@media screen and (max-width: 50.000em) {
				font-size: 1.5rem;
			}
		`;

		return (
			<React.Fragment>
				<D3chart data={data} />
				<Title>{subject}</Title>
			</React.Fragment>
		);
	}
}

export default Chart;
