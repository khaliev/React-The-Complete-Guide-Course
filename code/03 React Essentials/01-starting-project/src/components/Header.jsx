// Import local image assets. The bundler (Vite/Webpack) handles the path resolution.
import reactImg from "../assets/react-core-concepts.png";

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
// COMPONENT: Header
// ==========================================

/**
 * A React component is simply a JS function that returns JSX.
 * IMPORTANT RULE: Component names MUST always start with a CAPITAL letter!
 */
export default function Header() {
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