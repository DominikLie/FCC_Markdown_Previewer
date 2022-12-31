marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

function App() {
  const initialText = `# Welcome to my Markdown Previewer. This is the 1st header.
  ## This is the second level header.
  ### This is the 3rd level.
  This is some **code**, \`<div></div>\`, ~~between~~ 2 backticks.
  An here is a multiline function:
  \`\`\`
  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Previewer</h1>
  \`\`\` 
  Here is a link to FreeCodeCamp [link](https://www.freecodecamp.org)
  And also block quotes are working:
  > Block Quote!

  Here is an unordered list:
  - Bullet point
    - With different levels.

  And also an ordered list:
  1. First Point
  1. Second Point

  And finally find here the FCC Logo:
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
                        `

  const [text, setText] = React.useState(initialText);

  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  )
}
function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));