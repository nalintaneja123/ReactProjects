

const add=(a,b)=>{


    //console.log(arguments);
    return a+b;


}

console.log(add(55,1,1001));

const user={

    name:'Andrew',
    cities:['A','B','D'],
    printPlacesLived:function(){


       // const that=this;

    // const cityMessages  =
        //
        return this.cities.map((city)=>(this.name+' has lived in '+city));




    //return cityMessages;
        // this.cities.forEach((cities)=>{
        //
        //     console.log(this.name+' has lived in '+cities)
        //
        // });
    }

};

console.log(user.printPlacesLived());

const multiplier={

    numbers:[1,2,3],
    multiplyBy:2,
    multiply:function()
    {
        return this.numbers.map((number)=>(number * this.multiplyBy))
    }


}

console.log(multiplier.multiply());