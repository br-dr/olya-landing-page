// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user press ESC, close the modal
document.onkeydown = function(evtEsc) {    
    if (evtEsc.keyCode == 27) {    
        document.getElementById("myModal").style.display = "none";
    }
};

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByClassName('img-responsive');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var pictureTape = document.getElementById("tape");

for (var i = 0; i < images.length; i++) {
	var imgTape = document.createElement("IMG");
	var imgCaption = document.createElement("P");
	
	imgTape.src = images[i].src;
	imgTape.alt = images[i].alt;
	pictureTape.appendChild(imgTape);
	pictureTape.appendChild(imgCaption);
	imgCaption.innerHTML = images[i].nextElementSibling.innerHTML;

	imgTape.onclick = function() {		
		modalImg.src = this.src;
        modalImg.alt = this.alt;       
        captionText.innerHTML = this.nextElementSibling.innerHTML;
	};

    images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       modalImg.alt = this.alt;       
       captionText.innerHTML = this.nextElementSibling.innerHTML;       
   }    	     
};