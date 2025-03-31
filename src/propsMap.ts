import type { TextComponentProps } from './defaultProps'

export interface PropToForm {
  component: string
  subComponent?: string
  value?: string
  text?: string
  extralProps?: {
    [key: string]: unknown
  }
  options?: {
    text: string
    value: unknown
  }[]
  initalTransform?: (value: unknown) => unknown
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
    text: '字号',
    initalTransform: (value) => parseInt(value as string)
  },
  lineHeight: {
    component: 'a-slider',
    text: '行高',
    extralProps: {
      min: 0,
      max: 3,
      step: 0.1
    },
    initalTransform: (value) => parseFloat(value as string)
  },
  textAlign: {
    component: 'a-radio-group',
    subComponent: 'a-radio-button',
    text: '对齐',
    value: 'left',
    options: [
      {
        text: '左',
        value: 'left'
      },
      {
        text: '中',
        value: 'center'
      },
      {
        text: '右',
        value: 'right'
      }
    ]
  },
  fontFamily: {
    component: 'a-select',
    subComponent: 'a-select-option',
    value: '',
    text: '字体',
    options: [
      {
        text: '无',
        value: ''
      },
      {
        text: '宋体',
        value: '"SimSun", "STSong"'
      },
      {
        text: '楷体',
        value: '"KaiTi", "STKaiti"'
      }
    ]
  }
}
