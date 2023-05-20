import React from "react";
import { Task } from "../../types/public-types";
import styles from "./grid.module.css";

export type GridBodyProps = {
  tasks: Task[];
  dates: Date[];
  svgWidth: number;
  rowHeight: number;
  columnWidth: number;
  todayColor: string;
  rtl: boolean;
};

export const GridBody: React.FC<GridBodyProps> = ({
  tasks,
  dates,
  rowHeight,
  svgWidth,
  columnWidth,
  todayColor,
  rtl,
}) => {
  const now = new Date();

  const gridRows = tasks.map((task, i) => (
    <rect
      key={"Row" + task.id}
      x="0"
      y={i * rowHeight}
      width={svgWidth}
      height={rowHeight}
      className={styles.gridRow}
    />
  ));

  const rowLines = tasks.map((task, i) => (
    <line
      key={"RowLine" + task.id}
      x="0"
      y1={i * rowHeight}
      x2={svgWidth}
      y2={i * rowHeight}
      className={styles.gridRowLine}
    />
  ));

  const ticks = dates.map((date, i) => (
    <line
      key={date.getTime()}
      x1={i * columnWidth}
      y1={0}
      x2={i * columnWidth}
      y2={tasks.length * rowHeight}
      className={styles.gridTick}
    />
  ));

  const todayIndex = dates.findIndex(
    (date, i) =>
      date.getTime() <= now.getTime() &&
      (i + 1 === dates.length ||
        dates[i + 1].getTime() > now.getTime())
  );

  const today = todayIndex !== -1 && (
    <rect
      x={todayIndex * columnWidth}
      y={0}
      width={columnWidth}
      height={tasks.length * rowHeight}
      fill={todayColor}
    />
  );

  return (
    <g className="gridBody">
      <g className="rows">{gridRows}</g>
      <g className="rowLines">{rowLines}</g>
      <g className="ticks">{ticks}</g>
      <g className="today">{today}</g>
    </g>
  );
};

export default GridBody;
