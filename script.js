var request = new XMLHttpRequest()
fetch('http://localhost:8000/api/v1/titles/?genre=action')
.then(response => response.json())
.then(data => {
    let action_movies = document.getElementsByClassName('action_movie')
    var image_url_array = []
    data.results.forEach((item, index) => {
        image_url_array.push(item.image_url)
    })
    Object.entries(action_movies).forEach(([key, value]) => {
        
        value.src=image_url_array[key]
    })
})
.catch(error => console.error(error))


fetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')
.then(response => response.json())
.then(data => {
    let best_film = document.getElementById('best_movie')
    let image_best_movie = document.getElementById('best_movie_image')
    let best_movie_title = document.getElementById('best_movie_title')
    let best_movie_rank = document.getElementById('best_movie_rank')

    image_best_movie.src=data.results[0].image_url
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

var span = document.getElementsByClassName('arrows')
console.log("🚀 ~ span[1]", span)
console.log("🚀 ~ span[1]", span[1])
var div = document.getElementsByClassName('carousel_div')

var l = 0;
span[1].onclick = ()=> {
  console.log("jzizizdid")
    l++;
    for(var i of div){
        if(l==0) {i.style.left = "0px";}
        if(l==1) {i.style.left = "-740px";}
        if(l==2) {i.style.left = "-1480px";}
        if(l==3) {i.style.left = "-2220px";}
        if(l==4) {i.style.left = "-2960px";}
        if (l>4) {l=4}
    }
}
span[0].onclick = ()=> {
    l--;
    for(var i of div){
        if(l==0) {i.style.left = "0px";}
        if(l==1) {i.style.left = "-740px";}
        if(l==2) {i.style.left = "-1480px";}
        if(l==3) {i.style.left = "-2220px";}
        if(l==4) {i.style.left = "-2960px";}
        if (l<0) {l=0}
    }
}