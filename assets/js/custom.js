/* ----------------------------
/*  Name: richtext
    Author: 
    Version: 
/* -------------------------- */


let optionButton = document.getElementById('.option-button');
let advancedOptions = document.getquerySelctorAll('adv-option-button');
let fontName = document.getElementById('fontName');
let fontSizeRf = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');
let linkButton = document.getElementById("create-link");
let alignButtons = document.querySelectorAll('.align');
let spaceButton = document.querySelectorAll('.spacing');
let formatButton = document.querySelectorAll('.format');
let scriptButton = document.querySelectorAll('.script');


// list of fontlist

let fontlist = [
    'Arial',
    'Arial Black',
    'Comic Sans MS',
    'Courier New',
    'Georgia',
    'Helvetica',
    'Impact',
]


// Initial Settings
const initializer = () => {
    // function calls for highlighting buttons
    //No highlights for link, unlink, lists, undo, redo
    //since they are one time operations
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true)
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

}

