import { Header } from './Header/Header'
import { TabButton } from './TabButton/TabButton'

function App() {
  const handleSelect = () => {
    console.log('Tab selected')
  }
  return (
    <div className='flex flex-col items-center p-4'>
      <Header />
      <section>
        <h2>Examples</h2>
        <menu className='flex flex-row space-x-2'>
          <TabButton onSelect={handleSelect}>Tab 1</TabButton>
          <TabButton onSelect={handleSelect}>Tab 2</TabButton>
          <TabButton onSelect={handleSelect}>Tab 3</TabButton>
        </menu>
      </section>
    </div>
  )
}

export default App
