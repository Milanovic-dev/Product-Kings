const { useState } = require("react");

import dynamic from 'next/dynamic';
const Editor = dynamic(import('react-simple-code-editor'), {ssr: false});

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import { Button } from '@shopify/polaris';

const CustomJS = () => {
  const [code, setCode] = useState('// Write your custom logic here.');
 
  return (
    <div>
      Editor
      <Editor 
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.js, 'javascript')}
        padding={10}
        tabSize={4}
        spellCheck={true}
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

const execute = (customJS) => {
  if(customJS){
    try{
      eval(customJS)
    }catch(e){
      console.error('Custom JS code is causing errors. Heres the error: \n' + e);
    }
  }
}

export default CustomJS;