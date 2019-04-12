

let visiblity=false

const valuesentered={

    textentered:"There are some details which are entered"
}

const onFormSubmit=(e)=>{

    e.preventDefault();


  visiblity=!visiblity;
    renderAppVisible();


}


const renderAppVisible=()=>{

    const templateVisible=(

        <div>

            <h1>Visiblity Toggle</h1>



                <button onClick={onFormSubmit}>{visiblity?'Hide Details':'Show Details'}</button>

            {visiblity &&
            (
                <div>
                    <p>There are some details to be seen</p>
                </div>

            )

            }


        </div>
    );


    const appRoot = document.getElementById('app2');
    ReactDOM.render(templateVisible, appRoot);

}


renderAppVisible();
