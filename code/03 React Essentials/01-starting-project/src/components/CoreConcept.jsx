// ==========================================
// COMPONENT: CoreConcept (Handling Props)
// ==========================================

/**
 * Modern approach using DESTRUCTURING:
 * Instead of receiving a single `props` object, we unpack the specific keys
 * directly in the function parameter list: { image, title, description }.
 * 
 * CRITICAL LINK: The parameter names MUST EXACTLY match the property keys coming from data!
 */


export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}