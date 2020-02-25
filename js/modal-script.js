 "use strict"
		let modal = document.querySelector("#modal"),
		    closeButton = document.querySelector("#close-button"),
		    openButton = document.querySelector("#open-button");

	closeButton.addEventListener("click", function() {
        	  modal.classList.add("closed");

    
	});

	openButton.addEventListener("click", function() {
      modal.classList.remove("closed"); 
	  modal.classList.add("open-modal");
	});