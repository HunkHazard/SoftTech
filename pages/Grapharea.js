import { useEffect, useState, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default function GraphArea({ data }) {
  const chartRef = useRef(null);
  const [Data, setData] = useState(data); // Set initial state of Data to the data prop

  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    let chart; // Declare the chart variable outside the if-else block

    if (
      Data === null ||
      typeof Data === "undefined" ||
      Object.keys(Data).length === 0
    ) {
      return; // Return early if Data is null, undefined, or empty
    } else {
      const ctx = chartRef.current.getContext("2d");
      chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: Data.x,
          datasets: [
            {
              label: "Dataset 1",
              data: Data.y,
              borderColor: "rgba(0, 123, 255, 0.5)",
              fill: false,
            },
          ],
        },
        options: {
          // Specify any additional options for your line chart
        },
      });
    }

    return () => {
      if (chart) {
        chart.destroy(); // Cleanup the chart instance when the component is unmounted
      }
    };
  }, [Data, chartRef]);

  return <canvas ref={chartRef} />;
}
