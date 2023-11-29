import './App.css';
import HelloWorld from './components/HelloWorld';
import ByeWorld from './components/ByeWorld';
import Input from './components/Input';
import Message from './components/Message';
import { useState } from 'react';


function App() {
  const [ sharedProp, setSharedProp ] = useState<string>('');

  const handlePropChange = (newValue: string) => {
    setSharedProp(newValue)
  }

  return (
    <>
      <HelloWorld/>
      <ByeWorld/>
      <Input sharedProp={sharedProp} onPropChange={handlePropChange}/>
      <Message sharedProp={sharedProp}/>
    </>
  )
}

export default App
