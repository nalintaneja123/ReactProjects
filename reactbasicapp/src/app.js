import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import './styles/styles.scss'
import 'normalize.css/normalize.css'


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))

// const Layout=(props)=>{
//
//
//     return(
//
//         <div>
//             <p>header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//
//
//     );
//
// }
//
//
// const template=(
//
//
//     <div>
//         <h1>Page title</h1>
//         <p>This is a page</p>
//     </div>
//
// );


// ReactDOM.render(<Layout content={template}/>,document.getElementById('app'))

// ReactDOM.render(<Layout>
//
//     {/*This is inline*/}
//     <div>
//         <h1>Page title</h1>
//         <p>This is a page</p>
//     </div>
//
// </Layout>,document.getElementById('app'))

class OldSyntax{

    constructor(){

        this.name='Mike';
        this.getGreeting=this.getGreeting.bind(this);
    }

    getGreeting(){
        return `Hi.My name is ${this.name}`;
    }

}

const oldSyntax=new OldSyntax();

const getGreeting=oldSyntax.getGreeting;
console.log(getGreeting())

/////

class NewSyntax{

    name='Jen';

    getGreeting=()=>{
        return `Hi.My name is ${this.name}`;
    }

}

const newSyntax=new NewSyntax();

const newgetGreeting=newSyntax.getGreeting;

console.log(newgetGreeting());

