getPlayer();
function getPlayer() {
  let apiURL =
    "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal";

  let players = [];
  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.player.forEach(function(player) {
        playerGender(player.strPlayer.split(" ")[0]);
      });
    })
    .catch(err => {
      console.log(`error ${err}`);
      alert("sorry, there are no results for your search");
    });
}
function playerGender(name) {
  let apiURL = "https://api.genderize.io/?name=" + name;

  fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      let listItem = document.createElement("li");
      document.querySelector("ul").appendChild(listItem);
      listItem.innerHTML =
        name + ". The AI predicted gender of this actor is " + response.gender;
    });
}
