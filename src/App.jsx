import React, { useEffect } from 'react';
import { bodyHTML } from './markup.js';
import { init } from './interactions.js';
import './styles.css';

export default function App() {
  useEffect(() => { init(); }, []);
  return <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />;
}
