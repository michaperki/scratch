var userSelection = document.getElementsByName('user');

for (var i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener('change', function() {
        updateUI(this.id)
    });
}

function updateUI(id) {

    artistForm = document.getElementById('artist-form');
    studioForm = document.getElementById('studio-form');

    if (id == 'artist') {
        artistForm.style.display = 'block';
        studioForm.style.display = 'none';
    }
    else if (id == 'studio') {
        artistForm.style.display = 'none';
        studioForm.style.display = 'block';
    }

}

