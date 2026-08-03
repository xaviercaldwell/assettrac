import React from 'react'

function GlobalNav() {
  return (
    <div className="bg-foreground text-black p-4 border-b border-gray-300 shadow-md z-50">
      <div className="flex items-center justify-between">
        <div className="text-xl font-extrabold">AssetTrac</div>
        <div className="flex gap-4">
          <button className="bg-indigo-100  px-4 py-2 rounded">Dashboard</button>
          <button className="bg-indigo-100 px-4 py-2 rounded">Profile</button>
        </div>
      </div>
    </div>
  )
}

export default GlobalNav