import { useState } from 'react';
const Home = () => {
  const handleClick = (e) => {
    setName('Stero');
    setAge(30);
  };
  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(10);
  return (
    <div className='home'>
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
