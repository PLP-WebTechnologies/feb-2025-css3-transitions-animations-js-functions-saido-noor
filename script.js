const button = document.querySelector('.animate-btn');
const box = document.querySelector('.animated-btn');

function storePreference(key, value) {
    localStorage.setItem(key, value);
}

function getPreference(key) {
    return localStorage.getItem(key);
}

function triggerAnimation() {
    box.classList.add('fade-in');
    storePreference('animationTriggered', 'true');

    box.addEventListener('animationend', () => {
        box.classList.remove('fade-in');
    });
}

if (getPreference('animationTriggered') === 'true') {
    box.style.backgroundColor = 'lightgreen'; 
}

button.addEventListener('click', triggerAnimation);
