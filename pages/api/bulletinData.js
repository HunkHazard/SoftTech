export default function handler(req, res) {
  const stationOne = {
    current_reading: {
      rate_one: 123,
      rate_two: 456,
    },
    energy_consumption: {
      low: 789,
      normal: 101112,
    },
    field_one: {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 3, 4, 5],
    },
    field_two: {
      x: [1, 2, 3, 4, 5],
      y: [5, 4, 3, 2, 1],
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
      x: [1, 2, 3, 4, 5],
      y: [10, 9, 8, 7, 6],
    },
    field_two: {
      x: [1, 2, 3, 4, 5],
      y: [5, 5, 5, 5, 5],
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
      x: [1, 2, 3, 4, 5],
      y: [2, 4, 6, 8, 10],
    },
    field_two: {
      x: [1, 2, 3, 4, 5],
      y: [1, 3, 5, 7, 9],
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
      x: [1, 2, 3, 4, 5],
      y: [5, 4, 3, 2, 1],
    },
    field_two: {
      x: [1, 2, 3, 4, 5],
      y: [10, 9, 8, 7, 6],
    },
  };

  const stations = [stationOne, stationTwo, stationThree, stationFour];
  // the request method is post
  if (req.method == "POST") {
    const { station } = req.body;
    // return the station data for the requested station number
    console.log(station, typeof station);
    console.log(stations[station]);
    res.status(200).json(stations[station]);
  }
}
