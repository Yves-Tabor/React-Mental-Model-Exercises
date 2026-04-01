import Counter from './Components/closureBug'
import Logger from './Components/effectDependency'
import Infinite from './Components/infiniteEffectLoop'
import Search from './Components/objectDependency'
import Cart from './Components/derivedState'
import Count from './Components/functionalUpdate'
import CountRenders from './Components/useRefRenderCount'

function App() {

  return (
    <>
      <h1>React Practical Mental Model</h1>
      {/* <Counter />
      <br />
      <br />
      <Logger />
      <br />
      <br />
      <Count />
      <br /> */}
      <br /><p>Click to count</p>
      <CountRenders />
    </>
  )
}

export default App;

