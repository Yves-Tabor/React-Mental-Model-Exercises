import Counter from './Components/closureBug'
import Logger from './Components/effectDependency'
import Infinite from './Components/infiniteEffectLoop'
import Search from './Components/objectDependency'

function App() {

  return (
    <>
      <h1>React Practical Mental Model</h1>
      <Counter />
      <br />
      <br />
      <Logger />
      {/* <Infinite /> */}
      <Search />
    </>
  )
}

export default App;
