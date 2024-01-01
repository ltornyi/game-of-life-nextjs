import { Flex } from "antd"

import { WellKnownPattern } from "../_utils/pattern-constructors"

interface ControlPanelProps {
  updateFrequencyMin: number,
  updateFrequencyMax: number,
  updateFrequency: number,
  updateFrequencyChange: (newValue: number) => void,
  initWellKnownPattern: (pattern: WellKnownPattern) => void,
  clearHandler: () => void,
  running: boolean,
  toggleRunning: () => void
}
export const ControlPanel = (props: ControlPanelProps) => {
  const faster = () => {
    if (props.updateFrequency > props.updateFrequencyMin) {
      props.updateFrequencyChange(props.updateFrequency-1)
    }
  }

  const slower = () => {
    if (props.updateFrequency < props.updateFrequencyMax) {
      props.updateFrequencyChange(props.updateFrequency+1)
    }
  }

  return (
    <Flex gap="small">
      <button onClick={props.toggleRunning} >{props.running ? 'Pause': 'Start'}</button>
      <span>{props.updateFrequency}</span>
      <button onClick={faster} >Faster</button>
      <button onClick={slower} >Slower</button>
      <button onClick={() => props.initWellKnownPattern(WellKnownPattern.Pentomino)} >Pentomino</button>
      <button onClick={() => props.initWellKnownPattern(WellKnownPattern.Glider)} >Glider</button>
      <button onClick={() => props.initWellKnownPattern(WellKnownPattern.Caterer)} >Caterer</button>
      <button onClick={props.clearHandler} >Clear</button>
    </Flex>
  )
}