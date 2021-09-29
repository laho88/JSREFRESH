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
            -  use same (.) notation to attach the method to the object:

                demoOne.displayProp1
            
            
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