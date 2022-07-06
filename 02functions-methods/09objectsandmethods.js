//object literals

let user = {
    name : 'Mayank',
    age : 24,
    email : 'mayankbirkahni98@gmail.com',
    location : 'Uttrakhand',
    blogs : ['Uttrakhand is also know as Dev Bhoomi.' ,'A spiritual place where to get connect to inner world!'],

    login: function(){
        console.log('The user logged in');
    },

    logout : function(){
        console.log('The user logged out')
    }

};
user.login();
user.logout();
