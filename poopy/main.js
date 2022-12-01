import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#menu').innerHTML = `
  <div>

  </div>
`

setupCounter(document.querySelector('#counter'))
