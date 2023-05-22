var tabs = document.getElementsByName('tabs');

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('change', function() {
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