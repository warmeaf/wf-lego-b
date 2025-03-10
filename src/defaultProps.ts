import { mapValues, without } from 'lodash-es'
interface DefaultPropsType {
  [key: string]: {
    props: object
    extraProps?: { [key: string]: any }
  }
}

// 根据需求方案，将通用属性抽离出来
export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: 1,
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
}
// 这些是文本的特有属性
export const textDefaultProps = {
  // basic props - font styles
  text: '',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'center',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
  width: '318px'
}

export const imageDefaultProps = {
  imageSrc: '',
  ...commonDefaultProps
}
// this contains all default props for all the components
// useful for inserting new component into the store
export const componentsDefaultProps: DefaultPropsType = {
  'l-text': {
    props: {
      // text: '正文内容',
      ...textDefaultProps,
      fontSize: '14px',
      width: '125px',
      height: '36px',
      left: 320 / 2 - 125 / 2 + 'px',
      top: 500 / 2 - 36 / 2 + 'px'
    }
  },
  'l-image': {
    props: {
      ...imageDefaultProps
    }
  },
  'l-shape': {
    props: {
      backgroundColor: '',
      ...commonDefaultProps
    }
  }
}

// l-text样式名称
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)

/**
 * 将普通的 props 对象转换为 Vue 组件 props 配置对象
 * @param props - 原始的 props 对象
 * @returns 返回符合 Vue props 选项格式的对象，包含 type 和 default 属性
 * @example
 * // 输入:
 * const props = { text: 'hello' }
 * // 输出:
 * {
 *   text: {
 *     type: String,
 *     default: 'hello'
 *   }
 * }
 */
export const transformToComponentProps = <T extends { [key: string]: any }>(
  props: T
) => {
  return mapValues(props, (item) => {
    return {
      type: item.constructor,
      default: item
    }
  })
}
export default componentsDefaultProps
