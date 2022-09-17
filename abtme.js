
var facts = [
    "I am a junior in highschool.",
    "I love tiramisu.",
    "I like playing tennis in my free time.",
    "I love minions.",
    "I enjoy biking in my free time.",
    "I know 3.5 languages.",
    "I have a younger sister.",
    "My favorite color is pink.",
    "I like doing mehendi (henna) in my free time.",
    "I enjoy making art."
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



    
