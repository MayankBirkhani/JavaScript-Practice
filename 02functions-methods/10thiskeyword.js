//object literals
let user = {
    name : 'Mayank',
    age : 24,
    email : 'mayankbirkhani98@gmail.com',
    location : 'Uttrakhand',
    blogs : [ 
    {title:'Uttrakhand is also know as Dev Bhoomi.',likes:30},  
    {title:'A spiritual place where to get connect to inner world!', likes:50}  
],

    //regular function with shorthand . If we directly try to access blogs it will throw an error
    logBlogs(){
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();

