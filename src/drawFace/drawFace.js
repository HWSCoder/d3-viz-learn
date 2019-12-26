import { select, arc } from 'd3';

const drawFace = () => {
  const svg = select('svg');

  const height = svg.attr('height');
  const width = svg.attr('width');
  const circle = svg.append('circle')
    .attr('r', height/2)
    .attr('cx', width/2)
    .attr('cy', height/2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

  const leftEye = svg.append('circle')
    .attr('r', 30)
    .attr('cx', width/2 - 100)
    .attr('cy', height/2 - 70)
    .attr('fill', 'black');

  const rightEye = svg.append('circle')
    .attr('r', 30)
    .attr('cx', width/2 + 100)
    .attr('cy', height/2 - 70)
    .attr('fill', 'black');

  const g = svg.append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`);

  const mouth = g.append('path')
    .attr('d', arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI/2,
        endAngle: Math.PI * 3/2
    }));
}

export default drawFace;
