import {
    select,
    csv,
    scaleLinear,
    max,
    scalePoint,
    axisLeft,
    axisBottom,
} from 'd3';
import population from '../data/population.csv';

const svg = select('svg');
const width = svg.attr('width');
const height = svg.attr('height');
const margin = {
    top: 20,
    bottom: 20,
    left: 110,
    right: 50,
};
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const renderBarChart = data => {
const xScale = scaleLinear()
    .domain([0, max(data, d => d.population)])
    .range([0, innerWidth])

const yScale = scalePoint()
    .domain(data.map(d => d.country))
    .range([0, innerHeight])
    .padding(0.5);
const yAxis = axisLeft(yScale);
const xAxis = axisBottom(xScale);
const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
g.append('g').call(yAxis);
g.append('g').call(xAxis)
.attr('transform', `translate(0, ${innerHeight})`);
g.selectAll('circle')
    .data(data)
    .enter().append('circle')
    .attr('cy', d => yScale(d.country))
    .attr('cx', d => xScale(d.population))
    .attr('r', 18);
};

const scatterPlot = () => {
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

export default scatterPlot;
