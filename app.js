// console.log('hola')
let totalscore = 0
let playertwoscore = 0
let currentquestion = {}
let counter = 2
let playerone = $('.names')
let playertwo = $('.namess')

// ****Overall Questions for the $200 row
let gamequestions = {
    twoo: {
        question: "This is the first line of an HTML file",
        rightanswer: "What is  <!doctype html> ?",
        wronganswer: [
            "What is <doctype html>?",
            "What is <doctype html!>?"
        ],
        pointvalue: 200
    },
    twoone: {
        question: " Inline - by using the style attribute in HTML elements, Internal - by using a <style> element in the <head> section, External - by using an external CSS file ",
        rightanswer: "What are the ways CSS can be added to HTML elements? ",
        wronganswer: [
            "What are the ways CSS creates variables?",
            "What are the the ways jQuery can be added to HTML elements?"
        ],
        pointvalue: 200
    },
    twotwo: {
        question: "const variableName;",
        rightanswer: "How do you declare a constant in Javascript?",
        wronganswer: [
            "How do you declare a variable in Javascript?",
            "How do you declare an Object in Javascript?"
        ],
        pointvalue: 200
    },
    twothree: {
        question: "This is the process of making a JavaScript file smaller by, among other things, removing all line breaks and whitespace, reducing the length of variable and function names, and stripping out all comments.",
        rightanswer: "What is Minification?",
        wronganswer: [
            "What is Uncompressed?",
            "What is the DOM?"
        ],
        pointvalue: 200
    },
    twofour: {
        question: `Special characters for formatting in strings that can also be applied within quotes that can't be entered the same way as you would in a word processor, including "\\n" = new line and  // "\\t" = tab.`,
        rightanswer: "What are escape sequences?",
        wronganswer: [
            "What are input sequences?",
            "What is concatenation?"
        ],
        pointvalue: 200
    },
    twofive: {
        question: "Where you reference a variable within a string by using back ticks for the entire string, and put a dollar sign with curly brackets around the variable.",
        rightanswer: "What is interpolation?",
        wronganswer: [
            "What is referencing?",
            "What is concatenation?"
        ],
        pointvalue: 200
    },
    // ****Overall Questions for the $400 row
    fouro: {
        question: "src, alt, href are examples of HTML this",
        rightanswer: "What is an attribute?",
        wronganswer: [
            "What is an object?",
            "What is an symbol? "
        ],
        pointvalue: 400
    },
    fourone: {
        question: "#",
        rightanswer: "What character will target the ID of an HTML element with a CSS selector?",
        wronganswer: [
            "What character will target the class of an HTML element with a CSS selector?",
            "What character will target the object of an HTML element with a CSS selector?"
        ],
        pointvalue: 400
    },
    fourtwo: {
        question: "// for a single line /* for multiple lines */",
        rightanswer: " How do you comment out in Javascript code?",
        wronganswer: [
            "How do you add a function?",
            "How do you indent in Javascript?"
        ],
        pointvalue: 400
    },
    fourthree: {
        question: "In jQuery syntax you can use these selectors to select an element.",
        rightanswer: "CSS",
        wronganswer: [
            "SQL",
            "HTML"
        ],
        pointvalue: 400
    },
    fourfour: {
        question: "Its best practice to minimize the use of these, they can easily be overwritten by other scripts.",
        rightanswer: "What are global variables?",
        wronganswer: [
            "What are local variables?",
            "What are elements?"
        ],
        pointvalue: 400
    },
    fourfive: {
        question: "These are used to determine the logic between values or variables. There are three common types: !, &&, and || ",
        rightanswer: "What are logical operators? ",
        wronganswer: [
            "What are native operations",
            "What are primitive operators??"
        ],
        pointvalue: 400
    },
    // ****Overall Questions for the $600 row
    sixo: {
        question: "This element will create a hyperlink on a webpage that when clicked will take the user to google.com? ",
        rightanswer: `<a href="http://www.google.com">Google</a>`,
        wronganswer: [
            "<a Google = “http://www.google.com”> </a>",
            "<a src= “http://www.google.com”> Google</a>"
        ],
        pointvalue: 600
    },
    sixone: {
        question: "width, color, font-size, opacity",
        rightanswer: "What are CSS properties?",
        wronganswer: [
            "What are CSS elements?",
            "What are CSS objects?"
        ],
        pointvalue: 600
    },
    sixtwo: {
        question: "Strings, Numbers, Boolean, Undefined, & Null",
        rightanswer: "What are the five primitive data types in Javascript?",
        wronganswer: [
            "What are the five primitive data sets in Javascript?",
            "What are the attributes of a REPL?"
        ],
        pointvalue: 600
    },
    sixthree: {
        question: "We manipulate these methods in the DOM to update or change content",
        rightanswer: "What is html() and text()?",
        wronganswer: [
            "What is  before() and after()?",
            "What is prepend() and append()?"
        ],
        pointvalue: 600
    },
    sixfour: {
        question: "This is used on variables that will not be changed in your JavaScript code.",
        rightanswer: "What is const?",
        wronganswer: [
            "What is let?",
            "What is var?"
        ],
        pointvalue: 600
    },
    sixfive: {
        question: "This  implies nothing because it never was anything while its counterpart implies explicitly set to nothing at all.",
        rightanswer: "What is undefined?",
        wronganswer: [
            "What is null?",
            "wWhat is a variable?"
        ],
        pointvalue: 600
    },
    // ****Overall Questions for the $800 row
    eighto: {
        question: "This is the correct HTML for inserting an image.",
        rightanswer: `"What is <img src equals "image dot gif" alt=“MyImage">?"`,
        wronganswer: [
            `"What is <alt=“MyImage"img src="image.gif">?"`,
            `"What is<img href="image.gif" alt=“MyImage">?"`
        ],
        pointvalue: 800
    },
    eightone: {
        question: "CSS stands for this",
        rightanswer: "Cascading Style Sheets",
        wronganswer: [
            "Cascading Still Sheets",
            "Cascading Styling Sheets"
        ],
        pointvalue: 800
    },
    eighttwo: {
        question: " Not using these means that you can't start a line of code with (, [, or a backtick (`)",
        rightanswer: "What is ending each line with semicolons?",
        wronganswer: [
            "What is ending each line with commas?",
            "What is ending each line with colons?"
        ],
        pointvalue: 800
    },
    eightthree: {
        question: "This common mistake beginners often make when using these methods entail the name of the class not including a period (.).",
        rightanswer: "What are removeClass() and addClass()?",
        wronganswer: [
            "What are removeAttr() and addAttr()?",
            "What are properties() and attributes()?"
        ],
        pointvalue: 800
    },
    eightfour: {
        question: "This can convert the data automatically to a boolean which will come back as false if it showcases any of these values: 0,””, null, NaN, or undefined.",
        rightanswer: "What is “!!” operator?",
        wronganswer: [
            "What is “&&” operator?",
            "What is “%%” operator"
        ],
        pointvalue: 800
    },
    eightfive: {
        question: "This allows an expression to be expanded into multiple elements and is useful for separating an array into individual elements.",
        rightanswer: "What is the Spread Operator? ",
        wronganswer: [
            "What are Array Methods?",
            "What are Data Type Objects?"
        ],
        pointvalue: 800
    },
    // ****Overall Questions for the $1000 row
    thousando: {
        question: `"<h1>Haaay</h1>  <h1 id=“Yo">Haay</h1>"`,
        rightanswer: "How do you rewrite the element with an added ID?",
        wronganswer: [
            "How do you write an element with an added class?",
            "How do you rewrite the element to make it larger?"
        ],
        pointvalue: 1000
    },
    thousandone: {
        question: "Each specified property is given this, which indicates how you want to change those stylistic features (e.g. what you want to change the font, width or background color to.) ",
        rightanswer: "Value",
        wronganswer: [
            " Property",
            "Declaration"
        ],
        pointvalue: 1000
    },
    thousandtwo: {
        question: "Functions that you can run to perform certain operations",
        rightanswer: "What are methods?",
        wronganswer: [
            "What are variables?",
            "What are objects?"
        ],
        pointvalue: 1000
    },
    thousandthree: {
        question: "This open source software is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications.",
        rightanswer: "What is jQuery?",
        wronganswer: [
            "What is the DOM?",
            "What is event handler?"
        ],
        pointvalue: 1000
    },
    thousandfour: {
        question: "This method fills all the elements of an array from a start index to an end index with a static value. The end index is not included",
        rightanswer: "What is the fill() method?",
        wronganswer: [
            "What is the sort() method?",
            "What is the flex() method"
        ],
        pointvalue: 1000
    },
    thousandfive: {
        question: "jQuery was created in this year.",
        rightanswer: "What is 2006?",
        wronganswer: [
            "What is 2008?",
            "What is 2004?"
        ],
        pointvalue: 1000
    }
}
function hideGame() {
    $('.gameboard').hide()
}

