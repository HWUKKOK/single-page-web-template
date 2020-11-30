document.addEventListener('DOMContentLoaded', function(){
    // Use The Fetch API
    fetch('data.json')
    .then(data => data.json())
    .then(result => console.log(result));

});