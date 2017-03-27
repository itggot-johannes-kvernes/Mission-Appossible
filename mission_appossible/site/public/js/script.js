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