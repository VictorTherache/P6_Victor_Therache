

function get_best_movies_info() {
    var request = new XMLHttpRequest()
    var image_url_array = []
    var info_array = []
    var global_url = ""
    var btn = document.getElementsByClassName("best_movie");
    for (let i = 1; i < 3; i++) {
        fetch(`http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=${i}`)
        .then( response =>  response.json())
        .then(data => {
            data.results.forEach((movie, index) => {
                fetch(`${movie.url}`)
                .then( response =>  response.json())
                .then( data => {
                    image_url_array.push(`${data.image_url}`)
                    info_array.push(data)
                    let best_movies = document.getElementsByClassName('best_movie')
                    const index = image_url_array.indexOf(null)
                    if (index > -1) {
                        image_url_array.splice(index, 1)
                    }
                    Object.entries(best_movies).forEach(([key, value]) => {
                        if (image_url_array[key] != null) {
                            value.src = image_url_array[key]
                        }
                    })
                    for (let item of btn){
                        item.onclick = function() {
                            var movie_index = item.id.slice(-1)
                            console.log("🚀 ~ modal_window ~ info_array", info_array[movie_index])
                            var modal = document.getElementById("myModal");
                            modal.style.display = "block";
                            var modal_title = document.getElementById("modal_title").innerHTML= `Title : ${info_array[movie_index].title}`
                            var modal_genre = document.getElementById("modal_genre").innerHTML= `Genre : ${info_array[movie_index].genres[0]}`
                            var modal_release_date = document.getElementById("modal_release_date").innerHTML= `Release date : ${info_array[movie_index].date_published}`
                            var modal_rated = document.getElementById("modal_rated").innerHTML= `Rated : ${info_array[movie_index].rated}`
                            var modal_imdb_score = document.getElementById("modal_imdb_score").innerHTML= `Imdb Score : ${info_array[movie_index].imdb_score}`
                            var modal_realisator = document.getElementById("modal_realisator").innerHTML= `Director : ${info_array[movie_index].directors[0]}`
                            var modal_actors = document.getElementById("modal_actors").innerHTML= `Actors : ${info_array[movie_index].actors[0]}`
                            var modal_lenght = document.getElementById("modal_lenght").innerHTML= `Lenght : ${info_array[movie_index].duration}`
                            var modal_title = document.getElementById("modal_origine_country").innerHTML= `Origine Country : ${info_array[movie_index].languages}`
                            var modal_title = document.getElementById("modal_box_office").innerHTML= `Box Office : ${info_array[movie_index].usa_gross_income}`
                            var modal_title = document.getElementById("modal_resume").innerHTML= `Resume : ${info_array[movie_index].description}`
                        }
                    }
                })
            })
        })
        .catch(error => console.error(error))
    }
    return info_array
}

function get_btn_index() {
    var btn = document.getElementsByClassName("best_movie");
    for (let item of btn){
        item.onclick = function() {
            var movie_index = item.id.slice(-1)
            console.log("🚀 ~ get_btn_index ~ movie_index", movie_index)
            return movie_index
          }
    }
}

function get_best_movies_image_url(info_array) {
}

// get_best_movies_image_url(info_array)

function get_best_movie_info() {
    var info_array = []
    for (let i = 1; i < 3; i++) {
        fetch(`http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=${i}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach((item, index) => {
                    fetch(item.url)
                        .then(response => response.json())
                        .then(data => {
                            info_array.push(data)
                        })
                })

            })
            .catch(error => console.error(error))
        return info_array
    }
}


function action_movies() {
    var request = new XMLHttpRequest()
    var image_url_array = []
    for (let i = 1; i < 3; i++) {
        fetch(`http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score&page=${i}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach((item, index) => {
                    image_url_array.push(item.image_url)
                })
                let best_movies = document.getElementsByClassName('action_movie')
                const index = image_url_array.indexOf(null)
                if (index > -1) {
                    image_url_array.splice(index, 1)
                }
                Object.entries(best_movies).forEach(([key, value]) => {
                    if (image_url_array[key] != null) {
                        value.src = image_url_array[key]
                    }
                })
            })
            .catch(error => console.error(error))
    }
}


