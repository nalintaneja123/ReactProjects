


// const object={
//
//     name:'Vikram',
//     getName(){
//         return this.name;
//     }
// }
//
// const ccc=object.getName.bind({name:'kklkl'});
//
// console.log(ccc());



//stateless functional component



class IndecisionApp extends React.Component{

    constructor(props){

        super(props);

        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);

        this.state= {

            options :[]//['A','B','C']

           //options:props.options
        }

    }


    componentDidMount(){


        try {

            const json=localStorage.getItem('options');
            const options=JSON.parse(json);

            if(options)
            {

                this.setState(()=>({

                    options
                }))

            }

        }
        catch(e)
        {

        }




       // console.log('fetching data');
    }

    componentDidUpdate(prevProps,prevState){


        if(prevState.options.length!==this.state.options.length)
        {
            console.log('previous state length',prevState.options.length)
            console.log('current state length',this.state.options.length)


            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);

            //console.log('saving data');
        }


        // console.log('prevProps',prevProps)
        // console.log('prevState',prevState);
        // //console.log('component update')



    }

    componentWillUnmount() {
        console.log('component will unmount');
    }


    handleDeleteOptions(){


        // this.setState(()=> {
        //
        //     return {
        //         options: []
        //     }
        // });


        this.setState(()=>({options:[] }));

    }

    handleDeleteOption(optionToRemove) {

        //console.log('hdo', optionToRemove)



        this.setState((prev)=>({

            options:prev.options.filter((option)=>{

               return optionToRemove!==option
            })

        }));


    }










    handlePick(){

        const randomNum=Math.floor(Math.random()*this.state.options.length);

        const option=this.state.options[randomNum];

        alert(option);

    }

    handleAddOption(option){
        //console.log(option);


        if(!option)
        {
            return "Enter a valid item in the array"
        }
        else if(this.state.options.indexOf(option)>-1) {

            return "this element already exists"
        }


        // this.setState((prev)=>{
        //
        //
        //     return {
        //
        //         options:prev.options.concat([option])
        //     };
        //
        //
        // });


        this.setState((prev)=>({options:prev.options.concat([option])}));

    }

    render(){

        // const title='Indecision';
        //const subtitle='!!Put your life in hands'

        return(
            <div>
                <Header/>
                <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>
                <Options

                    options={this.state.options}

                    handleDeleteOptions={this.handleDeleteOptions}

                    handleDeleteOption={this.handleDeleteOption}

                />
                <AddOption

                    handleAddOption={this.handleAddOption}

                />

            </div>

        )
    }

}


// IndecisionApp.defaultProps={
//
//     options:[]
// }

const Header=(props)=>{
    return(

        <div>
            <div>test text</div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>

    )
}


Header.defaultProps={

    title:'Indecision App',
    subtitle:'!!Put your life in hands'

};

// class Header extends React.Component{
//
//     render(){
//
//        // console.log(this.props);
//         return(
//         <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//
//         </div>
//         );
//
//     }
//
//
//
// }

const Action=(props)=>{


        return (

            <div>


                <button
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}

                >What Should i do?</button>



            </div>

        );


};


// class Action extends React.Component{
//
//     handlePick()
//     {
//         alert('This is handle click');
//     }
//
//     render()
//     {
//         return (
//
//             <div>
//
//
//                     <button
//                         onClick={this.props.handlePick}
//                         disabled={!this.props.hasOptions}
//
//                     >What Should i do?</button>
//
//
//
//             </div>
//
//         )
//     }
// }


const Options=(props)=>{

    return(

        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>

            {props.options.length===0 && <p>Please add an option to get started</p>}

            {props.options.map((option) => (

                <Option
                    key={option}
                    optiontext={option}
                    handleDeleteOption={props.handleDeleteOption}



                />))}


        </div>


    );

}

// class Options extends React.Component{
//
//     render()
//     {
//         //console.log(this.props.options.length)
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 Options component here<br/><br/>
//                 {/*{this.props.options.length}*/}
//
//
//
//                     {this.props.options.map((option)=>{
//
//                      return  <Option key={option} optiontext={option}/>
//                 })
//
//             }
//
//             </div>
//
//         )
//     }
//
// }

const Option=(props)=>{

    return(

        <div>
            {props.optiontext}
            <button onClick={()=>
            {
                props.handleDeleteOption(props.optiontext)

            }}>Remove</button>

        </div>


    )


}

// class Option extends React.Component{
//
//     render()
//     {
//         return(
//
//             <div>
//                 {this.props.optiontext}
//
//             </div>
//
//
//         )
//     }
// }






class AddOption extends React.Component{


    constructor(props)
    {
        super(props);

        this.handleSubmit22=this.handleSubmit22.bind(this);

        this.state={

            error:undefined
        };
    }

    handleSubmit22(e){

        e.preventDefault()


        //  const valueentered=document.getElementById('valuetyped').value;

        const valuentered=e.target.elements.valuetyped.value.trim();
         e.target.elements.valuetyped.value=' ';
        //
        // if(!!valuentered.trim()) {
        //
        //     alert(valuentered);
        //     //
        //     //e.preventDefault();
        // }






       const error= this.props.handleAddOption(valuentered);


       //
       // this.setState(()=>{
       //
       //     return{
       //
       //         error:error
       //     }
       //
       // });
       //
       //
       this.setState(()=>({error:error}));



       if(error)
       {
           e.target.elements.valuetyped.value=' ';
       }

    }




    render()
    {
        return(
            <div>


                {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.handleSubmit22}>

                    <input type="text" name="valuetyped"/>
                    <button>Submit</button>

                </form>
            </div>

        )
    }

}
//
// const jsx=(
//
//     <div>
//
//         <Header/>
//         <Action/>
//         <Options/>
//         <AddOption/>
//     </div>
// );


const User=(props)=>{

    return(
      <div>

          <p>Name : {props.name}</p>
          <p>Age :{props.Age}</p>
      </div>


    );

}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))

//
// <User name="Nalin" Age={26}
