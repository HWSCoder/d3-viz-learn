import { select, csv, scaleLinear, max, scaleBand } from 'd3';
import population from '../data/population.csv';

const svg = select('svg');
const width = svg.attr('width');
const height = svg.attr('height');
const renderBarChart = data => {
const xScale = scaleLinear()
    .domain([0, max(data, d => d.population)])
    .range([0, width])

const yScale = scaleBand()
    .domain(data.map(d => d.country))
    .range([0, height]);

svg.selectAll('rect')
    .data(data)
    .enter().append('rect')
    .attr('y', d => yScale(d.country))
    .attr('width', d => xScale(d.population))
    .attr('height', yScale.bandwidth())
};
const barChart = () => {
    csv(population)
    .then(data => {
        data.forEach(d => {
            d.population = +d.population * 1000;
        });
        renderBarChart(data);
    })
    .catch(err => {
        console.log(err);
    });
}

export default barChart;
