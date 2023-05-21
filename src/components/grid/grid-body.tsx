import React from "react";
import styles from "./grid.module.css";

export type GridBodyProps = {
  tasksNum: number;
  datesNum: number;
  svgWidth: number;
  rowHeight: number;
  columnWidth: number;
};

export const GridBody: React.FC<GridBodyProps> = ({
  tasksNum,
  datesNum,
  rowHeight,
  svgWidth,
  columnWidth,
}) => {
  const gridRows = Array.from({ length: tasksNum }, (_, i) => i).map((item, i) => (
    <rect
      key={i}
      x="0"
      y={i * rowHeight}
      width={svgWidth}
      height={rowHeight}
      className={styles.gridRow}
    />
  ))
  const rowLines = Array.from({ length: tasksNum }, (_, i) => i).map((item, i) => (
    <line
      key={i}
      x="0"
      y1={i * rowHeight}
      x2={svgWidth}
      y2={i * rowHeight}
      className={styles.gridRowLine}
    />
  ))
  const ticks = Array.from({ length: datesNum }, (_, i) => i).map((item, i) => (
    <line
      key={i}
      x1={i * columnWidth}
      y1={0}
      x2={i * columnWidth}
      y2={tasksNum * rowHeight}
      className={styles.gridTick}
    />
  ))

  // const todayIndex = dates.findIndex(
  //   (date, i) =>
  //     date.getTime() <= now.getTime() &&
  //     (i + 1 === dates.length ||
  //       dates[i + 1].getTime() > now.getTime())
  // );

  // const today = todayIndex !== -1 && (
  //   <rect
  //     x={todayIndex * columnWidth}
  //     y={0}
  //     width={columnWidth}
  //     height={tasks.length * rowHeight}
  //     fill={todayColor}
  //   />
  // );

  return (
    <g className="gridBody">
      <g className="rows">{gridRows}</g>
      {/* <g className="rowLines">{rowLines}</g> */}
      <g className="ticks">{ticks}</g>
      {/* <g className="today">{today}</g> */}
    </g>
  );
};

export default GridBody;
