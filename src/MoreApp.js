import VRViz from "vr-viz";
import mapData from "./mapData";

// collaboration
import "./clientSocket.js";
import "aframe-extras";

function App() {
  return (
    <a-scene>
    <a-sky color="#333333"></a-sky>
      <a-entity
        movement-controls="speed: 1; fly: true;"
        id="rig"
        position="0 0 70"
      >
        <a-entity
          cursor="rayOrigin: mouse;"
          raycaster="far: 2; objects: .clickable;"
        ></a-entity>
        <a-camera id="camera"></a-camera>
      </a-entity>

      <VRViz
        graph={[
          {
            type: "WaterFallPlot",
            data: {
              dataFile: "data/more_temperature.csv",
              fileType: "csv",
              fieldDesc: [
                ["year", "number"],
                ["-52", "number"],
                ["-45", "number"],
                ["-44", "number"],
                ["-42", "number"],
                ["-40", "number"],
                ["-39", "number"],
                ["-37", "number"],
                ["-36", "number"],
                ["-34", "number"],
                ["-32", "number"],
                ["-31", "number"],
                ["-29", "number"],
                ["-26", "number"],
                ["-24", "number"],
                ["-23", "number"],
                ["-21", "number"],
                ["-20", "number"],
                ["-18", "number"],
                ["-16", "number"],
                ["-15", "number"],
                ["-13", "number"],
                ["-12", "number"],
                ["-10", "number"],
                ["-8", "number"],
                ["-7", "number"],
                ["-5", "number"],
                ["-4", "number"],
                ["-2", "number"],
                ["0", "number"],
                ["2", "number"],
                ["4", "number"],
                ["5", "number"],
                ["7", "number"],
                ["8", "number"],
                ["10", "number"],
                ["12", "number"],
                ["13", "number"],
                ["15", "number"],
                ["16", "number"],
                ["18", "number"],
                ["20", "number"],
                ["21", "number"],
                ["23", "number"],
                ["24", "number"],
                ["26", "number"],
                ["28", "number"],
                ["29", "number"],
                ["31", "number"],
                ["32", "number"],
                ["34", "number"],
                ["36", "number"],
                ["37", "number"],
                ["39", "number"],
                ["40", "number"],
                ["42", "number"],
                ["44", "number"],
                ["45", "number"],
                ["47", "number"],
                ["49", "number"],
                ["50", "number"],
                ["52", "number"],
                ["53", "number"],
                ["55", "number"],
                ["57", "number"],
                ["58", "number"],
                ["60", "number"],
                ["61", "number"],
                ["63", "number"],
                ["65", "number"],
                ["68", "number"],
                ["69", "number"],
              ],
            },
            style: {
              dimensions: {
                width: 70,
                height: 50,
                depth: 20,
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
                    "-52",
                    "-45",
                    "-44",
                    "-42",
                    "-40",
                    "-39",
                    "-37",
                    "-36",
                    "-34",
                    "-32",
                    "-31",
                    "-29",
                    "-28",
                    "-26",
                    "-24",
                    "-23",
                    "-21",
                    "-20",
                    "-18",
                    "-16",
                    "-15",
                    "-13",
                    "-12",
                    "-10",
                    "-8",
                    "-7",
                    "-5",
                    "-4",
                    "-2",
                    "0",
                    "2",
                    "4",
                    "5",
                    "7",
                    "8",
                    "10",
                    "12",
                    "13",
                    "15",
                    "16",
                    "18",
                    "20",
                    "21",
                    "23",
                    "24",
                    "26",
                    "28",
                    "29",
                    "31",
                    "32",
                    "34",
                    "36",
                    "37",
                    "39",
                    "40",
                    "42",
                    "44",
                    "45",
                    "47",
                    "49",
                    "50",
                    "52",
                    "53",
                    "55",
                    "57",
                    "58",
                    "60",
                    "61",
                    "63",
                    "65",
                    "68",
                    "69",
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
                  size: 1,
                  color: "white",
                  opacity: 0.7,
                  fontSize: 10,
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
                  fontSize: 60,
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

          // {
          //   type: "PrismMap",
          //   data: {
          //     dataFile: "data/prismMapData.csv",
          //     fileType: "csv",
          //     fieldDesc: [
          //       ["id", "text"],
          //       ["value", "number"],
          //       ["colorValue", "number"],
          //     ],
          //   },
          //   style: {
          //     origin: { x: 0, y: 0, z: 0 },
          //   },
          //   mark: {
          //     mapScale: 20,
          //     mapOrigin: [5, 5],
          //     rotation: "-45 0 0",
          //     data: mapData,
          //     projection: "Mercator",
          //     shapeIdentifier: "id",
          //     shapeKey: "countries",
          //     style: {
          //       extrusion: {
          //         field: "value",
          //         value: [0, 5],
          //       },
          //       fill: {
          //         scaleType: "ordinal",
          //         opacity: 0.9,
          //         field: "colorValue",
          //         color: ["green", "blue", "red", "yellow", "magenta", "cyan"],
          //       },
          //       stroke: {
          //         color: "black",
          //       },
          //     },
          //   },
          // },

          {
            type: "PrismMap",
            data: {
              dataFile: "data/1850_positive.csv",
              fileType: "csv",
              fieldDesc: [
                ["id", "text"],
                ["value", "number"],
                ["colorValue", "number"],
              ],
            },
            style: {
              origin: { x: 0, y: 0, z: 0 },
            },
            mark: {
              mapScale: 20,
              mapOrigin: [5, 5],
              rotation: "-45 0 0",
              data: mapData,
              projection: "Mercator",
              shapeIdentifier: "id",
              shapeKey: "countries",
              style: {
                extrusion: {
                  field: "value",
                  value: [0, 50],
                },
                fill: {
                  scaleType: "ordinal",
                  opacity: 0.9,
                  field: "colorValue",
                  color: [
                    "#000000",
                    "#28112e",
                    "#478538",
                    "#25521a",
                    "#591a27",
                    "#b961cf",
                    "#fa64af",
                    "#2a639c",
                    "#809c8e",
                    "#e3882d",
                    "#f2bdd8",
                  ],
                  // color: ["#000000", "#002DF5","#1C28DA","#3923BF","#551EA3","#711988","#8E146D","#AA0F52","#C60A36","#E3051B","#FF0000"],
                },
                stroke: {
                  color: "black",
                },
              },
            },
          },
        ]}
      />

      <a-entity id="left-con" oculus-touch-controls="hand: left"></a-entity>
      <a-entity id="right-con" oculus-touch-controls="hand: right"></a-entity>
    </a-scene>
  );
}

export default App;
