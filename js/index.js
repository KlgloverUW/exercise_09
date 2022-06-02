/* #2 practicing with JavaScript*/
let myName = "Kristin Glover";
console.log(myName);

/*3 practicing functions in JavaScript*/
function getVowelCount(aString) {
    let lowerCaseString = aString.toLowerCase();
    let modifiedString = lowerCaseString.replaceAll("a", "").
    replaceAll("e", "").
    replaceAll("i", "").
    replaceAll("o", "").
    replaceAll("u", "").
    replaceAll("y", "");
    let stringsMinus = (lowerCaseString.length - modifiedString.length);
    return stringsMinus
};

let numVowelsIsInName = getVowelCount(myName);
console.log(numVowelsIsInName);

/* #5 defining h1 element and changing text*/
let h1Element = $('h1');
h1Element.text("Interactive Pet Viewer");

/* #6 defining footer element and adding content*/  
let footerElement = $('footer');
footerElement.html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>');

/* #7 attempting to set cats display to none but not working*/
$('div.#btnShowDogs').on('click', function() {
    $('div.#cats').hide();
    $('div.#btnShowDogs').addClass('active');
});

/* #8 trying to add interactivity to buttons group but not working*/
let buttonGroup = $('div.btn-group');
buttonGroup.on('click', function() {
    $('div.#cats').toggle();
    $('div.#dogs').toggle();
    buttonGroup.click(function() {
        buttonGroup.toggleClass('active'); 
});

/* #9 trying to make pointers hover but not working */
$('#images').hover(function() {
    $('#images').css('cursor', 'pointer');
});


/* #12 trying to make images open the modal but not working */
function modalImages() {
    imgs.attr("data-bs-toggle-modal");
    imgs.attr("data-bs-target");    
};

/* #13 specify src alt for the images */
