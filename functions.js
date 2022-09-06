function addHighlight(target) {
    if(target.classList.contains('navbar-button')) {
    target.classList.add('highlighted');
    }
}

function removeHighlight(target) {
    if(target.classList.contains('highlighted') && target.classList.contains('navbar-button')) {
    target.classList.remove('highlighted');
    }
}

window.addEventListener('mouseover',function(e) {
    addHighlight(e.target);
});

window.addEventListener('mouseout',function(e) {
    removeHighlight(e.target);
});