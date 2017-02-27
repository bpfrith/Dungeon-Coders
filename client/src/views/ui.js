var GameDataRequester = require('../models/gameDataRequester')

var UI = function(){
  var gameDataRequester = new GameDataRequester();
  gameDataRequester.all(function(results){
    this.render(results);
  }.bind(this));
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(games){
    var container = document.querySelector('#games');
    games.forEach(function(game){
      var li = document.createElement('li');
      var button = document.createElement('button');
      var image = document.createElement('img');

      this.appendText(li, game.year, "");

      var total = 10;
      for(var i = 0; i < total; i++){ 
        var br = document.createElement("br");
        li.appendChild(br);   
};
     


      image.src = game.img;  
      li.appendChild(image);
      container.appendChild(li);

      // Get the modal
      var modal = document.getElementById('myModal');
      var container2 = document.querySelector('#modal-content');
      var container3 = document.querySelector('p');
        var p = document.createElement('p');
        this.appendText(p, game.year, "");
        this.appendText(p, game.console, "");
        this.appendText(p, game.HardwareSpec, "");
        this.appendText(p, game.UnitSales, "");
        this.appendText(p, game.copy, "");

        container.appendChild(p);



        image.onclick = function() {
          modal.style.display = "block";
          container3.style.display = "block";
        }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }



      // this.appendText(li, game.console, "console: ");
      // this.appendText(li, game.HardwareSpec, "Hardware Spec: ");
      // this.appendText(li, game.UnitSales, "unit sales: ");
      // this.appendText(li, game.copy, "copy: ");
      // image.src = game.img;     
      // li.appendChild(image);
      container.appendChild(li);
    }.bind(this));
  },

  // render2: function(games){
  //   var container = document.querySelector('#explain');
  //   games.forEach(function(game){
  //     var li = document.createElement('li');
  //     this.appendText(li, game.year, "year: ");
  //     container.appendChild(li);
  //   }.bind(this));
  // },
}

// wtf
module.exports = UI;

