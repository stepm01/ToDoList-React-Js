import React from 'react'
import './index.scss'

const DeleteConf = () => {
  return (
    <div className='wrapper'>
      <div className="delete">
        <div className="delete-title">
          <p>Are you sure you want to delete?</p>
        </div>
        <div className="delete-btns">
          <button className="delete-btns-yes">Yes</button>  
          <button className="delete-btns-no">No</button>  
        </div>
      </div>
    </div>
  )
}

export default DeleteConf