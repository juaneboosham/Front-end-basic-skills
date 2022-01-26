import _ from 'lodash'
import './style.css'
import icon from './images/waimai.png'

function component() {
    let element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    console.log(element)
    return element;
  }
  
   const myIcon = new Image();
   myIcon.src = icon
   element.appendChild(myIcon);
   
  document.body.appendChild(component());