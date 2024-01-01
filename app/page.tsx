"use client";
import { useEffect, useState } from 'react';
import { Flex, ConfigProvider } from 'antd';

import styles from './page.module.css'
import { LifeGrid } from './_components/LifeGrid';
import { createEmptyGrid, iterate } from './_utils/grid-utils';
import { WellKnownPattern, wellKnownHandlers } from './_utils/pattern-constructors';
import { ControlPanel } from './_components/ControlPanel';

export default function Home() {
  const sizeX = 60;
  const sizeY = 30;

  const [grid, setGrid] = useState(createEmptyGrid(sizeX,sizeY));
  const [running, setRunning] = useState(false);
  const [updateFrequency, setUpdateFrequency] = useState(100);

  const cellChangeHandler = (x: number, y: number, newValue: boolean) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[x][y] = newValue;
      return newGrid;
    })
  }

  const toggleRunning = () => setRunning(!running)

  useEffect(() => {
    const oneIteration = () => {
      const newGrid = iterate(grid);
      setGrid(newGrid)
    };

    let intervalId: NodeJS.Timeout;

    if (running) {
      intervalId = setInterval(oneIteration, updateFrequency * 5);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running, grid, updateFrequency]);

  const initWellKnownPattern = (pattern: WellKnownPattern) => {
    const constructor = wellKnownHandlers.get(pattern);
    if (constructor) {
      const newGrid = constructor(grid);
      setGrid(newGrid)
    }
  }

  const clearHandler = () => {
    setGrid(createEmptyGrid(sizeX, sizeY))
  }

  return (
    <ConfigProvider theme={{ cssVar: true }}>
    <Flex vertical justify='space-between' align='center' component={'main'} className={styles.container}>
      <LifeGrid grid={grid} running={running} cellChangeHandler={cellChangeHandler}></LifeGrid>
      <ControlPanel
        updateFrequencyMin={1}
        updateFrequencyMax={200}
        updateFrequency={updateFrequency}
        updateFrequencyChange={setUpdateFrequency}
        initWellKnownPattern={initWellKnownPattern}
        clearHandler={clearHandler}
        running={running}
        toggleRunning={toggleRunning}>
      </ControlPanel>
    </Flex>
    </ConfigProvider>
  )
}
