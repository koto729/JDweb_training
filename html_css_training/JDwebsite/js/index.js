//search list
let keyword = document.querySelector('.keyword');
let list = document.querySelector('.search-help')

let searchArr = ['apple iphone', 'apple', 'apple watch', 'apple pc', 'apple mac'];

keyword.oninput = function () {
    list.innerHTML = '';
    for (let i = 0; i < searchArr.length; i++) {
        if (searchArr[i].indexOf(keyword.value) != -1) {
            list.innerHTML += '<p>' + searchArr[i] + '</p>';
            list.style.display = 'block';
        }
    }

}

keyword.onblur = function () {
    list.style.display = 'none';
}

//image
let img = document.querySelector('.img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slide = document.querySelector('.slider_item');



let imgArr = ['1.jpg', '2.jpg', '3.jpg'];

let count = 0;

let ul = document.querySelector('.banner-btn');
// let li = document.createElement("li");
let li = " ";
function showlist(){
    for (let i = 0; i < 3; i++) {
        // ul.appendChild(li);
        if (i === 0) {
            li += "<li class = asd active><a class='page-link'>"+ i +"</a></li>";
        }else{
            li += "<li><a class='page-link'>"+ i +"</a></li>";
        }
    }
    console.log(li);
    document.querySelector('.banner-btn').innerHTML = li;
}
showlist();

let lis = document.querySelectorAll('.banner-btn li');
console.log(lis);
function changeImg(count) {
    img.src = './images/' + imgArr[count];
    for (let i = 0; i < imgArr.length; i++) {
        lis[i].className = '';
    }
    lis[count].className = 'active';
}
// let timer = setInterval(function () {
//     if (count >= imgArr.length || count < 0) {
//         count = 0;
//     }
//     changeImg(count++);
// }, 3000);


// prev.onclick = function () {
//     count--;
//     if (count < 0) {
//         count = imgArr.length - 1;
//     }
//     changeImg(count);
// }

// next.onclick = function () {
//     count++;
//     if (count > imgArr.length - 1) {
//         count = 0;
//     }
//     changeImg(count);
// }

// slide.onmouseover = function () {
//     clearInterval(timer);
// }
// slide.onmouseout = function () {
//     timer = setInterval(function () {
//         if (count >= imgArr.length || count < 0) {
//             count = 0;
//         }
//         changeImg(count++);
//     }, 3000);
// }

for (let i = 0; i < lis.length; i++) {
    lis[0].className = 'active';
    img.src = './images/' + imgArr[0];
    lis[i].onclick = () => {
        count = i;
        changeImg(count);
    }
}

//08
let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let elevator = document.querySelector('.elevator');

//09
let items = document.querySelectorAll('.content .item');
let elevator_a = document.querySelectorAll('.elevator a');

let elevatorArr = [];

let base = header.offsetHeight + banner.offsetHeight;

for (let i = 0; i < items.length; i++) {
    base = base + items[i].offsetHeight;
    elevatorArr.push(base);
    console.log(base);
}

function clearColor(){
    for (let i = 0; i < elevator_a.length; i++) {
        elevator_a[i].style.color = '';
        
    }
}

let search = document.querySelector('.search');
let searchM = document.querySelector('.search-m');
let form = document.querySelector('.form');
let searchlogo = document.querySelector('.search_logo');

document.onscroll = function () {
    let top = document.documentElement.scrollTop || document.body.scrollTop;

    //get header height
    let headerHegiht = header.offsetHeight;
    //get banner height
    let bannerHegiht = banner.offsetHeight;

    if (top >= headerHegiht + bannerHegiht) {
        elevator.className = 'elevator elevator-fix';
        search.className = 'search search-fix';
        searchM.style.height = '50px';
        form.style.top = '8px';
        searchlogo.style.display = 'block';
    } else {
        elevator.className = 'elevator';
        search.className = 'search';
        searchM.style.height = '80px';
        searchlogo.style.display = 'none';
    }

    if (top < headerHegiht + bannerHegiht) {
        console.log("sa");
        clearColor();
    }else if (top >= headerHegiht + bannerHegiht && top < elevatorArr[0]) {
        clearColor()
        elevator_a[0].style.color = 'red';
    }else if(top >= elevatorArr[0] && top < elevatorArr[1]){
        clearColor()
        elevator_a[1].style.color = 'red';
    }else if(top >= elevatorArr[1] && top < elevatorArr[2]){
        clearColor()
        elevator_a[2].style.color = 'red';
    }else if(top < elevatorArr[3]){
        clearColor()
        elevator_a[3].style.color = 'red';
    }
    
}

