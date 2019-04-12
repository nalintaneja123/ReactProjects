

class Person {

constructor(name='Anonymous',age=0)
{
    this.name=name;
    this.age=age;
    }


    getDescription()
    {
    //return 'Hi'+this.name+'!';

    return `${this.name} is  ${this.age} years old`
    }

    getGreeting()
    {
        return `Hi.I am ${this.name}`
    }
}


class Student extends Person {


    constructor(name,age,major){

        super(name,age);
        this.major=major;
    }

    hasMajor(){

        return !!this.major;
    }

    getDescription22()
    {
        let description=super.getDescription();

        if(this.hasMajor()){
            description=description+ `Their major is ${this.major}`
        }
        //return 'testing';
        return description;
    }


}


class Traveller extends Person{

    constructor(name,age,homeLocation)
    {
        super(name,age);
        this.homeLocation=homeLocation;
    }

    // hasHomeLocation(){
    //
    //     return !!this.homeLocation;
    // }

    getDescription() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {

            greeting = greeting + `I am visiting ${this.homeLocation}`;
        }

        return greeting;
    }

}

// const me=new Student('Andrew',26,'Computer Science');
// console.log(me.getDescription22());
//
// //console.log(me.getDescription());
//
// const other=new Student();
// //console.log(other.getDescription());
// console.log(other.getDescription22());


const me=new Traveller('Andrew',26,'Charlotte');

console.log(me.getDescription());

const me22=new Traveller();
console.log(me22.getDescription())