function action_movies() {
    var request = new XMLHttpRequest()
    var image_url_array = []
    var info_array = []
    var btn = document.getElementsByClassName("action_movie");
    for (let i = 1; i < 3; i++) {
        fetch(`http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=action&page=${i}`)
        .then( response =>  response.json())
        .then(data => {
            data.results.forEach((movie, index) => {
                fetch(`${movie.url}`)
                .then( response =>  response.json())
                .then( data => {
                    image_url_array.push(`${data.image_url}`)
                    info_array.push(data)
                    let best_movies = document.getElementsByClassName('action_movie')
                    const index = image_url_array.indexOf(null)
                    if (index > -1) {
                        image_url_array.splice(index, 1)
                    }
                    Object.entries(best_movies).forEach(([key, value]) => {
                        if (image_url_array[key] != null) {
                            value.src = image_url_array[key]
                        }
                    })
                    for (let item of btn){
                        item.onclick = function() {
                            var movie_index = item.id.slice(-1)
                            console.log("🚀 ~ data.results.forEach ~ movie_index", movie_index)
                            // console.log("🚀 ~ data.results.forEach ~ info_array", info_array[movie_index])
                            var modal = document.getElementById("myModal");
                            modal.style.display = "block";
                            var modal_title = document.getElementById("modal_title").innerHTML= `Title : ${info_array[movie_index].title}`
                            var modal_genre = document.getElementById("modal_genre").innerHTML= `Genre : ${info_array[movie_index].genres[0]}`
                            var modal_release_date = document.getElementById("modal_release_date").innerHTML= `Release date : ${info_array[movie_index].date_published}`
                            var modal_rated = document.getElementById("modal_rated").innerHTML= `Rated : ${info_array[movie_index].rated}`
                            var modal_imdb_score = document.getElementById("modal_imdb_score").innerHTML= `Imdb Score : ${info_array[movie_index].imdb_score}`
                            var modal_realisator = document.getElementById("modal_realisator").innerHTML= `Director : ${info_array[movie_index].directors[0]}`
                            var modal_actors = document.getElementById("modal_actors").innerHTML= `Actors : ${info_array[movie_index].actors[0]}`
                            var modal_lenght = document.getElementById("modal_lenght").innerHTML= `Lenght : ${info_array[movie_index].duration}`
                            var modal_title = document.getElementById("modal_origine_country").innerHTML= `Origine Country : ${info_array[movie_index].languages}`
                            var modal_title = document.getElementById("modal_box_office").innerHTML= `Box Office : ${info_array[movie_index].usa_gross_income}`
                            var modal_title = document.getElementById("modal_resume").innerHTML= `Resume : ${info_array[movie_index].description}`
                        }
                    }
                })
            })
        })
        .catch(error => console.error(error))
    }
    return info_array
}
function scifi_movies() {
    var request = new XMLHttpRequest()
    var image_url_array = []
    var info_array = []
    var btn = document.getElementsByClassName("scifi_movie");
    for (let i = 1; i < 3; i++) {
        fetch(`http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=sci-fi&page=${i}`)
        .then( response =>  response.json())
        .then(data => {
            data.results.forEach((movie, index) => {
                fetch(`${movie.url}`)
                .then( response =>  response.json())
                .then( data => {
                    image_url_array.push(`${data.image_url}`)
                    info_array.push(data)
                    let best_movies = document.getElementsByClassName('scifi_movie')
                    const index = image_url_array.indexOf(null)
                    if (index > -1) {
                        image_url_array.splice(index, 1)
                    }
                    Object.entries(best_movies).forEach(([key, value]) => {
                        if (image_url_array[key] != null) {
                            value.src = image_url_array[key]
                        }
                    })
                    for (let item of btn){
                        item.onclick = function() {
                            var movie_index = item.id.slice(-1)
                            var modal = document.getElementById("myModal");
                            modal.style.display = "block";
                            var modal_title = document.getElementById("modal_title").innerHTML= `Title : ${info_array[movie_index].title}`
                            var modal_genre = document.getElementById("modal_genre").innerHTML= `Genre : ${info_array[movie_index].genres[0]}`
                            var modal_release_date = document.getElementById("modal_release_date").innerHTML= `Release date : ${info_array[movie_index].date_published}`
                            var modal_rated = document.getElementById("modal_rated").innerHTML= `Rated : ${info_array[movie_index].rated}`
                            var modal_imdb_score = document.getElementById("modal_imdb_score").innerHTML= `Imdb Score : ${info_array[movie_index].imdb_score}`
                            var modal_realisator = document.getElementById("modal_realisator").innerHTML= `Director : ${info_array[movie_index].directors[0]}`
                            var modal_actors = document.getElementById("modal_actors").innerHTML= `Actors : ${info_array[movie_index].actors[0]}`
                            var modal_lenght = document.getElementById("modal_lenght").innerHTML= `Lenght : ${info_array[movie_index].duration}`
                            var modal_title = document.getElementById("modal_origine_country").innerHTML= `Origine Country : ${info_array[movie_index].languages}`
                            var modal_title = document.getElementById("modal_box_office").innerHTML= `Box Office : ${info_array[movie_index].usa_gross_income}`
                            var modal_title = document.getElementById("modal_resume").innerHTML= `Resume : ${info_array[movie_index].description}`
                        }
                    }
                })
            })
        })
        .catch(error => console.error(error))
    }
    return info_array
}

