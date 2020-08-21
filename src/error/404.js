import React from 'react'
import {Link} from 'react-router-dom'
function NotFound() {
  return (
    <div>
      404
      <Link to="/test">test页面</Link>
    </div>
  )
}

export default NotFound;
