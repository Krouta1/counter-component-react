import './App.css';
import CustomCounter from './components/CustomCounter';

function App() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <CustomCounter initialCounter={{ count: 0, history: [] }} />
    </div>
  );
}

export default App;
