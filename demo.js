console.log('hello world');

let people = [
    {'id':1234, 'name':"Mark Seymour", 'email':"mark@gmail.com"},
    {'id':1235, 'name':"Bobby Brown", 'email':"Bob@sky.com"},
    {'id':1236, 'name':"Ricky Slick", 'email':"rick@mail.com"},
    {'id':1237, 'name':"Badger Daily", 'email':"badger@gmail.com"},
]


let getGmailAddress = people.filter(person => person.email.indexOf("@gmail.com") > -1).map(person => person.name);

console.log(getGmailAddress);