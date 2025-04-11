'use client'

import React from 'react'
import { useState } from 'react'

function header() {

    const [isActive, setIsActive] = useState(false);
    
    return (
    <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
      <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
    </div>
  )
}

export default header
