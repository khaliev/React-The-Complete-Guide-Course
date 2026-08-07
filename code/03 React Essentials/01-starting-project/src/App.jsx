// ==========================================
// 1. IMPORTS (Loading Dependencies & Assets)
// ==========================================

// Import local image assets. The bundler (Vite/Webpack) handles the path resolution.
import reactImg from "./assets/react-core-concepts.png";

// Import the data array from the external file.
import { CORE_CONCEPTS } from "./data.js";

// ==========================================
// 2. DATA & UTILITY FUNCTIONS (Standard JS)
// ==========================================

// A plain JavaScript array of adjectives for the header.
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

/**
 * Pure JavaScript utility function (non-React).
 * Generates a random integer between 0 and `max` (inclusive).
 * @param {number} max 
 */
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// ==========================================
// 3. COMPONENT: Header
// ==========================================

/**
 * A React component is simply a JS function that returns JSX.
 * IMPORTANT RULE: Component names MUST always start with a CAPITAL letter!
 */
function Header() {
  // Selects a random adjective from the 'reactDescriptions' array
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* 
        In JSX, curly braces { } let you inject dynamic JavaScript expressions.
        Here, 'src={reactImg}' binds the image variable imported at the top.
      */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* Dynamic rendering of the randomly selected adjective */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// ==========================================
// 4. COMPONENT: CoreConcept (Handling Props)
// ==========================================

/**
 * Modern approach using DESTRUCTURING:
 * Instead of receiving a single `props` object, we unpack the specific keys
 * directly in the function parameter list: { image, title, description }.
 * 
 * CRITICAL LINK: The parameter names MUST EXACTLY match the property keys coming from data!
 */
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// ==========================================
// 5. ROOT COMPONENT: App (All Approaches Combined)
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
            */}
            <CoreConcept {...CORE_CONCEPTS[1]} key={1} />

            {/* 
              ==========================================
              APPROACH 3: THE .map() METHOD (BEST PRACTICE)
              ==========================================
              The industry standard for rendering lists.
              1. Iterates through the array automatically.
              2. Returns a JSX element for each item.
              3. Requires a unique 'key' prop for React's rendering engine.
            */}
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept
                key={concept.id || index} 
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
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