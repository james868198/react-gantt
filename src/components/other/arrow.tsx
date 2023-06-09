import React from "react";
import { BarTask } from "../../types/bar-task";

type ArrowProps = {
  taskFrom: BarTask;
  taskTo: BarTask;
  rowHeight: number;
  taskHeight: number;
  arrowIndent: number;
  rtl: boolean;
};

export const Arrow: React.FC<ArrowProps> = ({
  taskFrom,
  taskTo,
  rowHeight,
  taskHeight,
  arrowIndent,
  rtl,
}) => {
  const [path, trianglePoints] = drawPathAndTriangle(
    taskFrom,
    taskTo,
    rowHeight,
    taskHeight,
    arrowIndent,
    rtl
  );

  return (
    <g className="arrow">
      <path strokeWidth="1.5" d={path} fill="none" />
      <polygon points={trianglePoints} />
    </g>
  );
};

const drawPathAndTriangle = (
  taskFrom: BarTask,
  taskTo: BarTask,
  rowHeight: number,
  taskHeight: number,
  arrowIndent: number,
  rtl: boolean
) => {
  const indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
  const taskToEndPosition = taskTo.y + taskHeight / 2;
  const taskFromEndPosition = rtl
    ? taskFrom.x1 - arrowIndent * 2
    : taskFrom.x2 + arrowIndent * 2;
  const taskFromHorizontalOffsetValue =
    (rtl ? taskFromEndPosition > taskTo.x2 : taskFromEndPosition < taskTo.x1)
      ? ""
      : `H ${rtl ? taskTo.x2 + arrowIndent : taskTo.x1 - arrowIndent}`;
  const taskToHorizontalOffsetValue =
    (rtl ? taskFromEndPosition < taskTo.x2 : taskFromEndPosition > taskTo.x1)
      ? rtl
        ? -arrowIndent
        : arrowIndent
      : rtl
      ? taskTo.x2 - taskFrom.x1 + arrowIndent
      : taskTo.x1 - taskFrom.x2 - arrowIndent;

  const path = `M ${rtl ? taskFrom.x1 : taskFrom.x2} ${
    taskFrom.y + taskHeight / 2
  } 
  h ${rtl ? -arrowIndent : arrowIndent} 
  v ${(indexCompare * rowHeight) / 2} 
  ${taskFromHorizontalOffsetValue}
  V ${taskToEndPosition} 
  h ${taskToHorizontalOffsetValue}`;

  const trianglePoints = `${rtl ? taskTo.x2 : taskTo.x1},${taskToEndPosition} 
  ${rtl ? taskTo.x2 + 5 : taskTo.x1 - 5},${taskToEndPosition + 5} 
  ${rtl ? taskTo.x2 + 5 : taskTo.x1 - 5},${taskToEndPosition - 5}`;
  return [path, trianglePoints];
};
