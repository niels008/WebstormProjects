// postsDiv moet boven in de body staan zodat hij eerst de posts div ziet en vervolgens gebruik maakt van main.js
// zorgt ervoor dat je het DOM bestand inlaad.
var postsDiv = document.getElementById("posts");

var posts = [
    {
    "Onderwerp": "<h1>Post 1</h1>",
    "Schrijver": "<h2>Niels de Bont</h2>",
    "Inhoud": "<p>Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.</p>"

    },{
    "Onderwerp": "<h1>Post 2</h1>",
    "Schrijver": "<h2>Niels de Bont</h2>",
    "Inhoud": "<p>Toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.</p>"
    }
];

// het aanroepen van de verschillende divs die je wil createn en een child maken van posts zodat alles netjes onder elkaar komt in divs.
posts.forEach(function(post) {
    var postDiv = document.createElement("div");
    var postOnderwerpDiv = document.createElement("div");
    var postSchrijverDiv = document.createElement("div");
    var postInhoudDiv = document.createElement("div");
    // laad de inner html van posts buckets
    postOnderwerpDiv.innerHTML = post.Onderwerp;
    postSchrijverDiv.innerHTML = post.Schrijver;
    postInhoudDiv.innerHTML = post.Inhoud;

    postDiv.appendChild(postOnderwerpDiv);
    postDiv.appendChild(postSchrijverDiv);
    postDiv.appendChild(postInhoudDiv);

    postsDiv.appendChild(postDiv);
});