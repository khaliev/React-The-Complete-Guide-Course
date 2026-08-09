// ==========================================
// COMPONENT COMPOSITION: TabButton
// ==========================================

// 'children' is a special, built-in prop in React.
// It automatically receives whatever content (text, HTML, or other components)
// you wrap INSIDE the opening and closing tags when using <TabButton>...</TabButton>.
export default function TabButton({ children }) {
  return (
    <li>
      {/* 
        The content passed between <TabButton>Content Here</TabButton> 
        will be injected right here inside the <button> tag.
      */}
      <button>{children}</button>
    </li>
  );
}

{/* 
  ==========================================
  HOW TO USE THIS COMPONENT (USAGE EXAMPLES)
  ==========================================

  Example 1: Passing simple text
  <TabButton>Components</TabButton>
  --> Renders HTML: <li><button>Components</button></li>

  Example 2: Passing nested JSX / HTML elements 
  <TabButton>
    <img src="icon.png" alt="icon" />
    <span>JSX Core</span>
  </TabButton>
  --> Renders HTML: <li><button><img ... /><span>JSX Core</span></button></li>
*/}