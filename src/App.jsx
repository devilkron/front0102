import RegisterForm from "./layout/RegisterForm"

function App() {

  return (
    <div data-theme="" className="min-h-screen">
    <h1 className="text-center text-pink-300 bg-sky-400 text-3xl font-bold underline">
      Hello world!
    </h1>
    <input type="checkbox" value="light" className="toggle theme-controller"/>    
    <hr />
    <RegisterForm/>
    </div>
  )
}

export default App
