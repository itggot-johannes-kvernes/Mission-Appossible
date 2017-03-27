function menu_function() {
    var x = document.querySelector('#menu');
    if(!x.classList.contains('menu_hidden') && !x.classList.contains('menu_visible')){
        x.classList.toggle('menu_visible');
    }
    else {
        x.classList.toggle('menu_hidden');
        x.classList.toggle('menu_visible');   
    }

    var y = document.querySelector('#this_changes_or_something');
    y.classList.toggle('dark_box')
}