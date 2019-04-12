import React from "react";

class AddOption extends React.Component{

    state={

        error:undefined
    };
    // constructor(props)
    // {
    //     super(props);
    //
    //
    //     this.handleSubmit22=this.handleSubmit22.bind(this);
    //
    //
    // }

    handleSubmit22=(e)=>{

        e.preventDefault()

        console.log('testing')


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


                {this.state.error && <p className="add-option-error">{this.state.error}</p>}

                <form className="add-option" onSubmit={this.handleSubmit22}>

                    <input type="text" className="add-option-input" name="valuetyped"/>
                    <button className="button">Submit</button>

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


export { AddOption as default }