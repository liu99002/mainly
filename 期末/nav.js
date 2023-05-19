// 獲取 "About" 鏈結元素
var aboutLink = document.querySelector('#about');

// 監聽 "About" 鏈結的點擊事件
aboutLink.addEventListener('click', function (event) {
    event.preventDefault(); // 阻止預設的點擊行為

    // 獲取目標元素的 Y 軸偏移量
    var targetOffset = document.querySelector('.page3').offsetTop;

    // 使用平滑滾動效果將頁面滾動至目標元素位置
    window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
    });
});

