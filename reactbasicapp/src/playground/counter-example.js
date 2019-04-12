

class Counter extends React.Component{

    constructor(props)
    {
        super(props);
        this.handleAddone=this.handleAddone.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.clearCount=this.clearCount.bind(this);


        this.state={
            //count:props.count

            count:0
        }
    }


    componentDidMount(){



        const newvalue=localStorage.getItem('count');

        console.log('value currently is', newvalue)
        if(!isNaN(newvalue))
        {

            this.setState(() => ({

                count: parseInt(newvalue, 10)

            }))
        }

        //localStorage.setItem('count',this.state.count);

    }

    componentDidUpdate(prevProps,prevState) {

        if (prevState.count !== this.state.count) {


            console.log('prev count',prevState.count);
            console.log('cuurent count',this.state.count);
            const value = this.state.count


            localStorage.setItem('count', value);

        }



    }

    componentWillUnmount(){

    }

    handleAddone(e)
    {
        // this.state.count++;
        // console.log(this.state.count);
        this.setState((prevState)=>{

            return{
                count:prevState.count+1
            }

        });
    }

    handleMinusOne(e)
    {
        this.setState((previous)=>{

            return{

                count:previous.count-1
            }

        });
        //console.log('handleMinusone')
    }

    handleReset(e)
    {
        this.setState((previous)=>{

            console.log(previous.count)
            return{
                count:0
            }
        });


        // this.setState((prev)=>{
        //     console.log(prev.count);
        //
        //     return{
        //
        //         count:prev.count+1
        //     }
        //
        //
        // });


        // this.setState({
        //
        //     count:0
        //
        // });
        //
        // this.setState({
        //
        //
        //     count:this.state.count+1
        //
        // })

    }

    clearCount(){

        console.log('ggg');
        this.setState(()=>({
            count:localStorage.clear()
        }))


    }


    render(){

        return(
            <div>
                {this.state.name}
                <h1>Count :{this.state.count} </h1>
                <button onClick={this.handleAddone}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
                <button onClick={this.clearCount}>Clear Count</button>

            </div>

        )
    }
}


// Counter.defaultProps={
//
//     count:0
//
// }

ReactDOM.render(<Counter count={8}/>,document.getElementById('app'));






// let count=0;
// const addOne=()=>{
//
//     count++;
//
//     renderCounterApp();
//     console.log('addone '+count);
//
// }
//
// const registerminus1=()=>{
//
//     count--;
//     renderCounterApp()
//     ///console.log('-1');
// }
//
// const registerreset=()=>{
//
//     count=0;
//     renderCounterApp()
//     console.log('reset');
//
//
// }
//
// const approot3=document.getElementById('app1');
// const renderCounterApp=()=>{
//
//
//     const template3=(
//         <div>
//             <h1>Count :{count}</h1>
//
//             <button onClick={addOne} className="button">+1</button><br/>
//
//             <button onClick={registerminus1}>-1</button><br/>
//             <button onClick={registerreset}>reset</button><br/>
//         </div>
//
//     )
//     console.log(template3)
//
//
//     ReactDOM.render(template3,approot3)
//
//
// };
//
// renderCounterApp();
//
//
// ///////
//
