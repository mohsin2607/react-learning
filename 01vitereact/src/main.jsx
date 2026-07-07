import App from'./App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
// function MyApp(){
//     return(
// //         <div>
// //             <h1>this is mohsin !</h1>
// //         </div>
// //     )
// // }
// const reactElement = React.createElement(
//     'a',
//     {href: 'https/google.com', target: '_blank'},
//     'click me to visit google'
// )
const anotherElement = (
    <a href = "https://google.com" target='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    anotherElement
)
