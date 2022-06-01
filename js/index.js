
let myName = "Kristin Glover";
console.log(myName);


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

let h1Element = $('h1');
h1Element.text("Interactive Pet Viewer");

let footerElement = $('footer');
footerElement.html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>');

/*is this right? or should cats be display none?*/
let catsbut = $('#cats');
$('#btnshowDogs').click(function() {
    catsbut.hide();
});
$('#btnShowDogs').addClass('active');

let buttonGroup = $('btn-group mb-2');
buttonGroup.on('click', function() {
    buttonGroup.toggle();
});
buttonGroup.on('click', function() {
    buttonGroup.toggleClass('active')
});

let imgs = $('#images');
function imagePointersFunction() {
    imgs.css('cursor', 'pointer')
};


