//var p;

window.onload = function () {

//Check if there is already a session, if not... it will create a few hardcoded blogposts

    if (!sessionStorage.getItem('Posts')) {
        //hardcoded posts for show
        var Posts =
            [
                post = {
                    render: fn,
                    Onderwerp: "Post 1",
                    Schrijver: "Nelis",
                    Content: "sadfuiahd hdfgiuhsd fgijshf is higdogi jo dhdg i dsi lk",
                    beoordeling: "2",
                    Comment: {
                        Comments: [{
                            String: "Comment1",
                            subComments: ["hallo", "Wat leuk", "Goede stelling henk"]
                        }, {String: "Comment2", subComments: ["Dit", "Zijn", "Subcomments"]}]
                    }


                }
                ,
                post = {
                    render: fn,
                    Onderwerp: "Post 2",
                    Schrijver: "Nelisssss",
                    Content: "Dit is de 2e post",
                    beoordeling: "5",
                    Video: "https://www.youtube.com/watch?v=kvKSBzaimUo",
                    Image: "http://www.l1.nl/sites/default/files/imagenodes/donald.jpg",
                    Comment: {
                        Comments: [{String: "Comment1", subComments: []}, {String: "Comment2", subComments: []}]
                    }
                }
            ];
       // p = Posts;
        //save the posts in a session (deleted when the browser closes)
        sessionStorage.setItem("Posts", JSON.stringify(Posts));
    }

    //if there is a session the var "Posts" will be filled with the sessionStorage
    else {
        var Posts = JSON.parse(sessionStorage.getItem('Posts'));
    }

    //Basic Function to render the blogs in place!

    function renderBlog() {
        //var Posts will be updated here
        Posts = JSON.parse(sessionStorage.getItem('Posts'));
        //make an empty string to fill with dynamic HTML
        var str = "";
        //make a for loop which goes around all the posts and will show the posts on the Index.html
        for (i = 0; i < Posts.length; i++) {
            str += fn(Posts[i]);
        }
        document.getElementById('blogs').innerHTML = str;
    }


    //Basic Function to create a posts (has to be called from the form submit function)
    function createPost(onderwerp, schrijver, video, image, content) {
        //new post object will be created
        post = {
            Onderwerp: onderwerp,
            Schrijver: schrijver,
            Video: video,
            Image: image,
            Content: content
        }
        console.log(video);
        //Posts will be updated again
        Posts = JSON.parse(sessionStorage.getItem('Posts'));
        //Posts will get the new post object made before
        Posts.push(post);
        console.log(Posts);

        //Posts will be saved back into the session
        sessionStorage.setItem("Posts", JSON.stringify(Posts));
        //Blogs will be rendered on the page for instant awesomeness!
        renderBlog();
    };

    //this is where all the magic happens (dynamic html creation)
    function fn(post) {
        if (!post.beoordeling) {
            post.beoordeling = "Nog niet beoordeeld";
        }

        var str = "";
        str += '<div class="panel panel-primary">'
        str += '<div class="panel-heading">' + post.Onderwerp + '<span class="pull-right"> Beoordeling: ' + post.beoordeling + '</span></div>'
        str += '<div class="panel-body">'
        str += '<div class="Schrijver">' + '<h4> De auteur van dit bericht heet "' + post.Schrijver + '"</h4> <span class="pull-right"></span> </div>';
        str += '<div class="Content">' + '<p>' + post.Content + '</p>' + '</div>';


        if (!post.Video) {
        } else {
            res = post.Video.replace("watch?v=", "embed/");
            console.log(post.Video);
            console.log(res);
            str += '<iframe width="560" height="315" src="' + res + '" frameborder="0" allowfullscreen></iframe>';
        }
        // kijkt met de if of er een post is bij de if. eigenlijk kijkt hij of hij leeg is. vervolgens in de else maakt hij een img tag aan met een string en zet dat een image input in
        if (!post.Image) {
        } else {
            str += '<img width="10%" src="' + post.Image + '"></img>';
        }

        str += '</div></div> Beoordeling: ';
        str += '<label class="radio-inline"><input type="radio" name="rateradio"> 1</label>';
        str += '<label class="radio-inline"><input type="radio" name="rateradio"> 2</label>';
        str += '<label class="radio-inline"><input type="radio" name="rateradio"> 3</label>';
        str += '<label class="radio-inline"><input type="radio" name="rateradio"> 4</label>';
        str += '<label class="radio-inline"><input type="radio" name="rateradio"> 5</label>';
        str += '<input type="submit" id="submitRadio" class="btn btn-info marginleft" form="radioform" value="Verzend"><hr>';
        str += '<div class="panel panel-info">'
        str += '<div class="panel-heading">Comments for ' + post.Onderwerp + '</div>'
        str += '<div class="comment">';

        if (post.Comment) {
            if (post.Comment.Comments) {
                for (y = 0; y < post.Comment.Comments.length; y++) {
                    str += post.Comment.Comments[y].String + '';

                    if (post.Comment.Comments[y].subComments) {
                        str += '<div class="comments">';
                        for (x = 0; x < post.Comment.Comments[y].subComments.length; x++) {
                            str += post.Comment.Comments[y].subComments[x] + '</br>'
                        }
                        str += '<form id="singleform">'
                        str += '<input type="text" id="singleComment" name="singleComment">'
                        str += '<button type="button" onclick="saveComment(' + post + '" class="btn btn-info marginleft" value="Verzend">Verzend</button>';
                        str += '</form>'
                        str += '</div><hr>';
                    }
                }
            }
        }
        str += '<form id="multipleform">'
        str += '<input type="text" id="moreComment" name="moreComment">'
        str += '<button type="button" onclick="saveComments(' + post + '" class="btn btn-info marginleft" value="Verzend">Verzend</button>';
        str += '</form>'

        str += '</div></div><hr>';
        return str;

    };
    //this function has to be called in the beginning of every page refresh to show the blogs
    renderBlog();
    //radiobuttons on click have to change the rating

    function putBeoordeling(post) {
        console.log(post);
        //post.beoordeling = beoordeling;
    }

    //this function will be called when the submit button on index.html will be clicked
    document.getElementById('blogForm').onsubmit = function () {
        console.log("new blog");
        //values will be taken from the inputs
        onderwerptemp = document.getElementById("onderwerp").value;
        schrijvertemp = document.getElementById("schrijver").value;
        contenttemp = document.getElementById("content").value;
        videotemp = document.getElementById("video").value;
        imagetemp = document.getElementById("image").value;

        //calls the createpost function with the inputs as parameters
        createPost(onderwerptemp, schrijvertemp, videotemp,imagetemp, contenttemp );
    };
};



