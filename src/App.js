import './App.css';
import { useRef } from 'react';

const App = () => {

  const inputRefAddress = useRef(null);

  return (
    <div className='app'>
      <input 
        className='app__input app__input_post'
        onChange={(e) => { 
          if ( e.target.value.length >= 6 ) { inputRefAddress.current.focus()}
        }}
      >
      </input>
      <input className='app__input app__input_address' ref={inputRefAddress}>

      </input>
    </div>
  );
}

export default App;
