import { useState } from "react";
import Count from "./Components/Count";
import Increment from "./Components/Increment";
import Decrement from "./Components/Decrement";
import Reset from "./Components/Reset";
import CustomIncrement from "./Components/CustomIncrement";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomIncrement setCount={setCount}/>
      <Count number={count}/>
      <Increment number={count} up={setCount}/>
      <Decrement number={count} down={setCount}/>
      <Reset reset={setCount}/>
    </div>
    // <div>
    //   <h1>{count}</h1>
    //   <button onClick={() => setCount(count + 1)}>Artır</button>
    //   <button onClick={() => setCount(count - 1)}>Azalt</button>
    //   <button onClick={() => setCount(0)}>Sıfırla</button>
    // </div>
  );
};
export default App;
