import React from 'react'
import TabSelector from './components/TabSelector';

const tabs = ["image audio", 'filter', 'grid', 'videos'];

function App() {
  return (
    <TabSelector tabs={tabs} defaultTab={tabs[0]} />
  )
}

export default App;