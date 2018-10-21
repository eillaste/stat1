import React, { Component } from 'react';
import HeaderItem from './HeaderItem';
import styled from 'styled-components';

class Header extends Component {
	render() {
		const Header = styled.header`
			background-color: #003950;
			min-height: 10vh;
			display: flex;

			justify-content: center;
			font-size: calc(0.625rem + 2vmin);
			color: white;
			text-align: center;

			@media screen and (max-width: 50.000em) {
				background-color: #003950;
				min-height: 10vh;
				display: grid;
				font-size: calc(0.625rem + 2vmin);
				color: white;
			}
		`;

		return (
			<Header>
				<HeaderItem link="Tootuse-maar" name="Töötuse määr:" period="II KVARTAL 2018" value="5,1%" />
				<HeaderItem
					link="Keskmine-brutokuupalk"
					name="Keskmine brutokuupalk:"
					period="II KVARTAL 2018"
					value="1 321 eurot"
				/>

				<HeaderItem
					link="Tarbijahinnaindeks"
					name="Tarbijahinnaindeks:"
					period="SEPT 2018 VÕRRELDES AUG 2018"
					value="0,0%"
				/>
				<HeaderItem
					link="SKP-jooksevhindades"
					name="SKP jooksevhindades:"
					period="II KVARTAL 2018"
					value="6 430,8 mln eurot"
				/>
				<HeaderItem link="Rahvastik" name="Rahvaarv:" period="1. JAANUAR 2018" value="1 319 133" />
			</Header>
		);
	}
}

export default Header;
