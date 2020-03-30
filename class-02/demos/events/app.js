// 'use strict';
$('button').on('click',function(){
    console.log('stop clicking me');
    $('ul').toggleClass('on');
});

// $('button').onClick(function(){

// })

$('ul').on('click',function(){
    console.log(this);
});

// $('li').on('click',function(){
//     console.log($(this).text());
// })

$.get('./people.json')
.then (data => {
    // console.log(data);
    data.forEach((val,idx) => {
        // console.log(val);
        let person = new Person(val.name);
        // console.log(person);
        person.render();
    });
});

function Person(name) {
    this.name = name;
}

Person.prototype.render = function () {
    let persClone = '';
    persClone = $('.person-template').clone();
    // console.log('dddddddddd',persClone.html());
    // $('ul').append(`<li>${this.name}</li>`);
    persClone.removeClass('person-template');
    // console.log('eeeeeeeeee',persClone.html());
    persClone.find('.ppl').text(this.name);
    $('ul').append(persClone);
}