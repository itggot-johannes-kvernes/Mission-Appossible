function menu_function() {
    var y = document.querySelector('#dark_box');
    if(!y.classList.contains('fade_in') && !y.classList.contains('fade_out')){
        y.classList.toggle('fade_in');
        y.classList.toggle('dark_box')
    }
    else {
        y.classList.toggle('fade_in');
        y.classList.toggle('fade_out');
        y.classList.toggle('dark_box')
    }


    var x = document.querySelector('#menu');
    if(!x.classList.contains('menu_hidden') && !x.classList.contains('menu_visible')){
        x.classList.toggle('menu_visible');
    }
    else {
        x.classList.toggle('menu_hidden');
        x.classList.toggle('menu_visible');   
    }
}


var var1 = location.pathname.split('/');
var var2 = var1[var1.length - 1];
var var3 = document.querySelector("a[href='" + var2 + "']");
var3.classList.add('current_page');

if(var2 == 'index.html') {
    document.querySelector('#star').classList.add('current_page');
    document.querySelector('.starred').classList.add('background_tiny_bit_darker');
}
else if(var2 == 'new.html') {
    document.querySelector('#new').classList.add('current_page');
    document.querySelector('.new').classList.add('background_tiny_bit_darker');
}
else if(var2 == 'settings.html') {
    document.querySelector('#settings').classList.add('current_page');
    document.querySelector('.settings').classList.add('background_tiny_bit_darker');
}


if(var2 == 'index.html') {
    document.querySelector('#title').innerHTML='Starred';
}
else if(var2 == 'new.html') {
    document.querySelector('#title').innerHTML='New';
}
else if(var2 == 'settings.html') {
    document.querySelector('#title').innerHTML='Settings';
}

function show_popup(hair_id){
    var img = document.querySelector('#' + hair_id);
    document.querySelector('#popup_picture').src = img.src;

    var y = document.querySelector('#dark_box_popup');
    if(!y.classList.contains('fade_in') && !y.classList.contains('fade_out')){
        y.classList.toggle('fade_in');
        y.classList.toggle('dark_box_popup')
    }
    else {
        y.classList.toggle('fade_in');
        y.classList.toggle('fade_out');
        y.classList.toggle('dark_box_popup')
    }

    var z = document.querySelector('#popup');
    if(!z.classList.contains('popup_hidden') && !z.classList.contains('popup_visible')){
        z.classList.toggle('popup_visible');
        z.classList.remove('popup');
    }
    else {
        z.classList.toggle('popup_hidden');
        z.classList.toggle('popup_visible');
    }
}

function hide_popup(){
    var y = document.querySelector('#dark_box_popup');
    if(!y.classList.contains('fade_in') && !y.classList.contains('fade_out')){
        y.classList.toggle('fade_in');
        y.classList.toggle('dark_box_popup')
    }
    else {
        y.classList.toggle('fade_in');
        y.classList.toggle('fade_out');
        y.classList.toggle('dark_box_popup')
    }

    var z = document.querySelector('#popup');
    if(!z.classList.contains('popup_hidden') && !z.classList.contains('popup_visible')){
        z.classList.toggle('popup_visible');
        z.classList.remove('popup');
    }
    else {
        z.classList.toggle('popup_hidden');
        z.classList.toggle('popup_visible');
    }
}