// JavaScript Document
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup2');


const imageIndexes = [ 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
const selectedIndex = null;

imageIndexes.forEach( (i) => {
const image = document.createElement('img');
image.src = 'gallery/Sanjeev_'+ (i) + '.jpg';
image.alt = 'gg';


image.classList.add('imgContainer');
image.classList.add('item-' + i)
image.style.width = '100%';
image.style.height = '500px';



image.addEventListener('click', () => {
    
 
selectedImage.src = 'gallery/Sanjeev_'+ (i) + '.JPG';
selectedImage.alt = 'gg';


image.classList.toggle('activeBorder' );

});

console.log(image.src);
gallery.appendChild(image);

});


popup.addEventListener('click', () => {



popup.src = '';
popup.alt = '';



})