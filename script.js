//DEMO 1

/* Creating Objects
    Demo 1: Directly Instantiate an Object
    How to create an object using JS built in Object feature: 
        1. Create a new empty object: 

            demoOne = new Object(); 

            The demoOne object is stored in memory but has no 
            description (properties) or behaviors (methods) defined yet.

        2. Add a property and value: 
            
            demoOne.firstProp = "And then any required values within";

            Using (.) dot notation the demoOne object now owns the property firstProp with a string

    
        3. Easily Add a method too using the same format:
            - First define a function:

                function testProp1(){
                    alert(this.firstProp);
                }

            - Choose a method name then attach it to demoOne object (.)  

                demoOne.displayProp1 = testProp1;

            - Last, assign method displayProp1 to hold the function definition of testProp1.
                ! Notice that no () were used at the end, doing as so assigns the definition of function testProp1 as the method value. Using the parens () will instead execute function testProp1 and assign the return value instead!
            
            
*/
//Demo One in practice:

//Directly Instantiate:
    objDemo1 = new Object();

    //add properties:
    objDemo1.age = 2;
    objDemo1.name = "Mr Winters";
    objDemo1.hasSibling = true;
    objDemo1.siblingCount = 3;

    //add a method:
    function getSiblingCount(){
        if(this.hasSibling == true){
            return this.siblingCount;
        }
    }

    objDemo1.getCount = getSiblingCount;
    console.log("Siblings:", objDemo1.getCount());
    console.log("Direct Instance:", objDemo1)


/// this - JS Keyword ///

/* the keyword: 'this' can be a difficult concept. 
    'this' is a keyword that identifies the source of a value being used. 'this' always points to 

//DEMO 2

//Object instance using the constructor:

function objDemo2(){
    this.about = "I'm a new object";
    this.showAbout = function() {
    }
        alert(this.about);
    }
    this.setAbout = function(newAbout){
        this.about = newAbout

}

var objDemo21 = new objDemo2();
var objDemo22 = new objDemo2();