const btn = document.getElementById('sign_up_button');

btn.addEventListener('click' , () => {

    const form = document.getElementById('form');
    
    if(form.style.display === 'none') {
        //shows form
        form.style.display = 'block';
    }
    else{
        //hides form
        form.style.display = 'none';
    }
});