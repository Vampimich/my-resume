var languageController = 1;


	/*$('#languageToggler1').on("click", function(){


		if(document.querySelector('#accept:checked') !== null){
			console.log("checked");
		}
		else{
			console.log("unchecked");
		}

		console.log("hey");
		languageController *= -1;
		if(languageController > 0){
			$('.englishText').css("display", "none");
			$('.spanishText').css("display","block");
		}else{
			$('.englishText').css("display", "block");
			$('.spanishText').css("display","none");
		}	
	});*/


	function myFunction() {
		//var checkBox = document.getElementById("languageToggler1");
		//var text = document.getElementById("text");
	 	//languageController *= -1;
		/*if(languageController > 0){

			document.getElementsByClassName("englishText").style.display = "none";
			//$('.englishText').css("display", "none");
			//$('.spanishText').css("display","block");
		}else{
			$('.englishText').css("display", "block");
			$('.spanishText').css("display","none");
		}*/

		var spanishTexts = document.getElementsByClassName("spanishText");
		var englishTexts = document.getElementsByClassName("englishText");
		if (spanishTexts[0].style.display === "none") {
		    for (var i = 0; i < spanishTexts.length; i++) {
    			spanishTexts[i].style.display = 'block';
    			englishTexts[i].style.display = 'none';
    		}
		} else {
		    for (var i = 0; i < spanishTexts.length; i++) {
    			spanishTexts[i].style.display = 'none';
    			englishTexts[i].style.display = 'block';
    		}
		}

	}