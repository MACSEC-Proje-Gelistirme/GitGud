import React, { useState } from 'react'
import Button from './ui/Button'
import Title from './ui/Title'
import Container from './ui/Container'
import Text from './ui/Text'
import TextInput from './ui/TextInput'
import Label from './ui/Label'
import SubTitle from './ui/SubTitle'

const GitPush = () => {
  const [folder, setFolder] = useState('No folder selected')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleFolderSelect = async () => {
    const selectedFolder = await window.electron.dialog.openDirectory()
    setFolder(selectedFolder || 'No folder selected')
  }

  const handleCommitMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handlePush = () => {
    if (!message || folder.length === 0) {
      setStatus('❌ Please select files and enter a commit message.')
      return
    }

    setStatus('⏳ Pushing changes...')

    window.electronAPI.gitPush(message, folder).then(
      (response) => {
        setStatus(`✅ ${response}`)
      },
      (error) => {
        setStatus(`❌ ${error}`)
      },
    )
  }

  return (
    <Container>
      <Title text="✨ Git Push ✨" color="text-blue-300" />
      <Button
        onClick={handleFolderSelect}
        text="Select Folder"
        bgcolor="bg-blue-500"
        tcolor="text-white"
      />
      <SubTitle color="text-white" text={`📁 Selected Folder`} />
      <Text color="text-white" text={folder} />
      <div className="mb-3">
        <Label text="📝 Commit Message:" color="text-blue-300">
          <TextInput
            placeholder="Enter your commit message..."
            value={message}
            onChange={handleCommitMessageChange}
            color="border-gray-300"
          />
        </Label>
      </div>
      <Button
        onClick={handlePush}
        text="🚀 Push to Git"
        bgcolor="bg-green-500"
        tcolor="text-white"
      />
      <Text text={status} color="text-gray-400" />
    </Container>
  )
}

export default GitPush
