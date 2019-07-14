import React from 'react'

import Form from "./Form"
import Preview from "./Preview"

import { admin } from "../locales/copy"

export default () => (
  <div>
    <div className="left">
      <h3>{admin.title}</h3>
      <strong>{admin.subTitle}</strong>
      <Form />
    </div>
    <div className="right">
      <Preview />
    </div>
  </div>
)
