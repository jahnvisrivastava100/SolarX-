// a = {
//     show: function(elem) {
//         document.getElementById(elem).style.visibility = 'visible';
//     },
//     hide: function(elem) {
//         document.getElementById(elem).style.visibility = 'hidden';
//     }
// }
// b = {
//     show: function(elem) {
//         document.getElementById(elem).style.visibility = 'visible';
//     },
//     hide: function(elem) {
//         document.getElementById(elem).style.visibility = 'hidden';
//     }
// }
// function speak(){
// if ('speechSynthesis' in window) {
//     // Speech Synthesis supported 🎉
//    }else{
//      // Speech Synthesis Not Supported 😣
//      alert("Sorry, your browser doesn't support text to speech!");
//    }
// var msg = new SpeechSynthesisUtterance();

// msg.text = " Our universe began with an explosion of space itself - the Big Bang. Starting from extremely high density and temperature, space expanded, the universe cooled, and the simplest elements formed. Gravity gradually drew matter together to form the first stars and the first galaxies. Galaxies collected into groups, clusters, and superclusters.    Some stars died in supernova explosions, whose chemical remnants seeded new generations of stars and enabled the formation of rocky planets. On at least one such planet, life evolved to consciousness.    And it wonders, “Where did I come from?”";
// window.speechSynthesis.speak(msg);

// }



const planet_map = new Map([
  ["mercury", 1],
  ["venus", ],
  ["earth", 1],
  ["mars",0.38],
  ["jupiter",2.34],
  ["saturn",1.06],
  ["uranus",0.92],
  ["neptune",1.19]
]);


function get_weight(){
  const wt_planet = document.getElementById("weight_planet").value;
  const wt_earth = document.getElementById("weight_earth").value;

  const ans = Math.round(planet_map.get(wt_planet)*wt_earth);
  
  document.getElementById("answer").innerHTML="<img  src=assets/"+wt_planet+".png width=`300px` height=`300px` ><h3>Your weight on  "+wt_planet+" will be "+ans+"kg approx.</h3>"
  const speech = "Hola your weight on"+wt_planet+"will be approximately"+ans+"kg";
  speak2(speech);
   
}


a = {
    show: function (elem) {
      document.getElementById(elem).style.visibility = "visible";
    },
    hide: function (elem) {
      document.getElementById(elem).style.visibility = "hidden";
    },
  };
  b = {
    show: function (elem) {
      document.getElementById(elem).style.visibility = "visible";
    },
    hide: function (elem) {
      document.getElementById(elem).style.visibility = "hidden";
    },
  };
























  /*Speech------------------------------------------*/
  // function speak() {
  //   if ("speechSynthesis" in window) {
  //     // Speech Synthesis supported 🎉
  //   } else {
  //     // Speech Synthesis Not Supported 😣
  //     alert("Sorry, your browser doesn't support text to speech!");
  //   }

  //   // Change 1 (To restart the audio)
  //   window.speechSynthesis.cancel();

  //   var msg = new SpeechSynthesisUtterance();
  //   speechSynthesisUtteranceInstance.volume = 5;
  //   msg.text =
  //     " Our universe began with an explosion of space itself - the Big Bang. Starting from extremely high density and temperature, space expanded, the universe cooled, and the simplest elements formed. Gravity gradually drew matter together to form the first stars and the first galaxies. Galaxies collected into groups, clusters, and superclusters.    Some stars died in supernova explosions, whose chemical remnants seeded new generations of stars and enabled the formation of rocky planets. On at least one such planet, life evolved to consciousness.    And it wonders, “Where did I come from?”";
  //   window.speechSynthesis.speak(msg);
  // }

  // Change 2 (To end sound if the page gets reloaded)
  window.addEventListener("load", () => {
    window.speechSynthesis.cancel();
  });
  function speak2(speech) {
    if ("speechSynthesis" in window) {
      // Speech Synthesis supported 🎉
    } else {
      // Speech Synthesis Not Supported 😣
      alert("Sorry, your browser doesn't support text to speech!");
    }

    // Change 1 (To restart the audio)
    window.speechSynthesis.cancel();

    var msg = new SpeechSynthesisUtterance();
    
    msg.text =speech;
     
    window.speechSynthesis.speak(msg);
  }

  // Change 2 (To end sound if the page gets reloaded)
  window.addEventListener("load", () => {
    window.speechSynthesis.cancel();
  });

