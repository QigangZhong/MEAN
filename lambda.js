/*
man = {
    name:'lee',
    init:function(){
        var self = this;
        var printName = function() {
            console.log(self.name);
        }
        printName();
    }
}
man.init();*/


man = {
    name: 'lee',
    init: function () {
        var printName = () => {
            console.log(this.name);
        }
        printName();
    }
}
man.init();