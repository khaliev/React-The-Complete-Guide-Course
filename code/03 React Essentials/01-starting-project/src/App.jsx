// ==========================================
// IMPORTS (Loading Dependencies & Assets)
// ==========================================
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
// Import the data array from the external file.
import { CORE_CONCEPTS } from "./data.js";



// ==========================================
// ROOT COMPONENT: App (All Approaches Combined)
// ==========================================

/**
 * The main container component.
 * This demonstrates three different ways to render the list of concepts.
 */
function App() {
  return (
    <div>
      {/* Reusing our custom Header component */}
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          
          <ul>
            {/* 
              ==========================================
              APPROACH 1: EXPLICIT MANUAL RENDERING
              ==========================================
              You manually write the component tag for every single item.
              Good for very small, fixed lists (e.g., 1-3 items), but tedious for long lists.
            */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              key={0} 
            />

            {/* 
              ==========================================
              APPROACH 2: THE SPREAD OPERATOR (...)
              ==========================================
              JavaScript Syntax Trick:
              If the keys in your object (image, title, description) MATCH the prop names
              expected by the component, `{...CORE_CONCEPTS[1]}` automatically unpacks 
              and passes all properties at once!
              OK for basic tutorials, but avoid in real projects it can make the code less readable and harder to maintain.
            */}
            <CoreConcept {...CORE_CONCEPTS[3]}/>

{/* 
  ==========================================
  APPROACH 3: THE .map() METHOD (⭐️BEST PRACTICE⭐️)
  ==========================================
  The industry standard for rendering lists.
  1. Iterates through the array automatically.
  2. Returns a JSX element for each item.
  3. Requires a unique 'key' prop so React can efficiently track list updates.
  
  PRO-TIP ON KEYS:
  Always prefer unique data properties (like concept.title or concept.id) over array 'index'.
  Using 'index' as a key can cause visual bugs if the list items are reordered, filtered, or deleted.

  In human language :
  "Take my CORE_CONCEPTS array, map through every concept, give it a unique key
  (here (concept.title, because title is unique, it's like a "badge number"),
  spread its data {...concept}, and render a <CoreConcept/> for each one!
*/}
{CORE_CONCEPTS.map((concept) => (
  <CoreConcept key={concept.title} {...concept}/>
))}
          </ul>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

// Export the App component so it can be mounted into the real DOM
export default App;


{/* ANOTHER EXERCICE: rendering a list of skills using the same .MAP() approach as above
  
  
  
  const SKILLS = [
  {
    id: "s1",
    name: "HTML & CSS",
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: "s2",
    name: "JavaScript",
    level: "Intermediate",
    category: "Language"
  },
  {
    id: "s3",
    name: "React",
    level: "Learning",
    category: "Frontend"
  }
];

  // 1. Added curly braces { } for destructuring props
export function SkillCard({ name, level, category }) {
  return (
    <li>
      <h3>Name: {name}</h3>
      <p>Level: {level}</p>
      <p>Category: {category}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app">
      <h1>Developer Profile</h1>
      <h2>Skills & Technologies</h2>
      <ul>
        // 2. Fixed JSX component syntax and spread operator {...skill}
        {SKILLS.map((skill) => (
          <SkillCard key="{skill.id}" {...skill}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
  
  */}