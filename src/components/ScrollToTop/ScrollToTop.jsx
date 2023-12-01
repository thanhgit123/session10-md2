import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const {pathname}= useLocation();
    useEffect(()=>{
        window && window.scrollTo(0,0);
    },[pathname])
  return (
    <div>
        
        <button>cook</button>
    </div>
  )
}
