import React from 'react';
import Chart from './Chart';
import logo from '../logo.svg';
import styled from 'styled-components';

class Detail extends React.Component {
	render() {
		const { subject, data, width, height } = this.props;
		const Detail = styled.div`
			-webkit-animation: fadein 1.6s; /* Safari, Chrome and Opera > 12.1 */
			-moz-animation: fadein 1.6s; /* Firefox < 16 */
			-ms-animation: fadein 1.6s; /* Internet Explorer */
			-o-animation: fade 1.6s; /* Opera < 12.1 */
			animation: fadein 1.6s;
			width: 60%;
			margin: 0 auto;

			@keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}

			/* Firefox < 16 */
			@-moz-keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}

			/* Safari, Chrome and Opera > 12.1 */
			@-webkit-keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}

			/* Internet Explorer */
			@-ms-keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}

			/* Opera < 12.1 */
			@-o-keyframes fadein {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}

			@media screen and (max-width: 50.000em) {
				width: 90%;
			}
		`;

		const Logo = styled.img`
			height: 30vmin;
			padding-top: 0.625rem;
			margin: 0;
		`;

		return (
			<Detail>
				<Chart subject={subject} data={data} width={width} height={height} />
				<div />
				<div />
			</Detail>
		);
	}
}

export default Detail;
