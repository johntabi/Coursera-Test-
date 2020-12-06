(function () {

    var names = ["Yaakov", "John", "Jade", "Jill", "Peter", "Dave", "Leana", "Peter", "Loretta", "Joe"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();