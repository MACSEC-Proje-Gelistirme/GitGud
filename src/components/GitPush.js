import React, { useState } from 'react';

const GitPush = () => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const fileInputRef = React.useRef(null);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setStatus('📂 Files selected!');
  };

  const handleCommitMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePush = () => {
    if (!message || files.length === 0) {
      setStatus('❌ Please select files and enter a commit message.');
      return;
    }

    setStatus('⏳ Pushing changes...');

    window.electronAPI.gitPush(message, files).then(
      (response) => {
        setStatus(`✅ ${response}`);
      },
      (error) => {
        setStatus(`❌ ${error}`);
      }
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ Git Push ✨</h1>

      {/* Gizli Dosya Input */}
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }} // GİZLİYORUZ
      />

      <button
        onClick={() => fileInputRef.current.click()} // Özel buton ile tetikliyoruz
        style={styles.customFileButton}
      >
        📂 Select Files
      </button>

      <div style={styles.inputGroup}>
        <label style={styles.label}>
          📝 Commit Message:
          <input
            type="text"
            placeholder="Enter your commit message..."
            value={message}
            onChange={handleCommitMessageChange}
            style={styles.textInput}
          />
        </label>
      </div>

      <button onClick={handlePush} style={styles.button}>
        🚀 Push to Git
      </button>

      <p style={styles.status}>{status}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    color: 'powderblue',
    marginBottom: '20px',
  },
  customFileButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    color: 'powderblue',
    marginBottom: '5px',
  },
  textInput: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  status: {
    marginTop: '20px',
    fontSize: '16px',
    color: '#333',
  },
};

export default GitPush;
