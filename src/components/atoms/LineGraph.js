"use client";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const LineGraph = ({ data }) => {
    const customPointStyles = data.datasets.map((dataset) => {
        const pointCount = dataset.data.length;
        const pointRadius = new Array(pointCount).fill(0);
        pointRadius[pointCount - 1] = 6;

        const pointBackgroundColor = new Array(pointCount).fill('rgba(0, 0, 0, 0)');
        pointBackgroundColor[pointCount - 1] = '#6b72fd70';

        return {
            ...dataset,
            pointRadius,
            pointBackgroundColor,
            pointBorderColor: '#6b72fdfc',
            pointBorderWidth: 2
        };
    });

    const customData = {
        ...data,
        datasets: customPointStyles
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#b2b2b2'
                }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            y: {
                ticks: {
                    maxTicksLimit: 4,
                    color: '#b2b2b2a0'
                },
                grid: {
                    color: '#b2b2b220'
                }
            },
            x: {
                ticks: {
                    maxTicksLimit: 6,
                    color: '#b2b2b2a0'
                },
                grid: {
                    display: false
                }
            },
        },
        elements: {
            line: {
                tension: 0.3,
                fill: 'start',
                backgroundColor: '#6b72fd40',
                borderColor: '#6b72fdfc',
                borderWidth: 3
            },
            point: {
                radius: 0
            }
        }
    };

    // Return the Line component with data and options
    return <Line data={customData} options={options} />;
};

export default LineGraph;