function horror_movies() {
    var request = new XMLHttpRequest()
    var image_url_array = []
    var info_array = []
    var btn = document.getElementsByClassName("horror_movie");
    for (let i = 1; i < 3; i++) {
        fetch(`http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=horror&page=${i}`)
        .then( response =>  response.json())
        .then(data => {
            data.results.forEach((movie, index) => {
                fetch(`${movie.url}`)
                .then( response =>  response.json())
                .then( data => {
                    image_url_array.push(`${data.image_url}`)
                    info_array.push(data)
                    let best_movies = document.getElementsByClassName('horror_movie')
                    const index = image_url_array.indexOf(null)
                    if (index > -1) {
                        image_url_array.splice(index, 1)
                    }
                    Object.entries(best_movies).forEach(([key, value]) => {
                        if (image_url_array[key] != null) {
                            value.src = image_url_array[key]
                        }
                    })
                    for (let item of btn){
                        item.onclick = function() {
                            var movie_index = item.id.slice(-1)
                            var modal = document.getElementById("myModal");
                            modal.style.display = "block";
                            var modal_title = document.getElementById("modal_title").innerHTML= `Title : ${info_array[movie_index].title}`
                            var modal_genre = document.getElementById("modal_genre").innerHTML= `Genre : ${info_array[movie_index].genres[0]}`
                            var modal_release_date = document.getElementById("modal_release_date").innerHTML= `Release date : ${info_array[movie_index].date_published}`
                            var modal_rated = document.getElementById("modal_rated").innerHTML= `Rated : ${info_array[movie_index].rated}`
                            var modal_imdb_score = document.getElementById("modal_imdb_score").innerHTML= `Imdb Score : ${info_array[movie_index].imdb_score}`
                            var modal_realisator = document.getElementById("modal_realisator").innerHTML= `Director : ${info_array[movie_index].directors[0]}`
                            var modal_actors = document.getElementById("modal_actors").innerHTML= `Actors : ${info_array[movie_index].actors[0]}`
                            var modal_lenght = document.getElementById("modal_lenght").innerHTML= `Lenght : ${info_array[movie_index].duration}`
                            var modal_title = document.getElementById("modal_origine_country").innerHTML= `Origine Country : ${info_array[movie_index].languages}`
                            var modal_title = document.getElementById("modal_box_office").innerHTML= `Box Office : ${info_array[movie_index].usa_gross_income}`
                            var modal_title = document.getElementById("modal_resume").innerHTML= `Resume : ${info_array[movie_index].description}`
                        }
                    }
                })
            })
        })
        .catch(error => console.error(error))
    }
    return info_array
}

