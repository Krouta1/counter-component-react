import React, { useReducer } from 'react';
import { motion } from 'framer-motion';

const CustomCounter = ({ initialCounter }) => {
  const reducer = (state, action) => {
    let newCount;
    switch (action.type) {
      case 'INCREMENT':
        newCount = state.count + action.payload;
        return {
          ...state,
          count: newCount,
          history: [newCount, ...state.history].slice(0, 5),
        };
      case 'DECREMENT':
        newCount = state.count - action.payload;
        return {
          ...state,
          count: newCount,
          history: [newCount, ...state.history].slice(0, 5),
        };
      case 'RESET':
        return initialCounter;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialCounter);

  return (
    <div className='flex flex-col items-center gap-5 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-72 transition-all'>
      {/* Counter Display */}
      <div className='relative w-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-md text-center py-3'>
        <motion.span
          key={state.count}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className='text-3xl font-mono font-bold text-gray-900 dark:text-white'
        >
          {state.count}
        </motion.span>
      </div>

      {/* Buttons */}
      <div className='grid grid-cols-2 gap-2 w-full'>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className='w-full py-2 text-lg font-bold bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-500 rounded-lg shadow-md'
          onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}
        >
          -1
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className='w-full py-2 text-lg font-bold bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 active:bg-gray-400 dark:active:bg-gray-500 rounded-lg shadow-md'
          onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
        >
          +1
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className='w-full py-2 text-lg font-bold bg-blue-200 dark:bg-blue-700 hover:bg-blue-300 dark:hover:bg-blue-600 active:bg-blue-400 dark:active:bg-blue-500 rounded-lg shadow-md'
          onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}
        >
          -5
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className='w-full py-2 text-lg font-bold bg-blue-200 dark:bg-blue-700 hover:bg-blue-300 dark:hover:bg-blue-600 active:bg-blue-400 dark:active:bg-blue-500 rounded-lg shadow-md'
          onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}
        >
          +5
        </motion.button>
      </div>

      {/* Reset Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        className='w-full py-3 text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-lg font-semibold shadow-md transition-all'
        onClick={() => dispatch({ type: 'RESET' })}
      >
        Reset
      </motion.button>

      {/* History Display */}
      <div className='w-full text-center text-gray-700 dark:text-gray-300 mt-4'>
        <h3 className='text-sm font-semibold'>Last 5 Changes:</h3>
        <div className='flex justify-center gap-2 text-sm font-mono mt-1'>
          {state.history.length > 0 ? (
            state.history.map((num, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className='px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md shadow-sm'
              >
                {num}
              </motion.div>
            ))
          ) : (
            <span className='text-gray-500'>No history yet</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCounter;
