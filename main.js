import './style.scss';
const details = ["Manal Solanki","n01397767"] ;
document.querySelector('#app').innerHTML = `
  <h1>Landing Page</h1>
  <h2>By :${details[0]} :  ${details[1]} </h2>
  <div>
    <a href="./qualityAsurance.html">Quality Assurance</a>
    <br/>
    <a href="./Security.html">Security</a>
    <br/>
    <a href="./badExample.html">Bad Example </a>
  </div>
`
export { details };