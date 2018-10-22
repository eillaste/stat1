import React, { Component } from 'react';
import * as d3 from 'd3';
import '../App.css';

class D3chart extends Component {
	componentWillUnmount() {
		d3.selectAll('rect').remove();
		d3.selectAll('text').remove();
		d3.selectAll('svg').remove();
		d3.selectAll('circle').remove();
	}

	render() {
		const { subject, data, width, height } = this.props;
		console.log(data);

		var w = 700;
		var h = 300;
		var barPadding = 1;
		var padding = 100;
		var displayRectInfo = function(a) {
			d3.select('h1').text(function() {
				return a.children[0].textContent;
			});
		};
		var svg = d3.select('#chart').append('svg').attr('width', w).attr('height', h);

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

		var xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d')).ticks(8);

		svg
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', function(d, i) {
				return i * (w / data.length);
			})
			.attr('y', function(d) {
				return h;
			})
			.attr('width', w / data.length - barPadding)
			.attr('height', function(d) {
				return h;
			})
			.attr('fill', function(d) {
				return 'rgb(0, 177, ' + Math.round(+d['I kvartal'] / 7) + ')';
			})
			.on('mouseover', function() {
				d3.select(this).attr('fill', 'orange');
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
				return 0;
			})
			.attr('font-family', 'sans-serif')
			.attr('font-size', '11px')
			.attr('fill', 'white')
			.attr('text-anchor', 'middle');

		svg.append('g').attr('class', 'axis2').attr('transform', 'translate(30, -1)').call(xAxis);

		//esimene nupp

		d3.select('#esimene').on('click', function() {
			svg
				.selectAll('rect')
				.data(data)
				.on('mouseover', function() {
					d3.select(this).attr('fill', '#ffb127');
					displayRectInfo(this);
				})
				.transition()
				.duration(1000)
				.attr('y', function(d) {
					return h - +d['I kvartal'] / 10;
				})
				.attr('height', function(d) {
					return +d['I kvartal'] / 10;
				})
				.attr('fill', function(d) {
					return 'rgb(0, 177, ' + Math.round(+d['I kvartal'] / 7) + ')';
				});

			svg
				.selectAll('text')
				.data(data)
				.transition()
				.duration(1000)
				.text(function(d) {
					return d['I kvartal'];
				})
				.attr('y', function(d) {
					return h - +d['I kvartal'] / 10 + 14;
				});

			svg.selectAll('title').text(function(d) {
				return (
					'Eesti keskmine brutokuupalk ' +
					d['aasta'] +
					'. aasta esimeses kvartalis oli ' +
					d['I kvartal'] +
					' \u20AC'
				);
			});
		});

		//teine nupp

		d3.select('#teine').on('click', function() {
			svg
				.selectAll('rect')
				.data(data)
				.on('mouseover', function() {
					d3.select(this).attr('fill', '#ffb127');
					displayRectInfo(this);
				})
				.transition()
				.duration(1000)
				.attr('y', function(d) {
					return h - +d['II kvartal'] / 10;
				})
				.attr('height', function(d) {
					return +d['II kvartal'] / 10;
				})
				.attr('fill', function(d) {
					return 'rgb(0, 177, ' + Math.round(+d['II kvartal'] / 7) + ')';
				});

			svg
				.selectAll('text')
				.data(data)
				.transition()
				.duration(1000)
				.text(function(d) {
					return d['II kvartal'];
				})
				.attr('y', function(d) {
					return h - +d['II kvartal'] / 10 + 14;
				});

			svg.selectAll('title').text(function(d) {
				return (
					'Eesti keskmine brutokuupalk ' +
					d['aasta'] +
					'. aasta teises kvartalis oli ' +
					d['II kvartal'] +
					' \u20AC'
				);
			});
		});

		//kolmas nupp

		d3.select('#kolmas').on('click', function() {
			svg
				.selectAll('rect')
				.data(data)
				.on('mouseover', function() {
					d3.select(this).attr('fill', '#ffb127');
					displayRectInfo(this);
				})
				.transition()
				.duration(1000)
				.attr('y', function(d) {
					return h - +d['III kvartal'] / 10;
				})
				.attr('height', function(d) {
					return +d['III kvartal'] / 10;
				})
				.attr('fill', function(d) {
					return 'rgb(0, 177, ' + Math.round(+d['III kvartal'] / 7) + ')';
				});

			svg
				.selectAll('text')
				.data(data)
				.transition()
				.duration(1000)
				.text(function(d) {
					return d['III kvartal'];
				})
				.attr('y', function(d) {
					return h - +d['III kvartal'] / 10 + 14;
				});

			svg.selectAll('title').text(function(d) {
				return (
					'Eesti keskmine brutokuupalk ' +
					d['aasta'] +
					'. aasta kolmandas kvartalis oli ' +
					d['III kvartal'] +
					' \u20AC'
				);
			});
		});

		// // neljas nupp

		d3.select('#neljas').on('click', function() {
			svg
				.selectAll('rect')
				.data(data)
				.on('mouseover', function() {
					d3.select(this).attr('fill', '#ffb127');
					displayRectInfo(this);
				})
				.transition()
				.duration(1000)
				.attr('y', function(d) {
					return h - +d['IV kvartal'] / 10;
				})
				.attr('height', function(d) {
					return +d['IV kvartal'] / 10;
				})
				.attr('fill', function(d) {
					return 'rgb(0, 177, ' + Math.round(+d['IV kvartal'] / 7) + ')';
				});

			svg
				.selectAll('text')
				.data(data)
				.transition()
				.duration(1000)
				.text(function(d) {
					return d['IV kvartal'];
				})
				.attr('y', function(d) {
					return h - +d['IV kvartal'] / 10 + 14;
				});

			svg.selectAll('title').text(function(d) {
				return (
					'Eesti keskmine brutokuupalk ' +
					d['aasta'] +
					'. aasta neljandas kvartalis oli ' +
					d['IV kvartal'] +
					' \u20AC'
				);
			});
		});

		return <div />;
	}
}

export default D3chart;
