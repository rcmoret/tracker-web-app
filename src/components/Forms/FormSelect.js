import React from 'react'

import { Link } from 'react-router-dom'
import HSeparator from '../shared/HSeparator'

import {
  forms as formsCopy,
  log as logCopy,
  meal as mealCopy,
  medication as medicationCopy,
  supplement as supplementCopy,
  snack as snackCopy,
} from '../../locales/copy'
import { titleize } from '../../locales/functions'

export default () => (
  <div className='bg-green padded rounded left'>
    <div className='mg-bottom one-point-2-em'>{formsCopy.formLinkTitle}</div>
    <HSeparator />
    <FormLink copy={logCopy} />
    <HSeparator />
    <FormLink copy={mealCopy} />
    <HSeparator />
    <FormLink copy={medicationCopy} />
    <HSeparator />
    <FormLink copy={supplementCopy} />
    <HSeparator />
    <FormLink copy={snackCopy} />
    <HSeparator />
  </div>
)

const FormLink = ({ copy }) => (
  <div className='mg-bottom mg-top'>
    <Link
      to={`/forms/${copy.slug}`}
    >
      <span className='point8em'>
        <i className='fas fa-plus'></i>
      </span>
      {' '}
      {titleize(copy.event)}
    </Link>
  </div>
)
