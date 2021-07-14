function get_best_movies_info() {
    var request = new XMLHttpRequest()
    var image_url_array = []
    var info_array = []
    var global_url = ""
    var btn = document.getElementsByClassName("best_movie");
    for (let i = 1; i < 3; i++) {
        fetch(`http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=${i}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach((movie, index) => {
                    fetch(`${movie.url}`)
                        .then(response => response.json())
                        .then(data => {
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
                            for (let item of btn) {
                                item.onclick = function () {
                                    var movie_index = item.id.slice(-1)
                                    var modal = document.getElementById("myModal");
                                    var converted_time = convertMinsToHrsMins(info_array[movie_index].duration)
                                    modal.style.display = "block";
                                    document.getElementById("modal_movie_img").src = info_array[movie_index].image_url
                                    document.getElementById("modal_title").innerHTML = `<strong>Title :</strong> ${info_array[movie_index].title}`
                                    document.getElementById("modal_genre").innerHTML = `<strong>Genre :</strong> ${info_array[movie_index].genres[0]}`
                                    document.getElementById("modal_release_date").innerHTML = `<strong>Release date :</strong> ${info_array[movie_index].date_published}`
                                    document.getElementById("modal_rated").innerHTML = `<strong>Rated :</strong> ${info_array[movie_index].rated}`
                                    document.getElementById("modal_imdb_score").innerHTML = `<strong>Imdb Score :</strong> ${info_array[movie_index].imdb_score}`
                                    document.getElementById("modal_realisator").innerHTML = `<strong>Director :</strong> ${info_array[movie_index].directors[0]}`
                                    document.getElementById("modal_actors").innerHTML = `<strong>Actors :</strong> ${info_array[movie_index].actors[0]}`
                                    document.getElementById("modal_lenght").innerHTML = `<strong>Lenght :</strong> ${converted_time}`                                    
                                    document.getElementById("modal_origine_country").innerHTML = `<strong>Origine Country :</strong> ${info_array[movie_index].languages}`
                                    document.getElementById("modal_box_office").innerHTML = `<strong>Box Office :</strong> ${info_array[movie_index].usa_gross_income}`
                                    document.getElementById("modal_resume").innerHTML = `<strong>Resume :</strong> ${info_array[movie_index].description}`
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
    for (let item of btn) {
        item.onclick = function () {
            var movie_index = item.id.slice(-1)
            return movie_index
        }
    }
}

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
            .then(response => response.json())
            .then(data => {
                data.results.forEach((movie, index) => {
                    fetch(`${movie.url}`)
                        .then(response => response.json())
                        .then(data => {
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
                            for (let item of btn) {
                                item.onclick = function () {
                                    var movie_index = item.id.slice(-1)
                                    // console.log("🚀 ~ data.results.forEach ~ info_array", info_array[movie_index])
                                    var modal = document.getElementById("myModal");
                                    var converted_time = convertMinsToHrsMins(info_array[movie_index].duration)
                                    modal.style.display = "block";
                                    document.getElementById("modal_movie_img").src = info_array[movie_index].image_url
                                    document.getElementById("modal_title").innerHTML = `<strong>Title :</strong> ${info_array[movie_index].title}`
                                    document.getElementById("modal_genre").innerHTML = `<strong>Genre :</strong> ${info_array[movie_index].genres[0]}`
                                    document.getElementById("modal_release_date").innerHTML = `<strong>Release date :</strong> ${info_array[movie_index].date_published}`
                                    document.getElementById("modal_rated").innerHTML = `<strong>Rated :</strong> ${info_array[movie_index].rated}`
                                    document.getElementById("modal_imdb_score").innerHTML = `<strong>Imdb Score :</strong> ${info_array[movie_index].imdb_score}`
                                    document.getElementById("modal_realisator").innerHTML = `<strong>Director :</strong> ${info_array[movie_index].directors[0]}`
                                    document.getElementById("modal_actors").innerHTML = `<strong>Actors :</strong> ${info_array[movie_index].actors[0]}`
                                    document.getElementById("modal_lenght").innerHTML = `<strong>Lenght :</strong> ${converted_time}`                                    
                                    document.getElementById("modal_origine_country").innerHTML = `<strong>Origine Country :</strong> ${info_array[movie_index].languages}`
                                    document.getElementById("modal_box_office").innerHTML = `<strong>Box Office :</strong> ${info_array[movie_index].usa_gross_income}`
                                    document.getElementById("modal_resume").innerHTML = `<strong>Resume :</strong> ${info_array[movie_index].description}`
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
            .then(response => response.json())
            .then(data => {
                data.results.forEach((movie, index) => {
                    fetch(`${movie.url}`)
                        .then(response => response.json())
                        .then(data => {
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
                            for (let item of btn) {
                                item.onclick = function () {
                                    var movie_index = item.id.slice(-1)
                                    var modal = document.getElementById("myModal");
                                    var converted_time = convertMinsToHrsMins(info_array[movie_index].duration)
                                    modal.style.display = "block";
                                    document.getElementById("modal_movie_img").src = info_array[movie_index].image_url
                                    document.getElementById("modal_title").innerHTML = `<strong>Title :</strong> ${info_array[movie_index].title}`
                                    document.getElementById("modal_genre").innerHTML = `<strong>Genre :</strong> ${info_array[movie_index].genres[0]}`
                                    document.getElementById("modal_release_date").innerHTML = `<strong>Release date :</strong> ${info_array[movie_index].date_published}`
                                    document.getElementById("modal_rated").innerHTML = `<strong>Rated :</strong> ${info_array[movie_index].rated}`
                                    document.getElementById("modal_imdb_score").innerHTML = `<strong>Imdb Score :</strong> ${info_array[movie_index].imdb_score}`
                                    document.getElementById("modal_realisator").innerHTML = `<strong>Director :</strong> ${info_array[movie_index].directors[0]}`
                                    document.getElementById("modal_actors").innerHTML = `<strong>Actors :</strong> ${info_array[movie_index].actors[0]}`
                                    document.getElementById("modal_lenght").innerHTML = `<strong>Lenght :</strong> ${converted_time}`                                    
                                    document.getElementById("modal_origine_country").innerHTML = `<strong>Origine Country :</strong> ${info_array[movie_index].languages}`
                                    document.getElementById("modal_box_office").innerHTML = `<strong>Box Office :</strong> ${info_array[movie_index].usa_gross_income}`
                                    document.getElementById("modal_resume").innerHTML = `<strong>Resume :</strong> ${info_array[movie_index].description}`
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
            .then(response => response.json())
            .then(data => {
                data.results.forEach((movie, index) => {
                    fetch(`${movie.url}`)
                        .then(response => response.json())
                        .then(data => {
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
                            for (let item of btn) {
                                item.onclick = function () {
                                    var movie_index = item.id.slice(-1)
                                    var modal = document.getElementById("myModal");
                                    var converted_time = convertMinsToHrsMins(info_array[movie_index].duration)
                                    modal.style.display = "block";
                                    document.getElementById("modal_movie_img").src = info_array[movie_index].image_url
                                    document.getElementById("modal_title").innerHTML = `<strong>Title :</strong> ${info_array[movie_index].title}`
                                    document.getElementById("modal_genre").innerHTML = `<strong>Genre :</strong> ${info_array[movie_index].genres[0]}`
                                    document.getElementById("modal_release_date").innerHTML = `<strong>Release date :</strong> ${info_array[movie_index].date_published}`
                                    document.getElementById("modal_rated").innerHTML = `<strong>Rated :</strong> ${info_array[movie_index].rated}`
                                    document.getElementById("modal_imdb_score").innerHTML = `<strong>Imdb Score :</strong> ${info_array[movie_index].imdb_score}`
                                    document.getElementById("modal_realisator").innerHTML = `<strong>Director :</strong> ${info_array[movie_index].directors[0]}`
                                    document.getElementById("modal_actors").innerHTML = `<strong>Actors :</strong> ${info_array[movie_index].actors[0]}`
                                    document.getElementById("modal_lenght").innerHTML = `<strong>Lenght :</strong> ${converted_time}`
                                    document.getElementById("modal_origine_country").innerHTML = `<strong>Origine Country :</strong> ${info_array[movie_index].languages}`
                                    document.getElementById("modal_box_office").innerHTML = `<strong>Box Office :</strong> ${info_array[movie_index].usa_gross_income}`
                                    document.getElementById("modal_resume").innerHTML = `<strong>Resume :</strong> ${info_array[movie_index].description}`
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
    var info_button = document.getElementsByClassName('info_button')
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
                    best_movie_resume.innerHTML = "Resumé : " + data.long_description
                    for (let item of info_button) {
                        item.onclick = function () {
                            var modal = document.getElementById("myModal");
                            var converted_time = convertMinsToHrsMins(data.duration)
                            modal.style.display = "block";
                            document.getElementById("modal_movie_img").src = data.image_url
                            console.log("🚀 ~ best_movie ~ data", data)
                            document.getElementById("modal_title").innerHTML = `<strong>Titre :</strong> ${data.title}`
                            document.getElementById("modal_genre").innerHTML = `<strong>Genre :</strong> ${data.genres}`
                            document.getElementById("modal_release_date").innerHTML = `<strong>Date de sortie :</strong> ${data.date_published}`
                            document.getElementById("modal_rated").innerHTML = `<strong>Score :</strong> ${data.rated}`
                            document.getElementById("modal_imdb_score").innerHTML = `<strong>Score Imdb :</strong> ${data.imdb_score}`
                            document.getElementById("modal_realisator").innerHTML = `<strong>Directeur :</strong> ${data.directors.join(', ')}`
                            document.getElementById("modal_actors").innerHTML = `<strong>Acteurs :</strong> ${data.actors.join(', ')}`
                            document.getElementById("modal_lenght").innerHTML = `<strong>Durée :</strong> ${converted_time}`
                            document.getElementById("modal_origine_country").innerHTML = `<strong>Pays d'origine :</strong> ${data.languages}`
                            document.getElementById("modal_box_office").innerHTML = `<strong>Box Office :</strong> ${data.usa_gross_income}`
                            document.getElementById("modal_resume").innerHTML = `<strong>Resumé :</strong> ${data.description}`
                        }
                    }
                })
        })
        .catch(error => console.error(error))
}

const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}h${m}min`;
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
            if (l > 4) { l = 4 }
        }
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
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
            if (l > 4) { l = 4 }
        }
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }
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
            if (l > 4) { l = 4 }
        }
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-740px"; }
            if (l == 2) { i.style.left = "-1480px"; }

            if (l < 0) { l = 0 }
        }
    }
}

function modal_window(info_array) {
    var modal = document.getElementById("myModal");
    var btn = document.getElementsByClassName("best_movie");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

best_movie()
modal_window()
get_best_movies_info()
action_movies()
scifi_movies()
horror_movies()
best_movie_carousel()
action_movie_carousel()
scifi_movie_carousel()
horror_movie_carousel()
