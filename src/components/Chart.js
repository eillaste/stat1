import React, { Component } from 'react';
import * as d3 from 'd3';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import D3chart from './D3chart2';

class Chart extends Component {
	state = { show: true };
	handleClick = this.handleClick.bind(this);
	handleClick() {
		this.setState({ show: !this.state.show });
	}
	render() {
		const { width, height, data, subject } = this.props;

		// STYLES

		const Button = styled.button`
			border: none;
			margin: 0.625rem;
			padding: 0.8125rem;
			width: 11.25rem;
			background-color: rgba(255, 255, 255, 0.1);
			color: #ffb127;
			box-shadow: 0rem 0rem 0.9375rem rgba(0, 0, 0, 0.1);
			transition: all 0.3s ease 0s;
			font-size: 1.063rem;
			margin-right: 1.25rem;
			border-radius: 0.1875rem;

			&:focus {
				outline-color: #ffb127;
			}

			&:hover {
				box-shadow: 0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.1);
				cursor: pointer;
				transform: translateY(-0.1875rem);
			}
		`;

		const Graph = styled.section`@media screen and (max-width: 50.000em) {margin-left: -1.375rem;}`;
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
