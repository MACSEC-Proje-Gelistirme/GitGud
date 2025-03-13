import React from 'react'

export default function Repo({
  key,
  repo_name,
  repo_description,
  repo_language,
  repo_stars,
}) {
  return (
    <div
      key={key}
      className="p-4 bg-white rounded-md border border-gray-200 background-color duration-300"
    >
      <h2>{repo_name}</h2>
      <p>{repo_description}</p>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>🖋️ {repo_language}</span>
        <span>⭐ {repo_stars}</span>
      </div>
    </div>
  )
}
