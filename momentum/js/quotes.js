const quotes = [
    {
        quote: "The way to get started is to quit talking and begin",
        author: "Walt Disney",
    },

    {
        quote: "Sooner or later we all quote our mothers.",
        author: "Bern Williams",
    },

    {
        quote: "It's not that I'm so smart , it's just that I stay with problems longer.",
        author: "Albert Einstein",
    },

    {
        quote: "He that is busy is tempted by but one devil; he that is idle, by a legion.",
        author: "Thomas Fuller",
    },

    {
        quote: "Happiness lies in the joy of achievement and the thrill of creative effort.",
        author: "Franklin D. Roosevelt",
    },

    {
        quote: "Running cross country is the closest man will ever get to flying.",
        author: "Thomas Fuller",
    },

    {
        quote: "The Bible promises no loaves to the loafer.",
        author: "Unknown",
    },

    {
        quote: "What is written without effort is in general read without pleasure.",
        author: "Samuel Johnson",
    },

    {
        quote: "It is a bad plan that admits of no modification.",
        author: "Publilius Syrus",
    },

    {
        quote: "tter than a perfect plan next week.",
        author: "George S. Patton",
    },


]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;