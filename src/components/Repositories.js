import React, { useState } from 'react'
import Title from './ui/Title'
import TextInput from './ui/TextInput'
import Repo from './ui/Repo'

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
    <div className="p-5 m-5 bg-[#f0f0f0]">
      <div className="max-w-[600px] m-auto bg-white p-5 rounded-lg shadow-md">
        <Title text="Repositories" color="text-gray-700" />
        <TextInput
          color="bg-gray-200"
          placeholder="🔍 Search repositories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid gap-3">
          {filteredRepos.map((repo) => (
            <Repo
              key={repo.id}
              repo_name={repo.name}
              repo_description={repo.description}
              repo_language={repo.language}
              repo_stars={repo.stars}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Repositories
