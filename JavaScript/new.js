const beverageList = ['greentee', 'straberry', 'berry'];
const imgList = ['img/img1.png', 'img/img2.png', 'img/img3.png'];
const colorList = ['green', 'pink', 'purple'];

for(let i = 0; i < beverageList.length; i++) {
    beverageList[i]
    const tee = document.getElementById(beverageList[i]);
    this.addEvent(tee, imgList[i], colorList[i]);
}

function addEvent(eleId, imgPath, color) {
    eleId.addEventListener('mouseenter', function(){
        document.querySelector('.starbucks').setAttribute('src', imgPath);
        document.querySelector('#bgColor').style.backgroundColor = color;
    });
    eleId.addEventListener('mouseleave', function(){
        document.querySelector('.starbucks').setAttribute('src', "img/img1.png");
        document.querySelector('#bgColor').style.backgroundColor = "salmon";
    });
}

// document.querySelector('.greentee').addEventListener('click', function(){
//     console.log("test "+(document.querySelector('.greentee').classList.length));
//     if(document.querySelector('.greentee').classList.length == 1){
//         document.querySelector('.greentee').classList.add('greentee1');
//         document.querySelector('.starbucks').setAttribute('src', "img/img1.png");
//         document.querySelector('#bgColor').style.backgroundColor = "green";
//     } else {
//         document.querySelector('.greentee').classList.remove('greentee1');
//         document.querySelector('.starbucks').setAttribute('src', "img/img1.png");
//         document.querySelector('#bgColor').style.backgroundColor = "salmon";
//     }
// });