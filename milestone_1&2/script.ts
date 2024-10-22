const skillsToggleBtn = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

// Set the initial display state of the skills section
skills.style.display = 'block'; // Default to visible

skillsToggleBtn.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';  
    } else {
        skills.style.display = 'none';
    }
});
