import { Cell } from "./Cell";

interface LifeGridProps {
  grid: boolean[][],
  cellChangeHandler: (x: number, y: number, newVal: boolean) => void
  running: boolean
}
export const LifeGrid = ({grid, running, cellChangeHandler}: LifeGridProps) => {

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`cell-${rowIndex}-${colIndex}`}
              disabled={running}
              x={rowIndex}
              y={colIndex}
              value={cell}
              onCellChange={cellChangeHandler}
            />
          ))}
        </div>
      ))}
    </div>
  );
}