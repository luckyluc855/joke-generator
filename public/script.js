let jokes = [
    "Why do bees have sticky hair? Because they use honeycombs.",
    "How do trees get online? They log on.",
    "What's Forest Gump's password? 1Forest1",
    "Why don't crabs donate to charity? Because They're shelfish.",
    "Why can't you hear a pterodactyl go to the bathroom? The P is silent."
];

function newJoke() {
    let randomNumber = Math.floor(Math.random() * jokes.length);
    document.getElementById('displayJokes').innerHTML = jokes[randomNumber];
}