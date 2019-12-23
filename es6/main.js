
// const fs = require('fs');
// const dir = './images';

// fs.readdir(dir, (err, files) => {
//     console.log(files.length);
// });

// console.log(h1[0].innerText);

$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // TODO
    // var c = Shape.Circle(25, 25, 25);
    // c.fillColor = '#f1c40f';

    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    tool.onMouseDown = ((event) => {
        // var c = Shape.Circle(event.point.x, event.point.y, 5);
        console.log(event);
        var c = Shape.Circle(event.point, 20);
        if (event.point.x > 200)
        {
            c.fillColor = 'red';
        } else {
            c.fillColor = 'blue';
        }
        
        // if (event.key === 'a') {
        //     var c = Shape.Circle(25, 25, 25);
        //     c.fillColor = '#f1c40f';
        // } else if (event.key === 'b') {
        //     var c = Shape.Circle(75, 25, 25);
        //     c.fillColor = 'red';
        // }
        // console.log(event.point.x, event.point.y);
        // c.fillColor = '#1abc9c';
    });
    // for (var i = 25; i < 400; i+=50)
    // {
    //     for (var j = 25; j < 400; j+=50)
    //     {
    //         console.log(`position: ${i},${j}`);
    //         var c = Shape.Circle(i, j, 20);
    //         c.fillColor = 'blue';
    //     }
        
    // }

    paper.view.draw();

    const body = document.querySelector("body");
    const title1 = document.getElementsByTagName("h1");
    const IMG_NUM = 2;
    
    title1[0].innerText = "Click this";
    title1[0].addEventListener("click", drawImage);

    function genRandNumber() {
        const number = Math.floor(Math.random() * IMG_NUM);
        return number;
    }
    
    function drawImage() {
        const numImage = genRandNumber();
        const image = new Image();
        image.src = `images/hodu${numImage + 1}.jpg`;
        image.width = 100;
        body.prepend(image);
    }
    
    function init() {
    }
    
    init();
});

// console.log(typeof(console.log));



// const title = document.querySelector(".js-first-level-header-text");
// console.log(typeof(title));
// console.log(title.innerText);
// // console.log('main.js loaded');


