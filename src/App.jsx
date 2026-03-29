import Counter from './Components/closureBug'
import Logger from './Components/effectDependency'
import Infinite from './Components/infiniteEffectLoop'
import Search from './Components/objectDependency'
import Cart from './Components/derivedState'

function App() {

  return (
    <>
      <h1>React Practical Mental Model</h1>
      <Counter />
      <br />
      <br />
      <Logger />
      {/* <Infinite /> */}
      {/* <Search />
      <Cart /> */}
    </>
  )
}

export default App;
