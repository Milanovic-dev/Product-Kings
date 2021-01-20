import dynamic from 'next/dynamic';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import { Button } from '@shopify/polaris';

const { useState } = require("react");

const Editor = dynamic(import('react-simple-code-editor'), {ssr: false});

const execute = (customJS) => {
  if(customJS){
    try{
      // eslint-disable-next-line no-eval
      eval(customJS)
    }catch(e){
      // eslint-disable-next-line no-console
      console.error(`Custom JS code is causing errors. Heres the error: \n${  e}`);
    }
  }
}

const CustomLogic = () => {
  const [code, setCode] = useState('// Write your custom logic here.');
 
  return (
    <div>
      Editor
      <Editor 
        value={code}
        onValueChange={newCode => setCode(newCode)}
        highlight={codeToHighlight => highlight(codeToHighlight, languages.js, 'javascript')}
        padding={10}
        tabSize={4}
        spellCheck
        style={{
          fontFamily: '"Consolas", "Fira Mono", monospace',
          fontWeight: 'bold',
          fontSize: 16,
          borderRadius: 3,
          border: "2px solid grey"
        }}
      />
      <Button primary onClick={() => execute(code)}>Execute</Button>
    </div>
  )
}

export default CustomLogic;