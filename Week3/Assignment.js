function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(xhttp.responseText)
      showData(data.results)
    }
    };
    function showData(data){
      for(i = 0; i < data.length; i++){
      const pokemon = document.createElement("h1")
      pokemon.innerHTML = data[i].name
      document.body.appendChild(pokemon)
      console.log(data)
      }
  }
  } 
  // Do i even have this written right? I looked on w3 schools, and i think i have this all right, but i can't get it to load either
  loadDoc()