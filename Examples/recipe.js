function httpRequest(evt) {
    //show headline and div as placeholder
    var h4Search = document.getElementById("h4Search");
    h4Search.style.display = "block";
    imageContainer.style.display = "block";
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var arrayJSON = JSON.parse(this.responseText);
        //var arrayJSON = JSON.parse(test);
        console.log(arrayJSON);
        //delete old results
        imageContainer.innerHTML = "";
        arrayJSON.recipes.forEach(element => {
          var imageContent = document.createElement("div");
          imageContent.setAttribute("id", element.recipe_id);
          imageContent.setAttribute("class", "imageContent");
          imageContent.innerHTML = '<a href = "' + element.f2f_url + '" class="recipe-link"><img src="' + element.image_url + '"><span class="recipe-name">' + element.title + '</span></a><br>'
          imageContent.setAttribute("draggable", "true");
          imageContainer.appendChild(imageContent);
        });
        imageContentsArray = [...document.querySelectorAll('.imageContent')];
        addEventListeners(); //for drag n drop
      }
    };
    xhttp.open("GET", "https://www.food2fork.com/api/search?key=782a96db1e3b050be119f58c7fce690d&sort=r&q=" + searchRecipe.value, true);
    xhttp.send();