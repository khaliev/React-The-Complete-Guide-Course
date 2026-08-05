// ==========================================
// 1. IMPORTS (Loading Dependencies & Assets)
// ==========================================

// In React (with tools like Vite/Webpack), we import local images like JavaScript variables.
// This lets the bundler optimize image paths and handle browser caching automatically.
import reactImg from "./assets/react-core-concepts.png";

// Named import using curly braces { }: retrieves exported data from the data.js file.
import { CORE_CONCEPTS } from "./data.js";

// ==========================================
// 2. DATA & UTILITY FUNCTIONS (Standard JS)
// ==========================================

// A plain JavaScript array containing adjectives
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
 * A React component is simply a JS function that returns JSX (dynamic HTML-like code).
 * IMPORTANT RULE: Component names MUST always start with a CAPITAL letter!
 */
function Header() {
  // Selects a random adjective from the 'reactDescriptions' array (index 0, 1, or 2)
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* 
        In JSX, curly braces { } let you inject dynamic JavaScript expressions.
        Here, 'src={reactImg}' binds the image variable imported at the top of the file.
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

/* 
  --- PEDAGOGICAL NOTE ON PROPS ---
  "Props" (Short for properties) are custom arguments passed into a component to make it configurable and reusable.

  Traditional approach (without object destructuring):
  
  function CoreConcept(props) {
    return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    );
  }
*/

/**
 * Modern approach using DESTRUCTURING:
 * Instead of receiving a single `props` object and repeating `props.title`, `props.image`, etc.,
 * we unpack the specific keys directly in the function parameter list: { image, title, description }.
 * 
 * CRITICAL LINK: The parameter names MUST EXACTLY match the property keys coming from data.js!
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
// 5. ROOT COMPONENT: App
// ==========================================

/**
 * The main container component that composes the entire user interface.
 */
function App() {
  return (
    <div>
      {/* Reusing our custom Header component like a self-closing HTML tag */}
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* 
              METHOD 1: Explicit prop assignment (key-by-key).
              Pulling values individually from the 1st object in the `CORE_CONCEPTS` array (index 0).
            */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            {/* 
              METHOD 2: The Spread Operator (`...`).
              JavaScript Syntax Trick: If the keys in your object (image, title, description) 
              MATCH the prop names expected by the component, `{...CORE_CONCEPTS[1]}` 
              automatically unpacks and passes all properties at once!
            */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

// Exporting the App component so it can be mounted into the real DOM (usually in main.jsx)
export default App;