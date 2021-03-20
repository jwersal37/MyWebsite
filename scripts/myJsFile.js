    var divContainerStart = '<div class="container"';
    var navbar =  '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">'
    + '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">'
    + '<span class="navbar-toggler-icon"></span>'
    + '</button>'
    + '<div class="collapse navbar-collapse" id="navbarTogglerDemo03">'
    + '<ul class="navbar-nav mr-auto mt-2 mt-lg-0">'
    +    '<li class="nav-item active">'
    +        '<a id="navHome" class="nav-link navLink" onclick="NavFind(this.id)">Home<span class="sr-only">(current)</span></a>'
    +    '</li>'
    +    '<li class="nav-item">'
    +        '<a id="navAboutMe" class="nav-link navLink" onclick="NavFind(this.id)">About Me</a>'
    +    '</li>'
    +    '<li class="nav-item">'
    +        '<a id="navProjects" class="nav-link navLink" onclick="NavFind(this.id)">Projects</a>'
    +    '</li>'
    +    '<li class="nav-item">'
    +        '<a id="navContact" class="nav-link navLink" onclick="NavFind(this.id)">Contact</a>'
    +    '</li>'
    +  '</ul>'
    + '</div>'
    +'</nav>';
 
    var jumbotron = '<div class="jumb">'
   + '<div class="jumbotron HomeContainer">'
   +   '<h1 class="display-4">Hello! Test</h1>'
   +   '<p class="lead">A website for me to store and share projects with.</p>'
   +   '<hr class="my-4">'
   +   '<p>Stuff.</p>'
   +   '<p class="lead">'
   +     '<a class="btn btn-primary btn-lg" href="#" role="button">About Me</a>'
   +   '</p>'
   + '</div>'
   +'</div>';
  
     var aboutMe = '<div class="AboutMeContainer hide container">'
   + '<h1>About Me</h1>'
   + '</div>';
  
  
    var contact = '<div class="ContactContainer hide container">'
    + '<h1>Contact</h1>'
    + '</div>';
  
  
     var projects ='<div class="ProjectsContainer hide container">'
     + '<h1>Projects</h1>'
     + '<li>'
     + '<label>To Do</label>'
     + '</li>'
     + '</div>';
  
     var footer = '<footer class="footer fixed-bottom footerContainer">'
    +'<div class="text-center row">'
    +'<div class="col-sm">'
    +'</div>'
    +'<div class="col-sm">'
    +'<i class="fa fa-git" style="font-size:36px"></i>'
    +'<i class="fa fa-twitter" style="font-size:36px"></i>'
    +'<i class="fa fa-linkedin" style="font-size:36px"></i>'
    +'</div>'
    +'<div class="col-sm">'
    +'</div>'
    +'</div>'
  +'</footer>';

  var divContainerEnd = '</div>';

render();

function render(){
    try{        
        document.getElementById("page").innerHTML = navbar
        + divContainerStart 
        + jumbotron 
        + aboutMe 
        + contact 
        + projects 
        + footer
        + divContainerEnd;
    }
    catch(e){
        console.log(e);
    }
}

function NavFind(navLink){
    try{
        _nlink = navLink;
        if(navbar != null && navbar != 'undefined'){
            navbar = navbar.replace("nav-item active", "nav-item"); //remove active  

            var position = navbar.search('<a id="' + navLink + '"') - 2; //find position of navlink - 2 to move back 2 spots :)

            if(position != null && position != 'undefined'){
                navbar = [navbar.slice(0, position), " active", navbar.slice(position)].join(''); //add active
            }        
            else{
                console.log("position is null/undefined");
            }

            showHide(navLink);
            render();    
        }else{
            console.log("navbar null/undefined")
        }
    }catch(e){
        //TODO: errorhandling
        console.log(e);
    }
}

function showHide(navLink){
    try{
        var posContainer = '';

        var posContainerArr = ['HomeContainer', 'AboutMeContainer', 'ContactContainer', 'ProjectsContainer'];
        var posNavList = ['navHome', 'navAboutMe', 'navContact', 'navProjects'];
    
        console.log(posContainer);

        posNavList.forEach(function (item, index) {
            hideWithForeach(navLink, item, index)
        });
    }
    catch(e){
        console.log(e);
    }

    function hideWithForeach(navLink, item, index){
        try{
            if(item == 'navHome'){
                var pozCheck = jumbotron.search("jumbotron HomeContainer hide");
                if(pozCheck < 0){
                    jumbotron = jumbotron.replace("jumbotron HomeContainer", "jumbotron HomeContainer hide"); //hide doesnt exist add
                }
                else if(navLink == 'navHome'){
                    var pozCheck = jumbotron.search("HomeContainer");
                    if(pozCheck > 0){
                        jumbotron = jumbotron.replace("jumbotron HomeContainer hide", "jumbotron HomeContainer"); //hide doesnt exist add
                    } 
                }
                else {
                    console.log("Home hide found and not selected");
                }
            }
            else if(item == 'navAboutMe'){
                var pozCheck = aboutMe.search("AboutMeContainer hide");
                if(pozCheck < 0){
                    aboutMe = aboutMe.replace("AboutMeContainer container", "AboutMeContainer hide container");
                }
                else if(navLink == 'navAboutMe'){
                    var pozCheck = aboutMe.search("AboutMeContainer");
                    if(pozCheck > 0){
                        aboutMe = aboutMe.replace("AboutMeContainer hide container", "AboutMeContainer container"); //hide doesnt exist add
                    } 
                }
                else{
                    console.log("about me hide found and not selected")
                }
            }
            else if(item == 'navContact'){
                var pozCheck = contact.search("ContactContainer hide");
                if(pozCheck < 0){
                    contact = contact.replace("ContactContainer container", "ContactContainer hide container");
                }
                else if(navLink == 'navContact'){
                    var pozCheck = contact.search("ContactContainer");
                    if(pozCheck > 0){
                        contact = contact.replace("ContactContainer hide container", "ContactContainer container"); //hide doesnt exist add
                    } 
                }
                else{
                    console.log("contact hide found and not selected")
                }
            }
            else if(item == 'navProjects'){
                var pozCheck = projects.search("ProjectsContainer hide");
                if(pozCheck < 0){
                    projects = projects.replace("ProjectsContainer container", "ProjectsContainer hide container");
                }
                else if(navLink == 'navProjects'){
                    var pozCheck = projects.search("ProjectsContainer");
                    if(pozCheck > 0){
                        projects = projects.replace("ProjectsContainer hide container", "ProjectsContainer container"); //hide doesnt exist add
                    } 
                }
                else{
                    console.log("projects hide foundand not selected")
                }
            }
            else{
                console.log('...');
            }        
        }
        catch(e){
            console.log(e);
        }
    }
}