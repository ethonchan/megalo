import { makeMap } from 'shared/util'

export * from './class'
export * from './throttle'
export * from './aop'
export * from './buffer'

export const ROOT_DATA_VAR = 'r'
export const HOLDER_VAR = 'h'
export const FOR_TAIL_VAR = '_t'
export const VM_ID_VAR = 'c'
export const VM_ID_PREFIX = 'cp'

export const VM_ID_SEP = 'v'
export const VM_ID_SEP_REG = /v/
export const SLOT_CONTEXT_ID_VAR = 's'

export const NODE_ID_SEPS = {
  swan: '_',
  wechat: '-',
  alipay: '-'
}
export const NODE_ID_SEP_REG = /[\-|_]/

export const VARS = {
  text: 't',
  if: '_if',
  for: 'li',
  class: 'cl',
  style: 'st',
  value: 'value',
  vhtml: 'html',
  vshow: 'vs'
}

export const notEmpty = e => !!e
export const isPreTag = (tag) => tag === 'pre'

export const isReservedTag = makeMap(
  'template,script,style,element,content,slot,link,meta,svg,view,' +
  'a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,' +
  'slider,slider-neighbor,indicator,trisition,trisition-group,canvas,' +
  'list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,' +
  'video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown',
  true
)

// these are reserved for web because they are directly compiled away
// during template compilation
export const isReservedAttr = makeMap('style,class')

// Elements that you can, intentionally, leave open (and which close themselves)
// more flexable than web
export const canBeLeftOpenTag = makeMap(
  'web,spinner,switch,video,textarea,canvas,' +
  'indicator,marquee,countdown',
  true
)

export const isUnaryTag = makeMap(
  'embed,img,image,input,link,meta',
  true
)

export function mustUseProp () { /* console.log('mustUseProp') */ }
export function getTagNamespace () { /* console.log('getTagNamespace') */ }
export function isUnknownElement () { /* console.log('isUnknownElement') */ }

export const eventTypeMap = {
  tap: ['tap', 'click'],
  touchstart: ['touchstart'],
  touchmove: ['touchmove'],
  touchcancel: ['touchcancel'],
  touchend: ['touchend'],
  longtap: ['longtap'],
  input: ['input'],
  blur: ['change', 'blur'],
  submit: ['submit'],
  focus: ['focus'],
  scrolltoupper: ['scrolltoupper'],
  scrolltolower: ['scrolltolower'],
  scroll: ['scroll']
}
