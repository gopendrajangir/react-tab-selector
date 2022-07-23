import React, { Dispatch, SetStateAction } from "react"

export default (glider: React.MutableRefObject<HTMLDivElement | null>, previousTab: React.MutableRefObject<HTMLButtonElement | null>, currentTab: React.RefObject<HTMLButtonElement>) => {
  if (glider.current && previousTab.current && currentTab.current) {
    glider.current.animate([
      {
        left: previousTab.current.offsetLeft - currentTab.current.offsetLeft + "px",
      }, {
        left: '0px'
      },
    ], {
      duration: 200
    });
  }
}