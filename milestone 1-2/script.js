var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block'; //if display is none then sills will be visble
    }
    else {
        skills.style.display = 'none';
    }
});
