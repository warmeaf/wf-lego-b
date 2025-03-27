import type { TextComponentProps } from './defaultProps'

export interface PropToForm {
  component: string
  value?: string
  text?: string
  extralProps?: {
    [key: string]: unknown
  }
}

export type PropsToForms = {
  [key in keyof TextComponentProps]?: PropToForm
}

export const mapPropsToForms: PropsToForms = {
  text: {
    component: 'a-input',
    text: '文本',
    value: ''
  },
  fontSize: {
    component: 'a-input-number',
    text: '字号'
  },
  lineHeight: {
    component: 'a-slider',
    text: '行高',
    extralProps: {
      min: 0,
      max: 3,
      step: 0.1
    }
  }
}
