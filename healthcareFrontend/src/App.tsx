import HeaderAdmin from './components/header/HeaderAdmin'
import Landignpage from './components/landigpage/Landignpage'

function App() {
  return (
    <div className="">
      <HeaderAdmin role="public" />
      <Landignpage />
      {/* <HeaderAdmin role="doctor" />
      <HeaderAdmin role="patient" /> */}
    </div>
  )
}

export default App
