// إظهار رسالة تنبيه عند تحميل الصفحة
window.onload = function() {
  alert("مرحباً بكم في موقع Pirates World! استمتعوا بمحتوى الأنمي الرائع!");
};

// تغيير الخلفية عند الضغط على زر
const changeBackgroundButton = document.createElement('button');
changeBackgroundButton.textContent = 'تغيير الخلفية';
document.body.appendChild(changeBackgroundButton);

changeBackgroundButton.onclick = function() {
  document.body.style.backgroundColor = '#3498db'; // خلفية ثابتة باللون الأزرق
};

// تغيير النص عند الضغط على صورة
const images = document.getElementsByTagName('img');
for (let img of images) {
  img.onclick = function() {
    alert('لقد ضغطت على صورة الأنمي!');
  };
}
