'use client';
import { useMcpClient } from '@/lib/useMcpClient';
import { useState } from 'react';

export default function McpDemo() {
  const { isConnected, error, result, callTool } = useMcpClient();

  const [diceSides, setDiceSides] = useState(6);
  const [helloName, setHelloName] = useState('User');
  const [addA, setAddA] = useState(5);
  const [addB, setAddB] = useState(7);
  const [randomMin, setRandomMin] = useState(1);
  const [randomMax, setRandomMax] = useState(100);
  const [paletteCount, setPaletteCount] = useState(5);
  const [zodiacSign, setZodiacSign] = useState('Aries');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">MCP Tool Demo</h1>
        <p className="text-gray-600 mb-6">Test all available MCP tools</p>

        <div className="mb-6">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              isConnected ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {isConnected ? '✅ Connected' : '⏳ Connecting...'}
          </span>
        </div>

        {error && <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">{error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Tool 1: Roll Dice */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">🎲 Roll Dice</h3>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                value={diceSides}
                onChange={(e) => setDiceSides(Number(e.target.value))}
                min="2"
                max="100"
                className="px-3 py-2 border rounded-md w-24"
                disabled={!isConnected}
              />
              <button
                onClick={() => callTool('roll_dice', { sides: diceSides })}
                disabled={!isConnected}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Roll
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">👋 Say Hello</h3>
            <div className="flex gap-3 items-center">
              <input
                type="text"
                value={helloName}
                onChange={(e) => setHelloName(e.target.value)}
                className="px-3 py-2 border rounded-md flex-1"
                placeholder="Enter name"
                disabled={!isConnected}
              />
              <button
                onClick={() => callTool('say_hello', { name: helloName })}
                disabled={!isConnected}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Greet
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">🧮 Add Numbers</h3>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                value={addA}
                onChange={(e) => setAddA(Number(e.target.value))}
                className="px-3 py-2 border rounded-md w-20"
                disabled={!isConnected}
              />
              <span className="text-gray-600">+</span>
              <input
                type="number"
                value={addB}
                onChange={(e) => setAddB(Number(e.target.value))}
                className="px-3 py-2 border rounded-md w-20"
                disabled={!isConnected}
              />
              <button
                onClick={() => callTool('add_numbers', { a: addA, b: addB })}
                disabled={!isConnected}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">🔢 Random Number</h3>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                value={randomMin}
                onChange={(e) => setRandomMin(Number(e.target.value))}
                className="px-3 py-2 border rounded-md w-20"
                placeholder="Min"
                disabled={!isConnected}
              />
              <span className="text-gray-600">to</span>
              <input
                type="number"
                value={randomMax}
                onChange={(e) => setRandomMax(Number(e.target.value))}
                className="px-3 py-2 border rounded-md w-20"
                placeholder="Max"
                disabled={!isConnected}
              />
              <button
                onClick={() => callTool('random_number', { min: randomMin, max: randomMax })}
                disabled={!isConnected}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Generate
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">💡 Random Quote</h3>
            <button
              onClick={() => callTool('random_quote', {})}
              disabled={!isConnected}
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Tool 6: Emoji Reaction */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">😃 Emoji Reaction</h3>
            <button
              onClick={() => callTool('emoji_reaction', {})}
              disabled={!isConnected}
              className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Get Emoji
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">🎨 Color Palette</h3>
            <div className="flex gap-3 items-center">
              <input
                type="number"
                value={paletteCount}
                onChange={(e) => setPaletteCount(Number(e.target.value))}
                min="2"
                max="8"
                className="px-3 py-2 border rounded-md w-20"
                disabled={!isConnected}
              />
              <button
                onClick={() => callTool('color_palette', { count: paletteCount })}
                disabled={!isConnected}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex-1"
              >
                Generate Palette
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">🔮 Horoscope</h3>
            <div className="flex gap-3 items-center">
              <select
                value={zodiacSign}
                onChange={(e) => setZodiacSign(e.target.value)}
                className="px-3 py-2 border rounded-md flex-1"
                disabled={!isConnected}
              >
                <option>Aries</option>
                <option>Taurus</option>
                <option>Gemini</option>
                <option>Cancer</option>
                <option>Leo</option>
                <option>Virgo</option>
                <option>Libra</option>
                <option>Scorpio</option>
                <option>Sagittarius</option>
                <option>Capricorn</option>
                <option>Aquarius</option>
                <option>Pisces</option>
              </select>
              <button
                onClick={() => callTool('horoscope', { sign: zodiacSign })}
                disabled={!isConnected}
                className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Read
              </button>
            </div>
          </div>
        </div>

        {result && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">📋 Result</h3>
            <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm border border-gray-200">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
