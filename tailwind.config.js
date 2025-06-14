export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    safelist: [
      // text colors
      'text-gray-900',
      'text-white',
      'text-yellow-100',
      'text-purple-100',
      'text-green-100',
      'text-blue-100',
      'text-cyan-800',
  
      // background gradients
      'bg-gradient-to-br',
      'from-blue-200', 'to-pink-100',
      'from-gray-900', 'to-black',
      'from-blue-900', 'via-red-900', 'to-yellow-800',
      'from-green-900', 'via-yellow-700', 'to-purple-800',
      'from-purple-900', 'via-green-700', 'to-blue-500',
      'from-gray-600', 'via-gray-800',
      'from-blue-700', 'via-cyan-800', 'to-gray-900',
    ],
    plugins: [],
  }
  