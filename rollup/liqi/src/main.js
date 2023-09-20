import { name } from './modules/myModole';
import Greeter from './modules/Greeter';
import './style.css';
const container=`<div class="container" style="color:red">内容</div>`
// document.getElementById('container').innerHTML=container;
document.getElementsByClassName('container').innerHTML=container;

const a = new Greeter('ss');
a.greet()
console.log('hello' + name);

