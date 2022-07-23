import React, { PropsWithChildren, Dispatch, SetStateAction, useRef } from 'react'
import { useEffect } from 'react';
import slideGlider from './utils/slideGlider';

interface TabProps extends PropsWithChildren {
  index: number;
  selectedTabIdx: number;
  selectedTabRef: React.MutableRefObject<HTMLButtonElement | null>;
  previousSelectedTabRef: React.MutableRefObject<HTMLButtonElement | null>;
  setSelectedTabIdx: Dispatch<SetStateAction<number>>;
}

function Tab({ children, setSelectedTabIdx, selectedTabRef, previousSelectedTabRef, index, selectedTabIdx }: TabProps) {

  const gliderRef = useRef(null);

  useEffect(() => {
    if (selectedTabIdx === index) {
      slideGlider(gliderRef, previousSelectedTabRef, selectedTabRef);
    }
  }, [selectedTabIdx])

  return (
    <button
      ref={index === selectedTabIdx ? selectedTabRef : null}
      onClick={() => {
        previousSelectedTabRef.current = selectedTabRef.current;
        setSelectedTabIdx(index);
      }}
      className="tab"
    >
      {
        index === selectedTabIdx &&
        <div ref={gliderRef} className="tab-glider"></div>
      }
      <span>{children}</span>
    </button>
  )
}

export default Tab