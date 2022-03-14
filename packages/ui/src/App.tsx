import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ColorPicker } from './components/ColorPicker';
import { Color } from '@ryanprescott/favorite-color-demo-shared';
import { Box, Text } from '@chakra-ui/react';

export default function App() {

  const [colors, setColors] = useState<Color[] | undefined>()
  const [currentColor, setCurrentColor] = useState<Color | undefined>()

  useEffect(
    () => {
      fetch("http://localhost:3001/colors").then(
        data => {
          data.json().then(
            json => setColors(json)
          )
        }
      )
    }
  )

  return (
    <Box p={8}>
      <Box>
        <Text fontSize={24} fontWeight={400}>
          {
            currentColor ? (
              `My favorite color is ${currentColor.name}`
            ) : (
              `Pick your favorite color`
            )
          }
        </Text>
      </Box>
      <ColorPicker 
        colors={colors}
        onPick={(color) => setCurrentColor(color)}
      />
    </Box>
  );
}