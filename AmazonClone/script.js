let slide=document.querySelectorAll('.slide');
var current = 0;
function cls(){
    for(let i = 0; i < slide.length; i++){
          slide[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();


let snip=document.querySelectorAll('.snip');
var crrnt = 0;
function clsi(){
    for(let i = 0; i < snip.length; i++){
          snip[i].style.display = 'none';
    }
}

function nextu(){
    clsi();
    if(crrnt === snip.length-1) crrnt = -1;
    crrnt++;

    snip[crrnt].style.display = 'block';
    snip[crrnt].style.opacity = 0.4;

    var y = 0.4;
    var inty = setInterval(function(){
        y+=0.1;
        snip[crrnt].style.opacity = y;
        if(y >= 1) {
            clearInterval(inty);
            y = 0.4;
        }
    }, 100);

}

function prevu(){
    clsi();
    if(crrnt === 0) crrnt = snip.length;
    crrnt--;

    snip[crrnt].style.display = 'block';
    snip[crrnt].style.opacity = 0.4;

    var y = 0.4;
    var inty = setInterval(function(){
        y+=0.1;
        snip[crrnt].style.opacity = y;
        if(y >= 1) {
            clearInterval(inty);
            y = 0.4;
        }
    }, 100);

}

function startu(){
    clsi();
    snip[crrnt].style.display = 'block';
}
startu();





