import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'className-enter': {
    background: '#f00',
    transition: 'all 0.5s',
    transform: 'translateX(-120%)',
    maxHeight: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }]
  },
  'className-enterclassName-enter-active': {
    background: '#ff0',
    maxWidth: [{ unit: 'px', value: 60 }],
    padding: [{ unit: 'rem', value: 2 }, { unit: 'px', value: 0 }, { unit: 'string', value: '!important' }, { unit: 'px', value: 0 }],
    transform: 'translateX(0)'
  },
  'className-leave': {
    transition: 'all 0.5s',
    transform: 'translateX(0)'
  },
  'className-leaveclassName-leave-active': {
    transform: 'translateX(-120%)',
    maxHeight: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'otherClassName-enter': {
    transition: 'all 0.25s',
    transform: 'translateY(100%)'
  },
  'otherClassName-enterotherClassNameer-enter-active': {
    transform: 'translateY(0)'
  },
  'otherClassName-leave': {
    transition: 'all 0.25s',
    position: 'absolute',
    left: [{ unit: 'px', value: 0 }],
    bottom: [{ unit: 'px', value: 0 }],
    transform: 'translateY(0)'
  },
  'otherClassName-leaveotherClassName-leave-active': {
    transform: 'translateY(-100%)'
  },
  import: 'url("https://fonts.googleapis.com/css?family=Roboto+Condensed")',
  'flex-container': {
    display: '-ms-flexbox',
    display: 'flex',
    MsFlexDirection: 'column',
    flexDirection: 'column'
  },
  'flex-container input': {
    border: [{ unit: 'px', value: 0 }],
    borderRadius: '10px',
    padding: [{ unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }]
  },
  'flex-container select': {
    marginTop: [{ unit: 'em', value: 1 }],
    MsFlex: '1',
    flex: '1',
    MsFlexDirection: 'column',
    flexDirection: 'column',
    MsFlexFlow: 'wrap',
    flexFlow: 'wrap',
    MsFlexAlign: 'stretch',
    MsGridRowAlign: 'stretch',
    alignItems: 'stretch'
  },
  'flex-container button': {
    marginTop: [{ unit: 'em', value: 1 }],
    MsFlex: '1',
    flex: '1',
    MsFlexDirection: 'column',
    flexDirection: 'column',
    MsFlexFlow: 'wrap',
    flexFlow: 'wrap',
    MsFlexAlign: 'stretch',
    MsGridRowAlign: 'stretch',
    alignItems: 'stretch'
  },
  'flex-container input[type=checkbox]css-checkbox': {
    position: 'absolute',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    height: [{ unit: 'px', value: 1 }],
    width: [{ unit: 'px', value: 1 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    border: [{ unit: 'px', value: 0 }]
  },
  'flex-container input[type=checkbox]css-checkbox + labelcss-label': {
    MsFlexAlign: 'start',
    MsGridRowAlign: 'flex-start',
    alignItems: 'flex-start',
    marginTop: [{ unit: 'em', value: 1 }],
    paddingLeft: [{ unit: 'px', value: 35 }],
    height: [{ unit: 'px', value: 30 }],
    display: 'inline-block',
    lineHeight: [{ unit: 'px', value: 30 }],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    fontSize: [{ unit: 'px', value: 20 }],
    verticalAlign: 'middle',
    cursor: 'pointer'
  },
  'flex-container input[type=checkbox]css-checkbox:checked + labelcss-label': {
    backgroundPosition: '0 -30px'
  },
  'flex-container labelcss-label': {
    backgroundImage: 'url("/images/checkbox.png")',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    textAlign: 'left'
  },
  'flex-container labelcss-label select': {
    position: 'relative',
    display: '-ms-flexbox',
    display: 'flex',
    width: [{ unit: '%H', value: 1 }],
    maxWidth: [{ unit: 'px', value: 325 }],
    verticalAlign: 'middle',
    textAlign: 'left',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    WebkitTouchCallout: 'none'
  },
  'flex-container labelcss-label select placeholder': {
    position: 'relative',
    display: 'block',
    backgroundColor: '#393d41',
    zIndex: '1',
    padding: [{ unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }],
    borderRadius: '2px',
    cursor: 'pointer'
  },
  'flex-container labelcss-label select placeholder:hover': {
    background: '#383c40'
  },
  'flex-container labelcss-label select placeholder:after': {
    position: 'absolute',
    right: [{ unit: 'em', value: 1 }],
    top: [{ unit: '%V', value: 0.5 }],
    transform: 'translateY(-50%)',
    fontFamily: ''FontAwesome'',
    content: ''\f078'',
    zIndex: '10'
  },
  'flex-container labelcss-label selectis-open placeholder:after': {
    content: ''\f077''
  },
  'flex-container labelcss-label selectis-open ul': {
    display: 'block'
  },
  'flex-container labelcss-label selectselect--white placeholder': {
    background: '#fff',
    color: '#999'
  },
  'flex-container labelcss-label selectselect--white placeholder:hover': {
    background: '#fafafa'
  },
  'flex-container labelcss-label select ul': {
    display: 'none',
    position: 'absolute',
    overflow: 'hidden',
    overflowY: 'auto',
    width: [{ unit: '%H', value: 1 }],
    background: '#fff',
    borderRadius: '2px',
    top: [{ unit: '%V', value: 1 }],
    left: [{ unit: 'px', value: 0 }],
    listStyle: 'none',
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    zIndex: '100',
    maxHeight: [{ unit: 'px', value: 120 }]
  },
  'flex-container labelcss-label select ul li': {
    display: 'block',
    textAlign: 'left',
    padding: [{ unit: 'em', value: 0.8 }, { unit: 'em', value: 1 }, { unit: 'em', value: 0.8 }, { unit: 'em', value: 1 }],
    color: '#999',
    cursor: 'pointer'
  },
  'flex-container labelcss-label select ul li:hover': {
    background: '#4ebbf0',
    color: '#fff'
  },
  'flex-container select': {
    marginTop: [{ unit: 'em', value: 2 }],
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: [{ unit: 'px', value: 330 }],
    height: [{ unit: '%V', value: 1 }],
    borderBottom: [{ unit: 'px', value: 0 }],
    borderRadius: '3px',
    fontSize: [{ unit: 'em', value: 1 }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'em', value: 1 }, { unit: 'em', value: 2 }, { unit: 'em', value: -1.5 }, { unit: 'string', value: 'rgba(0,0,0,0.5)' }]
  },
  'flex-container select >itoggle': {
    position: 'absolute',
    zIndex: '4',
    right: [{ unit: 'em', value: 1.5 }],
    top: [{ unit: 'em', value: 1.6 }],
    color: '#ccc'
  },
  'flex-container select title': {
    position: 'relative',
    color: '#ccc',
    display: 'block',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    padding: [{ unit: 'em', value: 1.5 }, { unit: 'em', value: 2 }, { unit: 'em', value: 1.5 }, { unit: 'em', value: 2 }],
    background: '#fff',
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(0,0,0,0.05)' }],
    cursor: 'pointer'
  },
  'flex-container select placeholder': {
    position: 'relative',
    color: '#ccc',
    display: 'block',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    padding: [{ unit: 'em', value: 1.5 }, { unit: 'em', value: 2 }, { unit: 'em', value: 1.5 }, { unit: 'em', value: 2 }],
    background: '#fff',
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'rgba(0,0,0,0.05)' }],
    cursor: 'pointer'
  },
  'flex-container select>input': {
    position: 'absolute',
    left: [{ unit: 'px', value: 0 }],
    top: [{ unit: 'px', value: 0 }],
    zIndex: '1',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    display: 'block',
    opacity: '0',
    cursor: 'pointer'
  },
  'flex-container select>input:checked ~itoggleicon-arrow-down': {
    display: 'none'
  },
  'flex-container select>input:checked ~itoggleicon-arrow-up': {
    display: 'block'
  },
  'flex-container select>input:checked divoptions labeloption title': {
    display: 'none !important'
  },
  'flex-container select>input:not(:checked)': {
    zIndex: '4'
  },
  'flex-container select>input:not(:checked) ~labeloption >spantitle': {
    display: 'none'
  },
  'flex-container select>input:not(:checked) ~itoggleicon-arrow-up': {
    display: 'none'
  },
  'flex-container select>input:not(:checked) ~itoggleicon-arrow-down': {
    display: 'block'
  },
  'flex-container select>input:disabled': {
    cursor: 'no-drop'
  },
  'flex-container select>spanplaceholder': {
    position: 'relative',
    zIndex: '0',
    display: 'inline-block',
    width: [{ unit: '%H', value: 1 }],
    color: '#999',
    borderTop: [{ unit: 'px', value: 0 }]
  },
  'flex-container select labeloption': {
    display: 'block',
    overflow: 'hidden',
    zIndex: '1',
    width: [{ unit: '%H', value: 1 }],
    transition: 'all 1s ease-out'
  },
  'flex-container select labeloption spantitle': {
    position: 'relative',
    zIndex: '2',
    transition: 'background 0.3s ease-out'
  },
  'flex-container select labeloption spantitle:hover': {
    boxShadow: [{ unit: 'string', value: 'inset' }, { unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0,0,0,0.1)' }]
  },
  'flex-container select labeloption input': {
    display: 'none'
  },
  'flex-container select labeloption input:checked~spantitle': {
    position: 'absolute',
    display: 'block',
    zIndex: '3',
    top: [{ unit: 'px', value: 0 }],
    fontSize: [{ unit: 'em', value: 1 }],
    background: '#fff',
    borderTop: [{ unit: 'px', value: 0 }],
    boxShadow: [{ unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }, { unit: 'string', value: 'none' }],
    width: [{ unit: '%H', value: 1 }]
  },
  'flex-container select labeloption input:disabled~spantitle': {
    background: '#f9f9f9 !important',
    color: '#aaa'
  },
  'flex-container select labeloption input:disabled~spantitle:hover': {
    color: '#aaa',
    background: 'none',
    cursor: 'no-drop'
  },
  'flex-container bill-forms': {
    display: '-ms-inline-flexbox',
    display: 'inline-flex',
    MsFlexDirection: 'row',
    flexDirection: 'row',
    MsFlexPack: 'distribute',
    justifyContent: 'space-around',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'flex-container bill-forms li': {
    fontSize: [{ unit: 'em', value: 1.5 }],
    width: [{ unit: '%H', value: 0.47 }],
    listStyle: 'none'
  },
  'flex-container bill-forms li input': {
    fontSize: [{ unit: 'em', value: 0.8 }],
    width: [{ unit: '%H', value: 0.8 }]
  },
  'flex-container #billTotal': {
    marginLeft: [{ unit: 'em', value: 0.2 }]
  },
  'flex-container #billTip': {
    marginRight: [{ unit: 'em', value: 0.2 }]
  },
  'flex-container #totalPlusTipsactive': {
    MsFlex: '1',
    flex: '1',
    background: '#036',
    lineHeight: [{ unit: 'em', value: 1 }],
    fontSize: [{ unit: 'em', value: 1.2 }],
    fontWeight: 'bold',
    marginTop: [{ unit: 'em', value: 1 }]
  },
  'flex-container #totalPlusTips div': {
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    paddingTop: [{ unit: 'em', value: 0.2 }],
    fontSize: [{ unit: 'em', value: 1.4 }],
    marginBottom: [{ unit: 'em', value: 0.2 }],
    listStyle: 'none',
    color: '#ffd700'
  },
  'flex-container div#totalToPayEach': {
    fontSize: [{ unit: 'em', value: 1.4 }],
    lineHeight: [{ unit: 'em', value: 1.2 }]
  },
  'flex-container div#totalToPay': {
    fontSize: [{ unit: 'em', value: 1.6 }],
    lineHeight: [{ unit: 'em', value: 1.2 }]
  },
  'flex-container people li': {
    width: [{ unit: '%H', value: 1 }]
  },
  'flex-container people li label': {
    margin: [{ unit: 'em', value: 1 }, { unit: 'px', value: 0 }, { unit: 'em', value: 0.5 }, { unit: 'px', value: 0 }],
    display: 'block'
  },
  'flex-container people li input': {
    display: 'block',
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    width: [{ unit: '%H', value: 0.4 }]
  },
  'flex-container #tipSubmit': {
    marginBottom: [{ unit: 'em', value: 2 }]
  },
  '#tipSubmit': {
    padding: [{ unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }],
    MsFlex: '1',
    flex: '1',
    width: [{ unit: '%H', value: 1 }],
    marginTop: [{ unit: 'em', value: 2 }],
    MsFlexItemAlign: 'start',
    alignSelf: 'flex-start',
    background: '#ffd700'
  },
  '#serviceSelect': {
    display: '-ms-flexbox',
    display: 'flex'
  },
  '#serviceSelect a': {
    padding: [{ unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }],
    textDecoration: 'none',
    color: '#505153',
    MsFlex: '1',
    flex: '1',
    margin: [{ unit: 'em', value: 0.2 }, { unit: 'em', value: 0.2 }, { unit: 'em', value: 0.2 }, { unit: 'em', value: 0.2 }],
    marginBottom: [{ unit: 'em', value: 2 }],
    MsFlexItemAlign: 'start',
    alignSelf: 'flex-start',
    background: '#ffd700',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffd700' }]
  },
  '#serviceSelect aactive': {
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }],
    fontWeight: 'bold'
  },
  article: {
    display: 'block'
  },
  aside: {
    display: 'block'
  },
  details: {
    display: 'block'
  },
  figcaption: {
    display: 'block'
  },
  figure: {
    display: 'block'
  },
  footer: {
    display: 'block'
  },
  header: {
    display: 'block'
  },
  hgroup: {
    display: 'block'
  },
  nav: {
    display: 'block'
  },
  section: {
    display: 'block'
  },
  summary: {
    display: 'block'
  },
  audio: {
    display: 'inline-block'
  },
  canvas: {
    display: 'inline-block'
  },
  video: {
    display: 'inline-block'
  },
  'audio:not([controls])': {
    display: 'none',
    height: [{ unit: 'px', value: 0 }]
  },
  '[hidden]': {
    display: 'none'
  },
  html: {
    fontFamily: 'sans-serif',
    WebkitTextSizeAdjust: '100%',
    MsTextSizeAdjust: '100%'
  },
  'a:focus': {
    outline: 'thin dotted'
  },
  'a:active': {
    outline: '0'
  },
  'a:hover': {
    outline: '0'
  },
  h1: {
    fontSize: [{ unit: 'em', value: 2 }]
  },
  'abbr[title]': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'dotted' }]
  },
  'b': {
    fontWeight: '700'
  },
  strong: {
    fontWeight: '700'
  },
  dfn: {
    fontStyle: 'italic'
  },
  mark: {
    background: '#ff0',
    color: '#000'
  },
  code: {
    fontFamily: 'monospace, serif',
    fontSize: [{ unit: 'em', value: 1 }]
  },
  kbd: {
    fontFamily: 'monospace, serif',
    fontSize: [{ unit: 'em', value: 1 }]
  },
  pre: {
    fontFamily: 'monospace, serif',
    fontSize: [{ unit: 'em', value: 1 }]
  },
  samp: {
    fontFamily: 'monospace, serif',
    fontSize: [{ unit: 'em', value: 1 }]
  },
  pre: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  'q': {
    quotes: '2 1C 2 1D 2 18 2 19'
  },
  small: {
    fontSize: [{ unit: '%V', value: 0.8 }]
  },
  sub: {
    fontSize: [{ unit: '%V', value: 0.75 }],
    lineHeight: [{ unit: 'px', value: 0 }],
    position: 'relative',
    verticalAlign: 'baseline'
  },
  sup: {
    fontSize: [{ unit: '%V', value: 0.75 }],
    lineHeight: [{ unit: 'px', value: 0 }],
    position: 'relative',
    verticalAlign: 'baseline'
  },
  sup: {
    top: [{ unit: 'em', value: -0.5 }]
  },
  sub: {
    bottom: [{ unit: 'em', value: -0.25 }]
  },
  img: {
    border: [{ unit: 'px', value: 0 }]
  },
  'svg:not(:root)': {
    overflow: 'hidden'
  },
  fieldset: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#c0c0c0' }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 2 }, { unit: 'px', value: 0 }, { unit: 'px', value: 2 }],
    padding: [{ unit: 'em', value: 0.35 }, { unit: 'em', value: 0.625 }, { unit: 'em', value: 0.75 }, { unit: 'em', value: 0.625 }]
  },
  button: {
    fontFamily: 'inherit',
    fontSize: [{ unit: '%V', value: 1 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  input: {
    fontFamily: 'inherit',
    fontSize: [{ unit: '%V', value: 1 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  select: {
    fontFamily: 'inherit',
    fontSize: [{ unit: '%V', value: 1 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  textarea: {
    fontFamily: 'inherit',
    fontSize: [{ unit: '%V', value: 1 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  button: {
    lineHeight: [{ unit: 'string', value: 'normal' }]
  },
  input: {
    lineHeight: [{ unit: 'string', value: 'normal' }]
  },
  button: {
    WebkitAppearance: 'button',
    cursor: 'pointer'
  },
  'html input[type=button]': {
    WebkitAppearance: 'button',
    cursor: 'pointer'
  },
  'input[type=reset]': {
    WebkitAppearance: 'button',
    cursor: 'pointer'
  },
  'input[type=submit]': {
    WebkitAppearance: 'button',
    cursor: 'pointer'
  },
  'button[disabled]': {
    cursor: 'default'
  },
  'input[disabled]': {
    cursor: 'default'
  },
  'input[type=checkbox]': {
    boxSizing: 'border-box',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'input[type=radio]': {
    boxSizing: 'border-box',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'input[type=search]': {
    WebkitAppearance: 'textfield',
    boxSizing: 'content-box'
  },
  'input[type=search]::-webkit-search-cancel-button': {
    WebkitAppearance: 'none'
  },
  'input[type=search]::-webkit-search-decoration': {
    WebkitAppearance: 'none'
  },
  textarea: {
    overflow: 'auto',
    verticalAlign: 'top'
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0'
  },
  body: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  figure: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  legend: {
    border: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'button::-moz-focus-inner': {
    border: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'input::-moz-focus-inner': {
    border: [{ unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'clearfix:after': {
    visibility: 'hidden',
    display: 'block',
    fontSize: [{ unit: 'px', value: 0 }],
    content: '" "',
    clear: 'both',
    height: [{ unit: 'px', value: 0 }]
  },
  '*': {
    boxSizing: 'border-box'
  },
  html: {
    fontSize: [{ unit: '%V', value: 0.625 }]
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: ''Roboto Condensed', sans-serif',
    fontSize: [{ unit: 'rem', value: 2 }]
  },
  h1: {
    fontFamily: ''Roboto Condensed', sans-serif',
    fontWeight: 'normal',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  h2: {
    fontWeight: 'normal',
    fontFamily: ''Roboto Condensed', sans-serif'
  },
  h3: {
    fontWeight: 'normal',
    fontFamily: ''Roboto Condensed', sans-serif'
  },
  h4: {
    fontWeight: 'normal',
    fontFamily: ''Roboto Condensed', sans-serif'
  },
  h5: {
    fontWeight: 'normal',
    fontFamily: ''Roboto Condensed', sans-serif'
  },
  h6: {
    fontWeight: 'normal',
    fontFamily: ''Roboto Condensed', sans-serif'
  },
  h2: {
    marginTop: [{ unit: 'px', value: 0 }],
    marginBottom: [{ unit: 'rem', value: 2 }]
  },
  h3: {
    fontSize: [{ unit: 'rem', value: 3 }]
  },
  import: ''https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.3.2/css/simple-line-icons.min.css'',
  body: {
    background: '#369',
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    maxWidth: [{ unit: 'px', value: 400 }],
    color: '#fff'
  },
  main: {
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }],
    textAlign: 'center'
  },
  internal: {
    textAlign: 'left'
  },
  '#about': {
    background: '#fff',
    color: '#333',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  '#contact': {
    background: '#fff',
    color: '#333',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  '#about blockquote': {
    fontSize: [{ unit: 'em', value: 0.9 }],
    display: 'block',
    marginTop: [{ unit: 'em', value: 1 }],
    color: '#808080'
  },
  '#contact blockquote': {
    fontSize: [{ unit: 'em', value: 0.9 }],
    display: 'block',
    marginTop: [{ unit: 'em', value: 1 }],
    color: '#808080'
  },
  '#about h2': {
    fontSize: [{ unit: 'rem', value: 2.5 }]
  },
  '#contact h2': {
    fontSize: [{ unit: 'rem', value: 2.5 }]
  },
  '#about h2 span': {
    display: 'inline',
    color: '#a9a9a9'
  },
  '#contact h2 span': {
    display: 'inline',
    color: '#a9a9a9'
  },
  '#about span': {
    fontStyle: 'italic',
    fontWeight: 'bold',
    display: 'block',
    fontSize: [{ unit: 'em', value: 0.8 }]
  },
  '#contact span': {
    fontStyle: 'italic',
    fontWeight: 'bold',
    display: 'block',
    fontSize: [{ unit: 'em', value: 0.8 }]
  },
  '#about p': {
    fontSize: [{ unit: 'em', value: 1 }]
  },
  '#contact p': {
    fontSize: [{ unit: 'em', value: 1 }]
  },
  '#about p span': {
    fontWeight: 'normal',
    fontSize: [{ unit: 'em', value: 1.2 }],
    fontStyle: 'normal',
    display: 'inline'
  },
  '#contact p span': {
    fontWeight: 'normal',
    fontSize: [{ unit: 'em', value: 1.2 }],
    fontStyle: 'normal',
    display: 'inline'
  },
  'headermain-header h1': {
    fontSize: [{ unit: 'rem', value: 5 }]
  },
  'headermain-header h1 img': {
    width: [{ unit: '%H', value: 0.3 }]
  },
  'headermain-header h1 span': {
    marginLeft: [{ unit: 'em', value: 0.1 }],
    color: '#fff'
  },
  'headermain-header h1 a': {
    textDecoration: 'none'
  },
  'headermain-header h3': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: 'rem', value: 2 }],
    position: 'relative',
    display: 'inline-block'
  },
  'headermain-header': {
    paddingTop: [{ unit: 'em', value: 2 }],
    marginBottom: [{ unit: 'em', value: 3 }],
    position: 'relative'
  },
  'headermain-header main-header__hamburger': {
    width: [{ unit: 'em', value: 1.4 }],
    position: 'absolute',
    top: [{ unit: 'rem', value: 2 }],
    right: [{ unit: 'px', value: 0 }],
    cursor: 'pointer'
  },
  'headermain-header main-header__hamburger hamb': {
    display: 'block',
    width: [{ unit: 'em', value: 1.4 }],
    marginBottom: [{ unit: 'em', value: 0.3 }],
    borderBottom: [{ unit: 'px', value: 3 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }]
  },
  'headermain-header nav': {
    animation: 'fadein 1.5s',
    display: 'none'
  },
  'headermain-header navvisible': {
    display: 'block'
  },
  'headermain-header nav ul': {
    display: '-ms-flexbox',
    display: 'flex',
    MsFlexDirection: 'column',
    flexDirection: 'column',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 5 }, { unit: 'px', value: 0 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  'headermain-header nav ul li': {
    listStyle: 'none',
    MsFlex: '1',
    flex: '1',
    MsFlexDirection: 'column',
    flexDirection: 'column',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: 'em', value: 1.2 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#fff' }]
  },
  'headermain-header nav ul a': {
    textDecoration: 'none',
    color: '#fff',
    width: [{ unit: '%H', value: 1 }],
    display: 'block',
    padding: [{ unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }, { unit: 'em', value: 1 }]
  },
  'flex-container': {
    display: '-ms-flexbox',
    display: 'flex',
    MsFlexDirection: 'column',
    flexDirection: 'column'
  },
  '#tipResult li': {
    width: [{ unit: '%H', value: 0.9 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    textAlign: 'left',
    lineHeight: [{ unit: 'em', value: 1.3 }]
  },
  '#pastTipsResult section': {
    background: '#fff',
    color: '#333',
    lineHeight: [{ unit: 'em', value: 0 }],
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    marginBottom: [{ unit: 'rem', value: 1 }]
  },
  '#pastTipsResult section h3': {
    fontSize: [{ unit: 'rem', value: 2.2 }],
    lineHeight: [{ unit: 'rem', value: 1.6 }]
  },
  '#pastTipsResult section li': {
    lineHeight: [{ unit: 'rem', value: 2.5 }]
  },
  '#pastTipsResult section time': {
    fontSize: [{ unit: 'rem', value: 1.8 }]
  },
  pnf__header: {
    marginBottom: [{ unit: 'em', value: 2 }]
  },
  'pnf__headerpnf__header-big': {
    fontSize: [{ unit: 'em', value: 1.8 }]
  }
});
