import React, { useState, useEffect, useRef } from 'react'
import Tab from './Tab';

const tabs = ['filter', 'grid', 'videos'];

function App() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const selectedTabRef = useRef(null);
  const previousSelectedTabRef = useRef(null);

  return (
    <div className="container">
      {
        tabs.map((tabName, i) => {
          return (
            // <>
            //   {
            //     selectedTabIdx === i
            //       ?
            //       <Tab
            //         key={tabName}
            //         previousSelectedTabRef={previousSelectedTabRef}
            //         selectedTabRef={selectedTabRef}
            //         selected={selectedTabIdx === i ? true : false}
            //         index={i}
            //         selectedTabIdx={selectedTabIdx}
            //       >
            //         {tabName}
            //       </Tab>
            //       :
            //       <Tab
            //         key={tabName}
            //         previousSelectedTabRef={previousSelectedTabRef}
            //         selectedTabRef={selectedTabRef}
            //         selected={selectedTabIdx === i ? true : false}
            //         selectedTabIdx={selectedTabIdx}
            //         index={i}
            //         selectTab={setSelectedTabIdx}
            //       >
            //         {tabName}
            //       </Tab>
            //   }
            // </>
            <Tab
              key={tabName}
              selectedTabRef={selectedTabRef}
              previousSelectedTabRef={previousSelectedTabRef}
              selectedTabIdx={selectedTabIdx}
              setSelectedTabIdx={setSelectedTabIdx}
              index={i}
            >
              {tabName}
            </Tab>
          )
        })
      }
    </div>
  )
}

export default App;