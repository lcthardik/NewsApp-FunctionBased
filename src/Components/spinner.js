import React from 'react'
import Loading from './loading.gif'


export default function spinner() {
  
    return (
      <div className="text-center my-2">
        <img src={Loading} alt="loading" />
      </div>
    )
  
}
