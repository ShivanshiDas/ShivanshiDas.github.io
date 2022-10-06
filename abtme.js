
var facts = [
    "I am a junior in highschool.",
    "I love tiramisu.",
    "I like playing tennis in my free time.",
    "I love minions.",
    "I enjoy biking in my free time.",
    "I know 3.5 languages (Oriya, English, Hindi, 1/2(Spanish)).",
    "I have a younger sister.",
    "My favorite color is pink.",
    "I like doing mehendi (henna) in my free time. Follow my mehendi account on Instagram @mehendibyshivanshi :)",
    "I enjoy making art.",
    "I have been practicing Odissi, and Indian classical dance form, since the age of 7.",
    "I love cleaning.",
    "I cannot cook to save my life.",
    "I have 2 pet turtles.",
    
    
]

var members = [
    "Layne Yarbrough", "Kripa Tailor", "Srisaivikas Munagala"]

function newFact(){
    var randomNumber = Math.floor(Math.random()*facts.length);
    document.getElementById("facts").innerHTML = facts[randomNumber];
}

function newMember(){
    var randomNumber = Math.floor(Math.random()*members.length);
    document.getElementById("members").innerHTML = members[randomNumber];
}



    
