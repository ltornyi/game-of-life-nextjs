import styles from './lifegrid.module.css'

interface CellProp {
  x: number,
  y: number,
  value: boolean;
  disabled: boolean;
  onCellChange: (x: number, y: number, checked: boolean) => void
}

export const Cell = ({value, disabled, onCellChange, x, y}: CellProp) => {
  return (
    <div
      className={`${styles.cell} ${value ? styles.occupied : styles.empty} ${disabled ? styles.disabled : ''}`}
      onClick={() => onCellChange(x, y, !value)}
    >
    </div>
  )
}