var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
var skillsVisible = true;
toggleButton.addEventListener('click', function () {
    if (skillsVisible) {
        skills.style.display = 'none';
        toggleButton.innerText = 'Show Skills';
    }
    else {
        skills.style.display = 'block';
        toggleButton.innerText = 'Hide Skills'; //if display is none then sills will be visible
    }
    skillsVisible = !skillsVisible;
});
