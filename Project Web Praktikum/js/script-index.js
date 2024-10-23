// var text = document.getElementById('text');
// var button = document.getElementsByClass('btn');

// button.addEvenListener('click', function(){

//     text.textContent = "Sudah ku ubah Woiii";
// });

// DOM manipulation for Login Page

// Change Hero Text on Button Click
document.querySelector('.btn').addEventListener('click', function() {
    const heroText = document.querySelectorAll('.hero-text h2');
    heroText[0].textContent = "GET THE BEST";
    heroText[1].textContent = "WORKOUT EXPERIENCE";
    heroText[2].textContent = "WITH OUR GEAR";
});

// Toggle Sign In/Sign Up Button Styles
document.querySelector('.signin').addEventListener('mouseover', function() {
    this.style.backgroundColor = "#f39c12";
});

document.querySelector('.signin').addEventListener('mouseout', function() {
    this.style.backgroundColor = "";
});

document.querySelector('.signup').addEventListener('mouseover', function() {
    this.style.backgroundColor = "#27ae60";
});

document.querySelector('.signup').addEventListener('mouseout', function() {
    this.style.backgroundColor = "";
});

// Animate Scroll to Features Section
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
});

// Update the Number of Workouts, Customers, and Categories
const workoutElement = document.querySelector('.features .feature-item:nth-child(1) h3');
workoutElement.textContent = '50+';

const customersElement = document.querySelector('.features .feature-item:nth-child(2) h3');
customersElement.textContent = '800+';

const categoriesElement = document.querySelector('.features .feature-item:nth-child(3) h3');
categoriesElement.textContent = '5';

// Hover Effects for Tool Items
const toolItems = document.querySelectorAll('.tools .tool-item');

toolItems.forEach(tool => {
    tool.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });

    tool.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});

// Contact Us Footer Click Interaction
document.querySelector('.footer-column h4').addEventListener('click', function() {
    alert('Thanks for visiting! Feel free to contact us anytime.');
});
