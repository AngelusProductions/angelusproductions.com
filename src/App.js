import logo from './logo.svg'
import './App.scss'
import homeTabs from './constants/homeTabs'

const App = () => {
  const [tabIndex, setTabIndex] = useState(1)


  return (
    <main id="appContainer">
      {homeTabs.map(tab => (
        <section id={`homeTabFor${tab.name}`} clasName='homeContainer'>
          {tab.name}
        </section>
      ))}
    </main>
  )
}

export default App
