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

// wire up the form, which has an action="subscribe"
//  <input type="submit" value="Subscribe" class="btn" />


// Path: subscribe.js
var subscribeForm = document.getElementById('subscribe-form');

subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // when the form is submitted, grab the email address
    // and send an email to mperkins1995@gmail.com with the email address

    var email = document.getElementById('email').value;

    var data = {
        email: email
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/subscribe', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    // make a route in app.js that will handle this request


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Email sent!');
        }
    }


});