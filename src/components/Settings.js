import React from 'react'
import './Settings.css'
import { useTheme } from './ThemeContext'

function Settings() {
  const { isLightMode, toggleMode, saveTheme } = useTheme()

  const handleSaveChanges = () => {
    saveTheme()
    alert('Changes saved successfully!')
  }

  return (
    <div
      className={`settings-page ${isLightMode ? 'light-mode' : 'dark-mode'}`}
    >
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-section">
          <h2>Mode selection</h2>
          <label>
            <input
              type="checkbox"
              checked={!isLightMode}
              onChange={toggleMode}
            />
            <span>{isLightMode ? '🌞 Light Mode' : '🌙 Dark Mode'}</span>
          </label>
        </div>
        <div className="settings-section">
          <h2>Language</h2>
          <select>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <button id="lightDarkModeBtn" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings
