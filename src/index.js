// Інтерфейс користувача

document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

// Код для взаємодії з сервером
// Ви можете використовувати AJAX або Fetch API для взаємодії з сервером та обробки запитів клієнтів.
