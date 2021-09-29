//DEMO 1

/* Creating Objects
    Demo 1: Directly Instantiate an Object
    How to create an object using JS built in Object feature: 
        1. Create a new empty object: 

            demoOne = new Object(); 

            The demoOne object is now in memory but has no 
            description (properties) or behaviors (methods) defined.

        2. Add a property and value:
            Using (.) dot notation after the objects name, assign a variable name to the new property like such:

            demoOne.firstProp = "And then any required values within";
    
        3. Easily Add a method too using the same format:
            - First define a function

                function testProp1(){
                    alert(this.firstProp);
                }

        4.  attach a method name to your object and assign to is the definition of the new function | 

                demoOne.displayProp1 = testProp1;

                Notice that no () were used at the end. This assigns the definition of function testProp1 as the method value. Using the parens () will execute the function instead and assign the return value instead.
            
            
//  - Use JS 
*/

objDemo1 = new Object();

objDemo1.focus = 33;
o





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