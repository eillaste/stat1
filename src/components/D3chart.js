import React, { Component } from 'react';
import * as d3 from 'd3';
import '../App.css';

class D3chart extends Component {
	componentWillUnmount() {
		d3.selectAll('rect').remove();
		d3.selectAll('text').remove();
		d3.selectAll('svg').remove();
	}

	render() {
		const { data } = this.props;

		var w = 700;
		var h = 300;
		var barPadding = 1;
		var displayRectInfo = function(a) {
			d3.select('h1').text(function() {
				return a.children[0].textContent;
			});
		};

		var svg = d3.select('body').append('svg').attr('width', w).attr('height', h);

		var xScale = d3
			.scaleLinear()
			.domain([
				d3.min(data, function(d) {
					return +d['aasta'];
				}),
				d3.max(data, function(d) {
					return +d['aasta'];
				})
			])
			.range([ 0, w - 62 ]);

		var xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d')).ticks(5);

		svg
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', function(d, i) {
				return i * (w / data.length);
			})
			.attr('y', function(d) {
				return h - +d['I kvartal'] / 10;
			})
			.attr('width', w / data.length - barPadding)
			.attr('height', function(d) {
				return +d['I kvartal'] / 10;
			})
			.attr('fill', function(d) {
				return 'rgb(0, 177, ' + Math.round(+d['I kvartal'] / 7) + ')';
			})
			.on('mouseover', function() {
				d3.select(this).attr('fill', '#ffb127');
				displayRectInfo(this);
			})
			.on('mouseout', function(d) {
				d3.select(this).attr('fill', 'rgb(0, 177, ' + Math.round(+d['I kvartal'] / 7) + ')');
			})
			.attr('transform', 'translate(0, 0)')
			.append('title')
			.text(function(d) {
				return (
					'Eesti keskmine brutokuupalk ' +
					d['aasta'] +
					'. aasta esimeses kvartalis oli ' +
					d['I kvartal'] +
					' \u20AC'
				);
			});

		svg
			.selectAll('text')
			.data(data)
			.enter()
			.append('text')
			.text(function(d) {
				return d['I kvartal'];
			})
			.attr('x', function(d, i) {
				return i * (w / data.length) + (w / data.length - barPadding) / 2;
			})
			.attr('y', function(d) {
				return h - +d['I kvartal'] / 10 + 14;
			})
			.attr('font-family', 'sans-serif')
			.attr('font-size', '11px')
			.attr('fill', 'white')
			.attr('text-anchor', 'middle');

		svg.append('g').attr('class', 'axis').attr('transform', 'translate(30, -1)').call(xAxis);

		return <div />;
	}
}

export default D3chart;
