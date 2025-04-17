// هنا يمكننا إضافة بعض الأكواد التي تساعد في تحسين وظائف الموقع

// مثال بسيط على إظهار رسالة تنبيه عند تحميل الصفحة
window.onload = function() {
    alert("مرحباً بكم في موقع Pirates World! استمتعوا بمحتوى الأنمي الرائع!");
  };
  
  // إضافة وظيفة لتغيير النص عند الضغط على الصورة
  const images = document.querySelectorAll('.images img');
  images.forEach(img => {
    img.addEventListener('click', function() {
      alert('لقد ضغطت على صورة الأنمي!');
    });
  });
  
  // إضافة وظيفة لتغيير خلفية الصفحة عند الضغط على زر
  const changeBackgroundButton = document.createElement('button');
  changeBackgroundButton.textContent = 'تغيير الخلفية';
  changeBackgroundButton.style.padding = '10px 20px';
  changeBackgroundButton.style.fontSize = '16px';
  changeBackgroundButton.style.marginTop = '20px';
  document.body.appendChild(changeBackgroundButton);
  
  changeBackgroundButton.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
  });
  
  // وظيفة لتوليد لون عشوائي
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }