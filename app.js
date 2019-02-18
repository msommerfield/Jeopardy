// console.log('hola')

//prompt(whats your name?) assign to a button
//create a start button and have it begin the game
//connect player one to their score and player two to their score
//use modals to assign answers & questions 
// $("#fade").modal({
//     fadeDuration: 100
//   });
//include the content in the model on the main page

// ****Overall Questions for the $200 row
let twohundredpointquestions = {
    twoo: {
        question: "This is the first line of an HTML file",
        rightanswer: "What is  <!doctype html> ?",
        wronganswer: [
            "What is <doctype html>?",
            "What is <doctype html!>?"
        ]
    },
    twoone: {
        question: " Inline - by using the style attribute in HTML elements, Internal - by using a <style> element in the <head> section, External - by using an external CSS file ",
        rightanswer: "What are the ways CSS can be added to HTML elements? ",
        wronganswer: [
            "What are the ways CSS creates variables?",
            "What are the the ways jQuery can be added to HTML elements?"
        ]
    },
    twotwo: {
        question: "const variableName;",
        rightanswer: "How do you declare a constant in Javascript?",
        wronganswer: [
            "How do you declare a variable in Javascript?",
            "How do you declare an Object in Javascript?"
        ]
    },
    twothree: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    twofour: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    twofive: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    }
}
// ****Overall Questions for the $400 row
let fourhundredpointquestions = {
    fouro: {
        question: "src, alt, href are examples of HTML this",
        rightanswer: "What is an attribute?",
        wronganswer: [
            "What is an object?",
            "What is an symbol? "
        ]
    },
    fourone: {
        question: "#",
        rightanswer: "What character will target the ID of an HTML element with a CSS selector?",
        wronganswer: [
            "What character will target the class of an HTML element with a CSS selector?",
            "What character will target the object of an HTML element with a CSS selector?"
        ]
    },
    fourtwo: {
        question: "// for a single line /* for multiple lines */",
        rightanswer: " How do you comment out in Javascript code?",
        wronganswer: [
            "How do you add a function?",
            "How do you indent in Javascript?"
        ]
    },
    fourthree: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    fourfour: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    fourfive: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    }
}
// ****Overall Questions for the $600 row
let sixhundredpointquestions = {
    sixo: {
        question: "This element will create a hyperlink on a webpage that when clicked will take the user to google.com? ",
        rightanswer: "<a href="http://www.google.com">Google</a>",
        wronganswer: [
            "<a Google = “http://www.google.com”> </a>",
            "<a src= “http://www.google.com”> Google</a>"
        ]
    },
    sixone: {
        question: "width, color, font-size, opacity",
        rightanswer: "What are CSS properties?",
        wronganswer: [
            "What are CSS elements?",
            "What are CSS objects?"
        ]
    },
    sixtwo: {
        question: "Strings, Numbers, Boolean, Undefined, & Null",
        rightanswer: "What are the five primitive data types in Javascript?",
        wronganswer: [
            "What are the five primitive data sets in Javascript?",
            "What are the attributes of a REPL?"
        ]
    },
    sixthree: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    sixfour: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    sixfive: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    }
}
// ****Overall Questions for the $800 row
let eighthundredpointquestions = {
    eighto: {
        question: "This is the correct HTML for inserting an image.",
        rightanswer: "What is <img src="image.gif" alt=“MyImage">?",
        wronganswer: [
            "What is <alt=“MyImage"img src="image.gif" >? ",
            "What is<img href="image.gif" alt=“MyImage">?"
        ]
    },
    eightone: {
        question: "CSS stands for this",
        rightanswer: "Cascading Style Sheets",
        wronganswer: [
            "Cascading Still Sheets",
            "Cascading Styling Sheets"
        ]
    },
    eighttwo: {
        question: " Not using these means that you can't start a line of code with (, [, or a backtick (`)",
        rightanswer: "What is ending each line with semicolons?",
        wronganswer: [
            "What is ending each line with commas?",
            "What is ending each line with colons?"
        ]
    },
    eightthree: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    eightfour: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    eightfive: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    }
}
// ****Overall Questions for the $1000 row
let thousandpointquestions = {
    thousando: {
        question: " <h1>Haaay</h1>  <h1 id=“Yo">Haay</h1> ",
        rightanswer: "How do you rewrite the element with an added ID?",
        wronganswer: [
            "How do you write an element with an added class?",
            "How do you rewrite the element to make it larger?"
        ]
    },
    thousandone: {
        question: "Each specified property is given this, which indicates how you want to change those stylistic features (e.g. what you want to change the font, width or background color to.) ",
        rightanswer: "Value",
        wronganswer: [
            " Property",
            "Declaration"
        ]
    },
    thousandtwo: {
        question: "Functions that you can run to perform certain operations",
        rightanswer: "What are methods?",
        wronganswer: [
            "What are variables?",
            "What are objects?"
        ]
    },
    thousandthree: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    thousandfour: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    },
    thousandfive: {
        question: "some question",
        rightanswer: "thats right",
        wronganswer: [
            "wrong answer 1",
            "wrong answer 2"
        ]
    }
}

// calling myModal $("#myModal").modal()

// $('.box').on('click', function(evt) {
//     let questionId = evt.target.id;
//     console.log(questionId)
// })

// twohundredpointquestions.twoo.question;
// twohundredpointquestions.twoo.rightanswer;
//twohundredpointquestions.twoo.wronganswer;

//work on builsing out content for questions and models and how to call them in javascript with .append jqery dom insertions
//objects in space 
