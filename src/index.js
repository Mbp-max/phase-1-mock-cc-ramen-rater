
const url = `http://localhost:3000/ramens`
fetch(url)
.then(resp => resp.json())
.then(data => {
    console.log(data)
    renderRamen(data)
})

// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

const imgSrc = document.getElementById("ramen-img-display")
const comment = document.getElementById('comment-display')
const rating = document.getElementById("rating-display")
const restaurants = document.getElementById("restaurants").innerText
const h2 = document.querySelector('h2')
const ramenMenu = document.getElementById('ramen-menu')
function renderRamen(ramenBowls){
    ramenBowls.forEach(function(ramenDish){
        console.log(ramenDish)
        const ramenImg = document.createElement('img')
        ramenImg.src = ramenDish.image
        ramenImg.addEventListener("click", function(e){
            console.log("Im clicked")
            imgSrc.src = ramenDish.image
            h2.textContent = ramenDish.name
            restaurants.innerText = ramenDish.restaurant 
            rating.innerText = ramenDish.rating
            comment.innerText = ramenDish.comment
        })
        ramenMenu.appendChild(ramenImg)        
    });
}

const submitBttn = document.getElementById('submit')
submitBttn.addEventListener('click', function(e){
    e.preventDefault();
    const newRamenImg = document.createElement('img')
    newRamenImg.src = document.getElementById('new-image').value

    const newRamenName = h2
    newRamenName.textContent = document.getElementById('new-name').value
    ramenMenu.appendChild(newRamenImg)
})
function newRamen(){

}    