import './App.css'
import { CoreConcept } from './components/CoreConcept'
import { CORE_CONCEPTS } from './data'
import { Header } from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept {...concept} />
          ))}
        </ul>
        <CoreConcept title="New Concept" description="This is a new concept" />
      </section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos neque nemo voluptatem fugit provident repellendus assumenda eligendi aut, maxime ipsam harum voluptate, placeat alias aspernatur. Magnam eveniet architecto vel corporis.
        Quasi repellat, doloremque minus deserunt qui dolores veritatis itaque officia autem est dolore aspernatur sint quos neque sequi. Magni non fugiat voluptatibus autem voluptates cum quas corrupti reiciendis quos tempore!
        Error debitis similique commodi unde quaerat. Aut quos voluptatum pariatur delectus minima laborum, deleniti est dolor iusto accusamus nam veniam, odio alias accusantium blanditiis provident amet exercitationem veritatis unde ipsam.
        Omnis illum, labore assumenda expedita facilis ullam aliquam atque in ipsa possimus voluptates odio facere distinctio dignissimos magni asperiores ut voluptatem excepturi vero debitis repudiandae ea! Reiciendis magnam in nesciunt?
        Repudiandae, earum? Ea numquam dignissimos reprehenderit, fugit omnis alias unde adipisci doloremque accusamus, laborum a consectetur mollitia animi vero quod, iusto similique asperiores porro libero veniam dolorum deserunt nobis! A?
      </p>
    </div>
  )
}

export default App
