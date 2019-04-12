//
//
// class VisibilityToggle extends React.Component{
//
// constructor(props) {
//     super(props);
//
//     this.handleDetails = this.handleDetails.bind(this);
//
//     this.state={
//
//         value:"",
//         buttonText:"Show Details",
//
//     }
//
// }
//
//
//
//
//
//     handleDetails(e)
//     {
//       e.preventDefault();
//
//        //console.log(buttontext);
//
//
//             this.setState((prev)=>{
//
//
//                 if(prev.buttonText=='Show Details')
//                 {
//                     return{
//                         value: "Hi This is detail",
//                         buttonText: "Hide Details"
//                     }
//                 }
//                 else if(prev.buttonText=='Hide Details')
//                 {
//                     return{
//
//                         value :"",
//                         buttonText:"Show Details"
//                     }
//                 }
//
//
//
//             });
//
//
//
//
//
//
//     }
//
//
//
//   render(){
//
//
//
//       return(
//
//           <div>
//           <h1>Visibility Toggle</h1>
//
//               <button onClick={this.handleDetails}>{this.state.buttonText}</button>
//               <p>{this.state.value}</p>
//           </div>
//
//       )
//   }
//
//
// }




class VisibilityToggle extends React.Component{

    constructor(props) {
        super(props);

        this.handleDetails = this.handleDetails.bind(this);

        this.state={

            visibility:false

        }

    }





    handleDetails(e)
    {
        e.preventDefault();

        //console.log(buttontext);


        this.setState((prev)=>{

            return{

                visibility: !prev.visibility
            }
            //
            // if(prev.buttonText=='Show Details')
            // {
            //     return{
            //         value: "Hi This is detail",
            //         buttonText: "Hide Details"
            //     }
            // }
            // else if(prev.buttonText=='Hide Details')
            // {
            //     return{
            //
            //         value :"",
            //         buttonText:"Show Details"
            //     }
            // }



        });






    }



    render(){



        return(

            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.handleDetails}>{this.state.visibility?'Hide Details' : 'Show Details'}</button>
              {this.state.visibility && (

                    <div>
                        The details are there
                    </div>

                )}
            </div>

        )
    }


}


ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))