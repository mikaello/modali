export const installation = "npm install --save modali";
export const usage = "import Modali, { useModali } from 'modali';";
export const basicExample =
  "import React from 'react';\n" +
  "import Modali, { useModali } from 'modali';\n" +
  "\n" +
  "const App = () => {\n" +
  "  const [exampleModal, toggleExampleModal] = useModali();\n" +
  "\n" +
  "  return (\n" +
  '    <div className="app">\n' +
  "      <button onClick={toggleExampleModal}>\n" +
  "        Click me to open a basic modal\n" +
  "      </button>\n" +
  "      <Modali.Modal {...exampleModal}>\n" +
  "        Hi, I'm a Modali!\n" +
  "      </Modali.Modal>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "export default App;";

export const completeExampleSnippet =
  "import React from 'react';\n" +
  "import Modali, { useModali } from 'modali';\n" +
  "\n" +
  "const [completeModal, toggleCompleteModal] = useModali({\n" +
  "  animated: true,\n" +
  "  title: 'Are you sure?',\n" +
  "  message: 'Deleting this user will be permanent.',\n" +
  "  buttons: [\n" +
  "    <Modali.Button\n" +
  '      label="Cancel"\n' +
  "      isStyleCancel\n" +
  "      onClick={() => toggleCompleteModal()}\n" +
  "    />,\n" +
  "    <Modali.Button\n" +
  '      label="Delete"\n' +
  "      isStyleDestructive\n" +
  "      onClick={() => deleteUserWithId(123)}\n" +
  "    />,\n" +
  "  ],\n" +
  "});";

export const multiple =
  "import React from 'react';\n" +
  "import Modali, { useModali } from 'modali';\n" +
  "\n" +
  "const App = () => {\n" +
  "  const [firstModal, toggleFirstModal] = useModali();\n" +
  "  const [secondModal, toggleSecondModal] = useModali();\n" +
  "  \n" +
  "  return (\n" +
  '    <div className="app">\n' +
  "      <button onClick={toggleFirstModal}>\n" +
  "        Click me to open the first modal!\n" +
  "      </button>\n" +
  "      <button onClick={toggleSecondModal}>\n" +
  "        Click me to open the second modal!\n" +
  "      </button>\n" +
  "      <Modali.Modal {...firstModal}>\n" +
  "        Hi, I'm the first Modali\n" +
  "      </Modali.Modal>\n" +
  "      <Modali.Modal {...secondModal}>\n" +
  "        And I'm the second Modali\n" +
  "      </Modali.Modal>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "export default App;";

export const options =
  "const [exampleModal, toggleExampleModal] = useModali({\n" +
  "  animated: true,\n" +
  "  large: true,\n" +
  "  closeButton: false,\n" +
  "  onHide: () => alert(`I'm hidden`),\n" +
  "});";
