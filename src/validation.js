import moment from 'moment'

// Validation highlighting for react-bootstrap Input components
export function validationState(field) {
  console.log('validationState field', field)
  if (!field || !field.touched || field.active) return null
  if (field.error) return 'error'
  if (field.dirty) return 'success'
}

// Validation highlighting for other input components
export function validationStyle(field) {
  console.log('validationStyle field', field)
  if (!field || !field.touched || field.active) return null
  if (field.error) return 'has-error'
  if (field.dirty) return 'has-success'
}

// Validation help text for react-bootstrap Input components
export function validationHelp(field) {
  if (!field) return null
  return (field.touched && !field.active && field.error) || null
}

export function validDate(current) {
  const yesterday = moment().subtract(1, 'day')
  return current.isAfter(yesterday)
}

export function allFieldsRequiredFn(fieldNames) {
  return data => {
    const errors = {}
    fieldNames.forEach(fieldName => {
      if (!data[fieldName]) errors[fieldName] = 'This field is required'
    })
    return errors
  }
}
