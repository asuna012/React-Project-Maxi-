import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
//Added chart component inside our react app
const Chart = (props) => {
  //the datapointValues determine the maximum value of each month by mapping or going thru all the data inside the array then finding the largest number using the Math.max function
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
