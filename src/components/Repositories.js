import React, { useState } from 'react'

const repositoriesData = [
  {
    id: 1,
    name: 'Awesome Project',
    description: 'An awesome project that does awesome things.',
    language: 'JavaScript',
    stars: 120,
  },
  {
    id: 2,
    name: 'Weather App',
    description: 'A simple app to check the weather.',
    language: 'Python',
    stars: 85,
  },
  {
    id: 3,
    name: 'Portfolio Website',
    description: 'A personal portfolio built with React.',
    language: 'HTML & CSS',
    stars: 95,
  },
]

function Repositories() {
  const [search, setSearch] = useState('')

  const filteredRepos = repositoriesData.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div
      style={{ padding: '20px', margin: '20px', backgroundColor: '#f0f0f0' }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}
        >
          Repositories
        </h1>

        <input
          type="text"
          placeholder="🔍 Search repositories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        <div style={{ display: 'grid', gap: '10px' }}>
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              style={{
                padding: '15px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '5px',
                transition: 'background-color 0.3s',
              }}
            >
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '14px',
                  color: '#666',
                  marginTop: '5px',
                }}
              >
                <span>🖋️ {repo.language}</span>
                <span>⭐ {repo.stars}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Repositories
