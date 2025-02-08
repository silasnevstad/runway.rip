"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineGraph = ({
                       data,
                       curved = true,
                       showPoints = true,
                       lastPointMarkerOnly = false,
                       markerOptions = {
                           radius: 3,
                           pointBackgroundColor: "#6b72fdfc",
                           pointBorderColor: "#6b72fdfc",
                           pointBorderWidth: 2,
                           lastRadius: 6,
                       },
                       axisStyles = {},
                       lineStyle = {},
                       fillOpacity = 0.4,
                       xAxisLabel = "",
                       yAxisLabel = "",
                       customOptions = {},
                   }) => {
    // Process each dataset to apply marker and line style customizations.
    const processedDatasets = data.datasets.map((dataset) => {
        const pointCount = dataset.data.length;

        let newPointRadius = new Array(pointCount).fill(0);
        let newPointBackgroundColor = new Array(pointCount).fill("rgba(0,0,0,0)");
        let newPointBorderColor = new Array(pointCount).fill("rgba(0,0,0,0)");
        let newPointBorderWidth = new Array(pointCount).fill(0);

        if (showPoints) {
            if (lastPointMarkerOnly) {
                // All points are hidden except the last one.
                newPointRadius = new Array(pointCount).fill(0);
                newPointBackgroundColor = new Array(pointCount).fill("rgba(0,0,0,0)");
                newPointBorderColor = new Array(pointCount).fill("rgba(0,0,0,0)");
                newPointBorderWidth = new Array(pointCount).fill(0);
                newPointRadius[pointCount - 1] =
                    markerOptions.lastRadius !== undefined
                        ? markerOptions.lastRadius
                        : markerOptions.radius;
                newPointBackgroundColor[pointCount - 1] =
                    markerOptions.lastPointBackgroundColor ||
                    markerOptions.pointBackgroundColor ||
                    dataset.borderColor ||
                    "#000000";
                newPointBorderColor[pointCount - 1] =
                    markerOptions.lastPointBorderColor ||
                    markerOptions.pointBorderColor ||
                    dataset.borderColor ||
                    "#000000";
                newPointBorderWidth[pointCount - 1] =
                    markerOptions.lastPointBorderWidth !== undefined
                        ? markerOptions.lastPointBorderWidth
                        : markerOptions.pointBorderWidth;
            } else {
                // Apply marker styling to all points.
                newPointRadius = new Array(pointCount).fill(
                    markerOptions.radius !== undefined ? markerOptions.radius : 3
                );
                newPointBackgroundColor = new Array(pointCount).fill(
                    markerOptions.pointBackgroundColor || dataset.borderColor || "#000000"
                );
                newPointBorderColor = new Array(pointCount).fill(
                    markerOptions.pointBorderColor || dataset.borderColor || "#000000"
                );
                newPointBorderWidth = new Array(pointCount).fill(
                    markerOptions.pointBorderWidth !== undefined ? markerOptions.pointBorderWidth : 2
                );
            }
        }

        return {
            ...dataset,
            pointRadius: newPointRadius,
            pointBackgroundColor: newPointBackgroundColor,
            pointBorderColor: newPointBorderColor,
            pointBorderWidth: newPointBorderWidth,
            // Apply line style defaults (these can be overridden via the lineStyle prop)
            tension: curved
                ? lineStyle.tension !== undefined
                    ? lineStyle.tension
                    : 0.3
                : 0,
            fill: lineStyle.fill !== undefined ? lineStyle.fill : "start",
            backgroundColor:
                lineStyle.backgroundColor !== undefined
                    ? lineStyle.backgroundColor
                    : `rgba(107,114,253,${fillOpacity})`,
            borderColor:
                lineStyle.borderColor !== undefined
                    ? lineStyle.borderColor
                    : dataset.borderColor || "#000000",
            borderWidth:
                lineStyle.borderWidth !== undefined ? lineStyle.borderWidth : 3,
        };
    });

    const processedData = {
        ...data,
        datasets: processedDatasets,
    };

    // Define default axis options and merge with any custom axisStyles provided.
    const defaultXAxis = {
        ticks: {
            maxTicksLimit: 6,
            color: "#b2b2b2",
        },
        grid: {
            display: false,
        },
        title: {
            display: xAxisLabel !== "",
            text: xAxisLabel,
            color:
                axisStyles.x && axisStyles.x.titleColor ? axisStyles.x.titleColor : "#000",
            font: {
                size:
                    axisStyles.x && axisStyles.x.titleFontSize
                        ? axisStyles.x.titleFontSize
                        : 12,
            },
        },
        ...axisStyles.x,
    };

    const defaultYAxis = {
        ticks: {
            maxTicksLimit: 4,
            color: "#b2b2b2",
        },
        grid: {
            color: "#b2b2b220",
        },
        title: {
            display: yAxisLabel !== "",
            text: yAxisLabel,
            color:
                axisStyles.y && axisStyles.y.titleColor ? axisStyles.y.titleColor : "#000",
            font: {
                size:
                    axisStyles.y && axisStyles.y.titleFontSize
                        ? axisStyles.y.titleFontSize
                        : 12,
            },
        },
        ...axisStyles.y,
    };

    // Define the Chart.js options.
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "#b2b2b2",
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: defaultXAxis,
            y: defaultYAxis,
        },
        elements: {
            line: {
                tension: curved
                    ? lineStyle.tension !== undefined
                        ? lineStyle.tension
                        : 0.3
                    : 0,
                fill: lineStyle.fill !== undefined ? lineStyle.fill : "start",
                backgroundColor:
                    lineStyle.backgroundColor !== undefined
                        ? lineStyle.backgroundColor
                        : `rgba(107,114,253,${fillOpacity})`,
                borderColor:
                    lineStyle.borderColor !== undefined
                        ? lineStyle.borderColor
                        : "#6b72fdfc",
                borderWidth:
                    lineStyle.borderWidth !== undefined ? lineStyle.borderWidth : 3,
            },
            point: {
                // The individual point settings are applied directly to each dataset.
                radius: 0,
            },
        },
        ...customOptions,
    };

    return <Line data={processedData} options={options} />;
};

export default LineGraph;
