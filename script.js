function objDemo(){
    this.about = "I'm a new object";
    this.showAbout = function() {
        alert(this.about);
    }
    this.setAbout = function(newAbout){
        this.about = newAbout
    }

}

var objDemo1 = new objDemo();
var objDemo2 = new objDemo();
