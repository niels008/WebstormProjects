// postsDiv moet boven in de body staan zodat hij eerst de posts div ziet en vervolgens gebruik maakt van main.js
// zorgt ervoor dat je het DOM bestand inlaad.
var postsDiv = document.getElementById("posts");

// plaatst de html content in de div
// maken een div die niet aan de DOM vast zit
postsDiv.innerHTML = document.createElemnt("div");

// zet content in postdiv....
postDiv.innerHTML = "Post Content";

// maakt een child binnen een div dus een div in een div
postsDiv.appendChild(postDiv);