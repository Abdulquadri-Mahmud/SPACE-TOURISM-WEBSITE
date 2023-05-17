const destination = document.querySelector('.destination');

const change_image = document.querySelector('.change_image');

const moon = document.querySelector('.moon');
const mars = document.querySelector('.mars');
const europa = document.querySelector('.europa');
const titan = document.querySelector('.titan');

const moon_selections = document.querySelector('.moon_selections');
const mars_selections = document.querySelector('.mars_selections');
const europa_selections = document.querySelector('.europa_selections');
const titan_selections = document.querySelector('.titan_selections');

moon.addEventListener('click', () => {
    destination.innerText = '01';

    mars_selections.style.display = 'none';
    europa_selections.style.display = 'none';
    titan_selections.style.display = 'none';
    moon_selections.style.display = 'block';
    
    // Adding active classlist
    moon.classList.add('active');
    // Removing active classlist
    mars.classList.remove('active');
    europa.classList.remove('active');
    titan.classList.remove('active');

    change_image.src = 'images/image-moon.png';
})
mars.addEventListener('click', () => {
    destination.innerText = '02';

    europa_selections.style.display = 'none';
    titan_selections.style.display = 'none';
    moon_selections.style.display = 'none';
    mars_selections.style.display = 'block';
    
    mars.classList.add('active');

    moon.classList.remove('active');
    europa.classList.remove('active');
    titan.classList.remove('active');

    change_image.src = 'images/image-mars.png';
})
europa.addEventListener('click', () => {
    destination.innerText = '03';

    moon_selections.style.display = 'none';
    mars_selections.style.display = 'none';
    titan_selections.style.display = 'none';
    europa_selections.style.display = 'block';

    // Adding active classlist
    europa.classList.add('active');
    // Removing active classlist
    mars.classList.remove('active');
    moon.classList.remove('active');
    titan.classList.remove('active');

    change_image.src = 'images/image-europa.png';
})
titan.addEventListener('click', () => {
    destination.innerText = '04';

    moon_selections.style.display = 'none';
    mars_selections.style.display = 'none';
    europa_selections.style.display = 'none';
    titan_selections.style.display = 'block';

    // Adding active classlist
    titan.classList.add('active');
    // Removing active classlist
    mars.classList.remove('active');
    europa.classList.remove('active');
    moon.classList.remove('active');
    
    change_image.src = 'images/image-titan.png';
})
