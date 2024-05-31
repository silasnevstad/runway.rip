'use client'

import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const RadarGraph = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#6366f1'
                }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: '#b2b2b22f'
                },
                ticks: {
                    backdropColor: '#b2b2b200'
                },
                grid: {
                    color: '#b2b2b21a'
                }
            }
        },
        elements: {
            line: {
                borderWidth: 2,
                borderColor: '#6366f1',
                backgroundColor: '#6b72fdfc'
            },
            point: {
                backgroundColor: '#6366f150',
                borderColor: '#6b72fdfc',
                borderWidth: 2,
                radius: 4
            }
        }
    };

    return <Radar data={data} options={options} />;
};

export default RadarGraph;