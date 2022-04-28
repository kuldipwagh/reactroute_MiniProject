

export var userSet= new Set();
let usersarr=
[
    {
        Id:101,
           Name:'Kuldip',
         ContactNo: 9393,
         Age:30,
         Username:'Kdpatil',
         Password:'485832'
    },
    { 
        Id:102,
        Name:'Nikhil',
        ContactNo: 9394,
        Age:33,
        Username:'NKpatil',
        Password:'8958473'
    },

    { 
        Id:103,
        Name:'John',
        ContactNo: 9395,
        Age:34,
        Username:'JNpatil',
        Password:'598586'
    },

    { 
        Id:104,
        Name:'Ravi',
        ContactNo: 9396,
        Age:35,
        Username:'RVpatil',
        Password:'954969'
    }
];

usersarr.map(ele=>{
    userSet.add(ele);
})