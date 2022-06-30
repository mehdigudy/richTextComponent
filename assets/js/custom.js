
let optionButton = document.querySelectorAll('.option-buttonformat');
let advancedOptions = document.querySelectorAll('.adv-option-button');
let fontName = document.getElementById('fontName');
let fontSizeRf = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');
let linkButton = document.getElementById("createLink");
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



const initializer = () => {

    highlighter(alignButtons, true);
    highlighter(spacingButtons, true)
    highlighter(formatButton, false);
    highlighter(scriptButton, true);

    fontlist.map((font) => {
        let option = document.createElement('option');
        option.value = font;
        option.innerText = font;
        fontName.appendChild(option);
    });

    for (let i = 1; i < 7; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        fontSizeRf.appendChild(option);
    }

    fontSizeRf.value = "3";
}

const modifyText = (command, defaultUi, value) => {

    document.execCommand(command, defaultUi, value);



}

optionButton.forEach((button) => {

    button.addEventListener('click', () => {
        modifyText(button.id, false, null);
    });


});


advancedOptions.forEach((button) => {

    button.addEventListener('change', () => {

        modifyText(button.id, false, null);
    });

});

linkButton.addEventListener('click', () => {
    let url = prompt('Enter the URL');

    if (/http/i.test(userLink)) {

        modifyText(linkButton.id, false, userLink);
    } else {
        userLink = 'http://' + userLink;
        modifyText(linkButton.id, false, userLink);

    }



});


const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {

        button.addEventListener('click', () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);

                if (!alreadyActive) {
                    button.classList.add("active");
                }
                else {
                    button.classList.toggle("active");

                }
            }

        });




    })



}

const highlighterRemover = (className) => {

    className.forEach((button) => {
        button.classList.remove("active");
    });
} 
