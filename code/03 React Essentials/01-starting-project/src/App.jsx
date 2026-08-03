// ==========================================
// 1. LES IMPORTS (Charger les dépendances)
// ==========================================

// En React/Vite, on importe les images comme des variables JavaScript.
// Cela permet à l'outil de build d'optimiser le chemin d'accès de l'image.
import reactImg from "./assets/react-core-concepts.png";

// Import nommé avec des accolades { } : on récupère la donnée exportée depuis data.js
import { CORE_CONCEPTS } from "./data.js";

// ==========================================
// 2. DONNÉES ET FONCTIONS UTILITAIRES (Hors React)
// ==========================================

// Un tableau simple contenant des adjectifs
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

/**
 * Fonction JavaScript pure (sans React).
 * Génère un nombre entier aléatoire entre 0 et `max` (inclus).
 * @param {number} max 
 */
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// ==========================================
// 3. COMPOSANT : Header
// ==========================================

/**
 * Un composant React est simplement une fonction JS qui retourne du code JSX (du HTML dynamic).
 * Règle importante : Son nom DOIT toujours commencer par une MAJUSCULE.
 */
function Header() {
  // Sélectionne un mot au hasard dans le tableau 'reactDescriptions' (index 0, 1 ou 2)
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* 
        Dans le JSX, les accolades { } permettent d'injecter des variables ou expressions JS.
        Ici, 'src={reactImg}' utilise la variable importée au début du fichier.
      */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* Affichage dynamique du mot tiré au sort */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// ==========================================
// 4. COMPOSANT : CoreConcept (Les Props)
// ==========================================

/* 
  --- NOTE PÉDAGOGIQUE SUR LES PROPS ---
  Les "props" (propriétés) sont les arguments qu'on passe à un composant pour le rendre configurable et réutilisable.

  Version classique (sans destructuring) :
  
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
 * Version moderne avec le DESTRUCTURING :
 * Au lieu de recevoir un gros objet `props` puis d'écrire `props.title`, `props.image`, etc.,
 * on "déballe" directement les clés de l'objet dans la liste des paramètres : { image, title, description }.
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
// 5. COMPOSANT PRINCIPAL : App
// ==========================================

/**
 * C'est le composant racine de l'application, celui qui assemble tous les autres composants.
 */
function App() {
  return (
    <div>
      {/* On réutilise notre composant Header comme s'il s'agissait d'une balise HTML personnalisée */}
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* 
              MÉTHODE 1 : Passage de props explicite (clé par clé).
              On va chercher chaque valeur dans le 1er objet du tableau `CORE_CONCEPTS` (index 0).
            */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            {/* 
              MÉTHODE 2 : Le Spread Operator (`...`).
              Astuce JS : Si le nom de vos props (`image`, `title`, `description`) correspond EXACTEMENT 
              aux clés de votre objet, `...CORE_CONCEPTS[1]` va déballer et passer toutes les clés d'un coup !
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

// On exporte le composant App pour qu'il puisse être injecté dans la page HTML (généralement dans main.jsx ou index.js)
export default App;