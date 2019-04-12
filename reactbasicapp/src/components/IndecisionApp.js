import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component{


    state= {

        options :[],
        selectedOption :undefined           //['A','B','C']

        //options:props.options
    }

    // constructor(props){
    //
    //     super(props);
    //
    //     this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    //     this.handlePick=this.handlePick.bind(this);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     this.handleDeleteOption=this.handleDeleteOption.bind(this);
    //
    //
    // }




    handleDeleteOptions=()=>{

        this.setState(()=>({options:[] }));

    }

    handleClearModal=()=>{

        this.setState(()=>({selectedOption:undefined}));
    }

    handleDeleteOption=(optionToRemove)=> {


        this.setState((prev)=>({

            options:prev.options.filter((option)=>{

                return optionToRemove!==option
            })

        }));


    }

    handlePick=()=>{

        const randomNum=Math.floor(Math.random()*this.state.options.length);

        const option=this.state.options[randomNum];


        this.setState(()=>({

            selectedOption :option


        }))
        //alert(option);

    }

    handleAddOption=(option)=>{

        if(!option)
        {
            return "Enter a valid item in the array"
        }
        else if(this.state.options.indexOf(option)>-1) {

            return "this element already exists"
        }

        this.setState((prev)=>({options:prev.options.concat([option])}));

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

    }

    componentDidUpdate(prevProps,prevState){


        if(prevState.options.length!==this.state.options.length)
        {
            console.log('previous state length',prevState.options.length)
            console.log('current state length',this.state.options.length)


            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }


    render(){
        return(
            <div>
                <Header/>
                <div className="container">
                    <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>

                    <div className="widget">
                    <Options

                        options={this.state.options}

                        handleDeleteOptions={this.handleDeleteOptions}

                        handleDeleteOption={this.handleDeleteOption}

                    />
                    <AddOption

                        handleAddOption={this.handleAddOption}

                    />
                    </div>
                </div>

                <OptionModal

                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.handleClearModal}

                />

            </div>

        )
    }

}


export {IndecisionApp as default}