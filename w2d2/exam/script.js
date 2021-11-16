var bannerImage = document.querySelector('#banner-image')
var itemCount = 0
var countItems = document.querySelector('#cart-items')
countItems.innerText = itemCount
console.log(countItems)

function nextImage(){
  bannerImage.src = './images/pixel-ninjas-2.png'
}

function backImage(){
  bannerImage.src = './images/stonepunk.png'
}

function addItem(){
  itemCount++
  countItems.innerText = itemCount
}

function linuxAlert(){
  alert('This game is supported on Linux')
}