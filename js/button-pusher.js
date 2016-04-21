var pusher = new Pusher('087e104eb546157304a9', {cluster:'eu'});
var button = pusher.subscribe('button');

button
  .bind('press', function(data) {
    console.log('down with' + data);
     if(currentstate == states.ScoreScreen) {
       $("#replay").click();
    } else {
       screenClick();
     }

  });



/* some other handy things */

// button release:
button
  .bind('release', function(data) {
    console.log('up with' + data);
  //   output.innerText = "⬆️\n" +
  //     JSON.stringify(data, null, 2);
  });


// pusher connection:
pusher.connection
  .bind('connected', function(){
    console.log("connected");
  });
