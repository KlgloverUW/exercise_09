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

/* #7 set cats display to none*/
$('#cats').css("display", "none")

/* active class to dogs*/
$('#btnShowDogs').addClass('active')

/* #8 interactivity to buttons*/
$('div.btn-group').on('click', function() {
    $("#cats", "#dogs").toggle();
    $("#cats", "#dogs").toggleClass('active');
})

/* #9 trying to make pointers hover but not working */
$('#images').hover(function() {
    $('#images').css('cursor', 'pointer');
});
/* #12 trying to make images open the modal but not working */
function modalImages() {
    imgs.attr("data-bs-toggle-modal");
    imgs.attr("data-bs-target");    
};

/* #13 trying to specify src alt for the images but not working*/
let imageClicked = $(event.relatedTarget)
let srcAttr = imageClicked.attr('src', src)
let altAttr = imageClicked.attr('alt', alt)
