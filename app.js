a = {
    show: function(elem) {
        document.getElementById(elem).style.visibility = 'visible';
    },
    hide: function(elem) {
        document.getElementById(elem).style.visibility = 'hidden';
    }
}
b = {
    show: function(elem) {
        document.getElementById(elem).style.visibility = 'visible';
    },
    hide: function(elem) {
        document.getElementById(elem).style.visibility = 'hidden';
    }
}
function speak(){
if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }
var msg = new SpeechSynthesisUtterance();

msg.text = " Our universe began with an explosion of space itself - the Big Bang. Starting from extremely high density and temperature, space expanded, the universe cooled, and the simplest elements formed. Gravity gradually drew matter together to form the first stars and the first galaxies. Galaxies collected into groups, clusters, and superclusters.    Some stars died in supernova explosions, whose chemical remnants seeded new generations of stars and enabled the formation of rocky planets. On at least one such planet, life evolved to consciousness.    And it wonders, “Where did I come from?”";
window.speechSynthesis.speak(msg);

}

