const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', () => {
    if(skills.style.display === 'none') {
        skills.style.display = 'block'//if display is none then sills will be visble
    } else {
        skills.style.display = 'none'
    }
});