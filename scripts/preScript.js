document.addEventListener('DOMContentLoaded', function () {
    let titleclass = document.getElementById('class');
    var _class = localStorage.getItem('class');
    titleclass.textContent = _class.slice(1,-11);
    
    var gradesStart = document.querySelectorAll('.header__link');
    gradesStart.forEach(function (el) {
      el.addEventListener('click', function () {
        var startId = this.id;
        localStorage.setItem('class', JSON.stringify(startId)); 
        var _class = localStorage.getItem('class');
      })
    })
})