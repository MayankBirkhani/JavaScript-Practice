// callbacks & foreach

let people = ['mario', 'lugi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (people, index) =>{
    console.log(`${index} Hello ${people}`);
};

people.forEach(logPerson);