function displayQuestion(event) {
    // console.log("The id of the box we clicked on is: ", event.target.id);
    // hideGame();
    $('.gameboard').hide()
    $('#questionContainer').show()
    // SHOW QUESTION THAT WAS CLICKED
    // console.log(gamequestions[event.target.id])
    currentquestion = gamequestions[event.target.id]
    $("#question").append(gamequestions[event.target.id].question)
    let cardId = event.target.id 
    console.log(event.target.id)
    let btn = $('<button class="right"></button>')
    let right = gamequestions[event.target.id].rightanswer
    btn.text(right)
    console.log(right)


    $("#question").append(btn)
    $(`#${cardId}`).addClass('dissapear')
    for (let i = 0; i < gamequestions[event.target.id].wronganswer.length; i++) {
        let btn2 = $('<button class="wrong"></button>')
        btn2.text(gamequestions[event.target.id].wronganswer[i])
        $("#question").append(btn2)
    }
}

document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", displayQuestion);
})

// Add points to score
 $('#questionContainer').on("click",function(e){
    if($(e.target).hasClass('right')){
      console.log(e.target, 'rightanswer');
      if (counter % 2 === 0) {

        totalscore += currentquestion.pointvalue
        $('.score-box').eq(0).html(totalscore) 
      }
      else{
        playertwoscore += currentquestion.pointvalue
        $('.score-box').eq(1).html(playertwoscore) 
      }
      $('#question').text('')
      $('#questionContainer').hide()
     $('.gameboard').show()
    }
  });

  $('#questionContainer').on("click",function(e){
    if($(e.target).hasClass('wrong')){
        if (counter % 2 === 0) {
        playerone = playerone.css("background-color", "black")
        counter += 1
        playertwo = playertwo.css("background-color", "grey")
        } else {
            playertwo = playertwo.css("background-color", "black")
            playerone = playerone.css("background-color", "grey") 
            counter += 1
        }

        $('#question').text('')
      $('#questionContainer').hide()
     $('.gameboard').show()
     console.log(e.target)
    $(e.target).css("visibility", "hidden")
    }
  });
