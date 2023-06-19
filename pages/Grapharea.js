import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const stationOne = {
  current_reading: {
    rate_one: 1990,
    rate_two: 2000,
  },
  energy_consumption: {
    low: 345367,
    normal: 789456,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [4, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

const stationTwo = {
  current_reading: {
    rate_one: 987,
    rate_two: 654,
  },
  energy_consumption: {
    low: 123456,
    normal: 789012,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  },
};

const stationThree = {
  current_reading: {
    rate_one: 13579,
    rate_two: 24680,
  },
  energy_consumption: {
    low: 975310,
    normal: 864209,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [2, 4, 6, 8, 10, 8, 6, 4, 2, 0],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1, 3, 5, 7, 9, 10, 8, 6, 4, 2],
  },
};

const stationFour = {
  current_reading: {
    rate_one: 1111,
    rate_two: 2222,
  },
  energy_consumption: {
    low: 333333,
    normal: 444444,
  },
  field_one: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [5, 4, 3, 2, 1, 1, 2, 3, 4, 5],
  },
  field_two: {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
};

export default function GraphArea({ data, i }) {
  const chartRef = useRef(null);
  const [selected, setSelected] = useState(data);
  const [Data, setData] = useState(stationOne);
  const [labels, setLabels] = useState(stationOne.field_one.x);
  const [values, setValues] = useState(stationOne.field_one.y);

  const setLabelsAndValues = () => {
    if (i === 1) {
      setLabels(Data.field_one.x);
      setValues(Data.field_one.y);
    } else {
      setLabels(Data.field_two.x);
      setValues(Data.field_two.y);
    }
  };

  const setStation = () => {
    if (selected === 0) {
      setData(stationOne);
    } else if (selected === 1) {
      setData(stationTwo);
    } else if (selected === 2) {
      setData(stationThree);
    } else if (selected === 3) {
      setData(stationFour);
    }
  };

  useEffect(() => {
    setSelected(data);
  }, [data]);

  useEffect(() => {
    setStation();
  }, [selected]);

  useEffect(() => {
    setLabelsAndValues();
  }, [Data, i]);

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