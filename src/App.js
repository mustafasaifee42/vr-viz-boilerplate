import VRViz from "vr-viz";

// collaboration
import "./clientSocket.js";

function App() {
  return (
    <VRViz
    scene={{
      sky: {
        style: {
          color: "#333",
          texture: false,
        },
      },
      lights: [
        {
          type: "directional",
          color: "#fff",
          position: "0 1 1",
          intensity: 1,
          decay: 1,
        },
        {
          type: "ambient",
          color: "#fff",
          intensity: 1,
          decay: 1,
        },
      ],
      camera: {
        position: "10 5 12",
        rotation: "0 0 0",
      },
      reloadPageOnExitVR: true,
    }}
    graph={[
      {
        type: "WaterFallPlot",
        data: {
          dataFile: "data/global_temperature.csv",
          fileType: "csv",
          fieldDesc: [
            ["year", "number"],
            [" -50", "number"],
            ["-40", "number"],
            ["-30", "number"],
            ["-20", "number"],
            ["-10", "number"],
            ["0", "number"],
            ["10", "number"],
            ["20", "number"],
            ["30", "number"],
            ["40", "number"],
            ["50", "number"],
            ["60", "number"],
            ["70", "number"],
          ],
        },
        style: {
          dimensions: {
            width: 30,
            height: 40,
            depth: 10,
          },
        },
        rotationOnDrag: {
          rotateAroundXaxis: false,
        },
        mark: {
          position: {
            x: {
              scaleType: "ordinal",
              domain: [
                "-50","-40","-30","-20","-10","0","10","20","30","40","50","60","70",
              ],
            },
            z: {
              scaleType: "ordinal",
              field: "year",
            },
          },
          style: {
            stroke: {
              color: "#666",
              width: 40,
            },
            fill: {
              color: "#00FFFF",
              opacity: 0.1,
            },
          },
        },
        axis: {
          "x-axis": {
            orient: "front-bottom",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.7,
              fontSize: 40,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
          "y-axis": {
            orient: "front-left",
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.7,
              fontSize: 40,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
          "z-axis": {
            ticks: {
              noOfTicks: 10,
              size: 0.01,
              color: "white",
              opacity: 0.7,
              fontSize: 40,
            },
            grid: {
              color: "white",
              opacity: 0.7,
            },
          },
        },
      },
    ]}
  />
  );
}

export default App;
