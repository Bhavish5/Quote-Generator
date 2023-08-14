var quotes = ["You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
    "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
    "Great things in business are never done by one person. They're done by a team of people.",
    "Sometimes life hits you in the head with a brick. Don't lose faith.",
    "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
    "Stay hungry, stay foolish.",
    "Innovation distinguishes between a leader and a follower.",
    "It's not a faith in technology. It's faith in people.",
    "Design is not just what it looks like and feels like. Design is how it works.",
    "An iPod, a phone, an internet mobile communicator... these are NOT three separate devices! And we are calling it iPhone! Today Apple is going to reinvent the phone. And here it is.",
    "Things don't have to change the world to be important.",
    "Computers themselves, and software yet to be developed, will revolutionize the way we learn.",
    "If you're gonna make connections which are innovative... you have to not have the same bag of experiences as everyone else does."
]
generate();
function generate() {
    var n = Math.round(Math.random()*14);
    var quote = document.getElementById("quote");
    quote.innerHTML = quotes[n]
}