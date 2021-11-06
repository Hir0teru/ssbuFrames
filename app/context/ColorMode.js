import React, { useState, createContext, useContext } from "react"
import { Appearance } from 'react-native';

const colorModes = {
  light: 'Light',
  dark: 'Dark',
}

const ColorContext = createContext({
  color: '',
  setColor: () => {},
})


const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('auto')
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

const useColorContext = () => useContext(ColorContext)

export { ColorProvider, useColorContext, colorModes }