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
} //非按鈕 : 滑動寫法 連動背景色(缺點:較不靈活)


// window.addEventListener('load', init)

// function init(){
//     document.querySelector('.All_img').querySelectorAll('img')
//     .forEach(function(ele){
//         ele.addEventListener('click', change_img)
//         }
//     );
// };

// function change_img(e){
//     let new_img = e.target.getAttribute('src');
//     document.querySelector('#imgbox').querySelector('img').setAttribute('src', new_img);
// } //上課練習寫法 不改變背景色


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
// }); //方法一