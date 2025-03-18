import { useState } from 'react'
import { Header } from './Header/Header'
import { TabButton } from './TabButton/TabButton'
import { EXAMPLES } from 'data/data'

function App() {

  const [selectedTab, setSelectedTab] = useState<ITab>();

  const handleSelect = (selectedButton: ITab) => {
    setSelectedTab({title: selectedButton.title , description: selectedButton.description, code: selectedButton.code })
  }

  return (
    <div className='flex flex-col items-center p-4'>
      <Header />
      <section>
        <h2>Examples</h2>
        <menu className='flex flex-row space-x-2'>
          {
            Object.entries(EXAMPLES).map(([key, value]) => (
              <TabButton isSelected={ selectedTab?.title === value.title } key={key} onSelect={() => handleSelect(value)}>{key}</TabButton>
            ))
          }
        </menu>
      </section>
      <div id="tab-contest" className='w-3/4 border p-4'>
        {selectedTab ? (
          <>
            <h3 className='text-2xl'>{selectedTab.title}</h3>
            <p>
              {selectedTab.description}
            </p>
            <pre>
              <code>
                {selectedTab.code}
              </code>
            </pre>
          </>
        ) : (
          <p>Please select a tab to see the content.</p>
        )}
      </div>
    </div>
  )
}

export default App
