import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 backdrop-blur-md bg-white/10 border-r border-white/20 min-h-full">
    <ul className="space-y-4">
      <li className="p-2 rounded-xl shadow-inner bg-white/5">🏠 Home</li>
      <li className="p-2 rounded-xl shadow-inner bg-white/5">📁 Projects</li>
      <li className="p-2 rounded-xl shadow-inner bg-white/5">📞 Contact</li>
    </ul>
  </aside>

  )
}

export default Sidebar
