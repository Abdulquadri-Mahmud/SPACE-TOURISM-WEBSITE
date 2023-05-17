const head = document.querySelector('.head');
const head2 = document.querySelector('.head2');

const index = document.querySelector('.index');
const index2 = document.querySelector('.index2');


const selection1 = document.querySelector('.selection1');
const selection2 = document.querySelector('.selection2');
const selection3 = document.querySelector('.selection3');

const destination = document.querySelector('.destinaton');
const description = document.querySelector('.description');

const img = document.querySelector('.img');

selection1.addEventListener('click', () => {
    head.innerText = 'SPACE CAPSULE';
    head2.innerText = 'SPACE CAPSULE';
    index.innerText = '01';
    index2.innerText = '01'
    destination.innerText = 'SPACE CAPSULE';
    description.innerText = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;
    img.src = 'technologies/image-space-capsule-portrait.jpg'
})
selection2.addEventListener('click', () => {
    head.innerText = 'SPACEPORT';
    head2.innerText = 'SPACEPORT';
    index.innerText = '02';
    index2.innerText = '02'
    destination.innerText = 'SPACEPORT';
    description.innerText = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
    img.src = 'technologies/image-spaceport-portrait.jpg'
});
selection3.addEventListener('click', () => {
    head.innerText = 'LAUNCH VERHICLE';
    head2.innerText = 'LAUNCH VERHICLE';
    index.innerText = '03';
    index2.innerText = '03';
    destination.innerText = 'LAUNCH VERHICLE';
    description.innerText = `Launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
    img.src = 'technologies/image-launch-vehicle-portrait.jpg'
});