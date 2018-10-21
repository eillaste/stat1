import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

class HeaderItem extends React.Component {
	render() {
		const HeaderItem = styled.div`
			border-right: 0.0625rem solid #2b4f63;
			border-left: 0.0625rem solid #2b4f63;
			border-top: 0.125rem solid #2b4f63;
			border-bottom: 0.125rem solid #2b4f63;
			margin: 0rem;
			a:focus {
				outline-color: #ffb127;
			}
			width: 99vw;
			transition: color 0.3s ease;
			color: white;

			a {
				transition: color 0.3s ease;
				color: white;
				text-align: center;
			}

			a:link {
				text-decoration: none;
			}

			&:visited a {
				text-decoration: none;
				color: white;
			}
			&:hover a {
				color: #ffb127;
			}

			&:hover {
				background-color: rgba(255, 255, 255, 0.111);
			}

			@media screen and (max-width: 50.000em) {
				border: 0.0625rem solid #2b4f63;
				margin: 0rem;
				max-width: 100vw;
				display: inline;
				border-right: none;
				border-left: none;
			}
		`;

		const Wrapper = styled.div`padding: 0.625rem;`;

		const Name = styled.div`
			font-size: 1.3rem;
			font-weight: bold;
			margin: 0.125rem;

			@media screen and (max-width: 50.000em) {
				font-size: 1.4rem;
				font-weight: bold;
				margin: 0.125rem;
				display: inline;
			}
			@media screen and (max-width: 40.000em) {
				font-size: 1rem;
				font-weight: bold;
				margin: 0.125rem;
				display: inline;
			}
		`;

		const Value = styled.div`
			font-size: 1.6rem;

			@media screen and (max-width: 50.000em) {
				font-size: 1.4rem;
				display: inline;
			}
			@media screen and (max-width: 40.000em) {
				font-size: 1rem;
				display: inline;
			}
		`;

		const Period = styled.div`
			font-size: 1rem;
			color: #ffb127;

			@media screen and (max-width: 50.000em) {
				font-size: 1.2rem;
				color: #ffb127;
			}
			@media screen and (max-width: 40.000em) {
				font-size: 0.8rem;
				color: #ffb127;
			}
		`;

		return (
			<HeaderItem>
				<Link to={`/${this.props.link}`}>
					<Wrapper type="button" role="button">
						<Name>{this.props.name}</Name>
						<Value>{this.props.value}</Value>
						<Period>{this.props.period}</Period>
					</Wrapper>
				</Link>
			</HeaderItem>
		);
	}
}

export default HeaderItem;
