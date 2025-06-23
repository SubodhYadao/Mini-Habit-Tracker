import React, { useState } from 'react';

const habitsList = [
  { id: 1, name: 'Drink Water' },
  { id: 2, name: 'Read' },
  { id: 3, name: 'Meditate' },
  { id: 4, name: 'Code for 1 hour' },
  { id: 5, name: 'Exercise' },
  
];

const HabitTracker = () => {
  const [habits, setHabits] = useState(
    habitsList.map(habit => ({ ...habit, completed: false }))
  );
  const [filter, setFilter] = useState('all'); // 'all' or 'completed'

  const toggleHabit = (id) => {
    setHabits(prevHabits =>
      prevHabits.map(habit =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const filteredHabits = filter === 'completed'
    ? habits.filter(habit => habit.completed)
    : habits;

  const completedCount = habits.filter(habit => habit.completed).length;

  return (
    <div>
      <div className="flex justify-center mb-4 space-x-4">
        <button
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('all')}
        >
          Show All
        </button>
        <button
          className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setFilter('completed')}
        >
          Show Completed
        </button>
      </div>

      <ul className="space-y-3">
        {filteredHabits.map(habit => (
          <li key={habit.id} className="flex items-center justify-between p-3 border rounded shadow-sm">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(habit.id)}
                className="w-5 h-5 text-blue-600 rounded"
              />
              <span className={`select-none ${habit.completed ? 'line-through text-gray-400' : ''}`}>
                {habit.name}
              </span>
            </label>
            <span className={`text-sm font-semibold ${habit.completed ? 'text-green-600' : 'text-gray-600'}`}>
              {habit.completed ? 'Completed' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center font-semibold">
        {completedCount} / {habits.length} habits completed today
      </div>
    </div>
  );
};

export default HabitTracker;
