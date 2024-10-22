var skillsToggleBtn = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
// Set the initial display state of the skills section
skills.style.display = 'block'; // Default to visible
skillsToggleBtn.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
