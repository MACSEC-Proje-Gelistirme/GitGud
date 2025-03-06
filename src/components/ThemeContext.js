import React, { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const savedThemeMode = localStorage.getItem('themeMode') === 'light'
  const [isLightMode, setIsLightMode] = useState(savedThemeMode)

  const toggleMode = () => {
    setIsLightMode(!isLightMode)
  }

  const saveTheme = () => {
    localStorage.setItem('themeMode', isLightMode ? 'light' : 'dark')
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode')
    if (savedTheme) {
      setIsLightMode(savedTheme === 'light')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleMode, saveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
