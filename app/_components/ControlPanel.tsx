import { Button, Flex, Slider, Switch, Typography } from "antd"

import { WellKnownPattern } from "../_utils/pattern-constructors"
import styles from './controlpanel.module.css'

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
  return (
    <Flex vertical>
      <Flex gap="small">
        <Switch checked={props.running} onChange={props.toggleRunning}/>
        <Button onClick={() => props.initWellKnownPattern(WellKnownPattern.Pentomino)} >Pentomino</Button>
        <Button onClick={() => props.initWellKnownPattern(WellKnownPattern.Glider)} >Glider</Button>
        <Button onClick={() => props.initWellKnownPattern(WellKnownPattern.Caterer)} >Caterer</Button>
        <Button danger onClick={props.clearHandler} >Clear</Button>
      </Flex>
      <Flex>
        <Typography.Text>Fast</Typography.Text>
        <Slider
          min={props.updateFrequencyMin}
          max={props.updateFrequencyMax}
          value={props.updateFrequency}
          onChange={(value) => props.updateFrequencyChange(value)}
          className={styles.slider}
        />
        <Typography.Text>Slow</Typography.Text>
      </Flex>
    </Flex>
  )
}