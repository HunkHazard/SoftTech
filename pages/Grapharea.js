import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";

export default function GraphArea({ i }) {
  const selected = useSelector((state) => state.selectedStation.value);

  const chartRef = useRef(null);

  const [Data, setData] = useState({
    field_one: { x: [], y: [] },
    field_two: { x: [], y: [] },
  });
  const [labels, setLabels] = useState(null);
  const [values, setValues] = useState(null);

  async function getData() {
    const payload = {
      station: selected,
    };
    console.log("Selected Station: ", selected);
    const response = await fetch("http://localhost:3000/api/bulletinData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    //    console.log(response.status);
    const data = await response.json();
    //    console.log(data);
    setData(data);
  }

  useEffect(() => {
    getData();
    //   setData(stations[selected]);
    //  setLabels(stations[selected].field_one.x);
    //    setValues(stations[selected].field_one.y);
  }, [selected]);

  useEffect(() => {
    console.log(i);
    if (i == 1) {
      setLabels(Data.field_one.x);
      setValues(Data.field_one.y);
    } else if (i == 2) {
      setLabels(Data.field_two.x);
      setValues(Data.field_two.y);
    }
  }, [Data]);

  useEffect(() => {
    let chart;

    if (
      Data === null ||
      typeof Data === "undefined" ||
      Object.keys(Data).length === 0
    ) {
      return;
    } else {
      const ctx = chartRef.current.getContext("2d");
      chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: `Station ${selected + 1}`,
              data: values,
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
        chart.destroy();
      }
    };
  }, [Data, labels, values, selected]);

  return <canvas ref={chartRef} />;
}
