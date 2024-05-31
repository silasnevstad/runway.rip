"use client";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarGraph = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#6b72fd'
                }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            y: {
                ticks: {
                    maxTicksLimit: 5,
                    color: '#b2b2b2a0'
                },
                grid: {
                    display: false
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
            }
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarGraph;
