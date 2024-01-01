interface CellProp {
  x: number,
  y: number,
  value: boolean;
  disabled: boolean;
  onCellChange: (x: number, y: number, checked: boolean) => void
}

export const Cell = ({value, disabled, onCellChange, x, y}: CellProp) => {
  return (
    <input type="checkbox"
      checked={value}
      disabled={disabled}
      onChange={(event) => onCellChange(x, y, event.target.checked)}
    />
  )
}