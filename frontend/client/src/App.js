
// components
// header
import Header from "./components/Header"
//pages
// home
import Home from "./features/home/Home"

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Home />
    </div>
  )
}

export default App