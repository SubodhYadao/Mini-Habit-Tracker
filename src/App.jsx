import React from 'react';
import HabitTracker from './components/HabitTracker';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Mini Habit Tracker</h1>
        <HabitTracker />
      </div>
    </div>
  );
}

export default App;
