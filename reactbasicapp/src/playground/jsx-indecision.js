console.log('App.js is running')


//JSX-Javascript XML

const tempobject={

    title:'Indecision App',
    subtitle:'This is some info',
    options:[]
}

const onFormSubmit=(e)=>{

    e.preventDefault();

    // console.log('form submitted!');

    const option=e.target.elements.option.value;

    if(option)
    {
        tempobject.options.push(option);
        e.target.elements.option.value='';
        renderApp();

    }


};


const onFormRemove=(e)=>{


    //e.preventDefault();
    //tempobject.options.splice(0,tempobject.options.length);

    tempobject.options=[];
    renderApp();
}


const onMakeDecision=()=>{

    const randomNum=Math.floor(Math.random()*tempobject.options.length);

    const option=tempobject.options[randomNum];

    alert(option);

};


const renderApp=()=> {

    const template = (
        <div>
            <h1>{tempobject.title}</h1>
            {(tempobject.subtitle && <p>{tempobject.subtitle}</p>)}

            <p>{(tempobject.options.length > 0 ? 'Here are your options' : 'No options')}</p>

            <p>{tempobject.options.length}</p>

            <button disabled={tempobject.options.length==0} onClick={onMakeDecision}>What should i do?</button>

            <button onClick={onFormRemove}>Remove All</button>

            <ol>
                {
                    tempobject.options.map((option)=>{

                        return <li key={option}>{option}</li>
                    })

                }
            </ol>


            <form onSubmit={onFormSubmit}>

                <input type="text" name="option"/>
                <button>Add Option</button>


            </form>



        </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);


}


renderApp();

/////////////////////////////////////////////////////////////////////////////////////////////////
const user={

    name:'Andrew',
    userAge:26,
    location:'New york'
}




function getLocation(location)
{
    if(location){
        return <p>Location :{location}</p>;
    }

}

const template2=(

    <div>
        <h1>{user.name? user.name:'Anonyomous'}</h1>

        {(user.userAge && user.userAge>=17) && <p>Age:{user.userAge}</p>}

        {getLocation(user.location)}

    </div>

)

const approot2=document.getElementById('app1');

ReactDOM.render(template2,approot2)

//////////////////////////////////////////////////////////////////////////////


