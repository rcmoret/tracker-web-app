import React from 'react'

import Form from "./Form"
import Preview from "./Preview"

export default () => (
  <div>
    <div className="left">
      <h3>Admin Panel</h3>
      <strong>Add Content</strong>
      <Form />
    </div>
    <div className="right">
      <Preview />
    </div>
  </div>
)
