import React from 'react'
import './index.scss'

const Hide = () => {
  return (
    <div>
      <div className="hide">
        <input type="checkbox"/>
        <p className="hide-completed">Hide completed</p>
      </div>
    </div>
  )
}

export default Hide