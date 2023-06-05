import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function GraphArea() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line", // Specify the chart type as 'line'
      data: {
        labels: ["Label 1", "Label 2", "Label 3"], // Provide the labels for the X-axis
        datasets: [
          {
            label: "Dataset 1",
            data: [10, 20, 30], // Provide the data points for the Y-axis
            borderColor: "rgba(0, 123, 255, 0.5)", // Set the line color
            fill: false, // Disable filling the area below the line
          },
        ],
      },
      options: {
        // Specify any additional options for your line chart
      },
    });

    return () => {
      chart.destroy(); // Cleanup the chart instance when the component is unmounted
    };
  }, []);

  return <canvas ref={chartRef} />;
}
