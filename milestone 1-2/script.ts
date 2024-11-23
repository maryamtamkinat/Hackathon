const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

let skillsVisible= true;
toggleButton.addEventListener('click', () => {
    if(skillsVisible) {
        skills.style.display = 'none';
        toggleButton.innerText = 'Show Skills';
    } else {
        skills.style.display = 'block';
        toggleButton.innerText = 'Hide Skills'; //if display is none then sills will be visible
    }
    skillsVisible = !skillsVisible;
});

