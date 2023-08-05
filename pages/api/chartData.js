export default function handler(req, res) {
  if (req.method === "POST") {
    const StationOne = {
      x: [0, 1, 2, 3, 4],
      y: [10, 15, 20, 25, 30],
      airQuality: [10, 20, 40],
    };

    const StationTwo = {
      x: [0, 1, 2, 3, 4],
      y: [5, 10, 15, 20, 25],
      airQuality: [10, 30, 50],
    };

    const StationThree = {
      x: [0, 1, 2, 3, 4],
      y: [24, 20, 16, 12, 8],
      airQuality: [5, 25, 45],
    };

    const StationFour = {
      x: [0, 1, 2, 3, 4],
      y: [2, 4, 6, 8, 10],
      airQuality: [15, 35, 55],
    };

    const stations = [StationOne, StationTwo, StationThree, StationFour];

    const { station } = req.body;

    res.status(200).json(stations[station]);
  } else {
    // send error message
    res.status(400).json({ message: "Invalid request method" });
  }
}