function best_movie() {
    fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')
        .then(response => response.json())
        .then(data => {
            let best_film = document.getElementById('best_movie')
            let image_best_movie = document.getElementById('best_movie_image')
            let best_movie_title = document.getElementById('best_movie_title')
            let best_movie_rank = document.getElementById('best_movie_rank')

            image_best_movie.src = data.results[0].image_url
            best_movie_title.innerHTML = "Title : " + data.results[0].title
            best_movie_rank.innerHTML = "Score : " + data.results[0].imdb_score
            fetch(data.results[0].url)
                .then(response => response.json())
                .then(data => {
                    let best_movie_resume = document.getElementById('best_movie_resume')
                    best_movie_resume.innerHTML = "Resume : " + data.long_description

                })
        })
        .catch(error => console.error(error))
}



function best_movie_carousel() {
    var span = document.getElementsByClassName('arrows')
    var div = document.getElementsByClassName('carousel_div')

    var l = 0;
    span[1].onclick = () => {
        l++;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            // if(l==3) {i.style.left = "-2220px";}
            // if(l==4) {i.style.left = "-2960px";}
            if (l > 4) { l = 4 }
        }
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            if (l == 3) { i.style.left = "-2220px"; }
            if (l == 4) { i.style.left = "-2960px"; }
            if (l < 0) { l = 0 }
        }
    }
}
function action_movie_carousel() {
    var span = document.getElementsByClassName('action_arrows')
    var div = document.getElementsByClassName('action_carousel_div')

    var l = 0;
    span[1].onclick = () => {
        l++;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            // if(l==3) {i.style.left = "-2220px";}
            // if(l==4) {i.style.left = "-2960px";}
            if (l > 4) { l = 4 }
        }
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            // if(l==3) {i.style.left = "-2220px";}
            // if(l==4) {i.style.left = "-2960px";}
            if (l < 0) { l = 0 }
        }
    }
}
function scifi_movie_carousel() {
    var span = document.getElementsByClassName('scifi_arrows')
    var div = document.getElementsByClassName('scifi_carousel_div')

    var l = 0;
    span[1].onclick = () => {
        l++;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            // if(l==3) {i.style.left = "-2220px";}
            // if(l==4) {i.style.left = "-2960px";}
            if (l > 4) { l = 4 }
        }
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            // if(l==3) {i.style.left = "-2220px";}
            // if(l==4) {i.style.left = "-2960px";}
            if (l < 0) { l = 0 }
        }
    }
}

function horror_movie_carousel() {
    var span = document.getElementsByClassName('horror_arrows')
    var div = document.getElementsByClassName('horror_carousel_div')

    var l = 0;
    span[1].onclick = () => {
        l++;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            // if(l==3) {i.style.left = "-2220px";}
            // if(l==4) {i.style.left = "-2960px";}
            if (l > 4) { l = 4 }
        }
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
            // if(l==3) {i.style.left = "-2220px";}
            // if(l==4) {i.style.left = "-2960px";}
            if (l < 0) { l = 0 }
        }
    }
}

// Get the modal
function modal_window(info_array) {
    console.log("🚀 ~ modal_window ~ info_array", info_array)
    var modal = document.getElementById("myModal");
    // modal.style.display = "block";
    // Get the button that opens the modal
    var btn = document.getElementsByClassName("best_movie");
    // for (let item of btn){
    //     item.onclick = function() {
    //         var movie_index = item.id.slice(-1)
    //       }
    // }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    
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
}

best_movie()
modal_window()
get_best_movies_info()
// best_movies()
action_movies()
scifi_movies()
horror_movies()
best_movie_carousel()
action_movie_carousel()
scifi_movie_carousel()
horror_movie_carousel()
// get_btn_index()
