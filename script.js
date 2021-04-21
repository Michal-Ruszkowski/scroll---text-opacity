function findPos(obj){
	let curleft = curtop = 0;
    if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
    }
    return [curleft,curtop];
}

document.addEventListener("scroll",  function(){
	const winH = window.innerHeight;

	const paragraphs = document.getElementsByClassName("paragraph");
	for (i=0; i<paragraphs.length; i++){
		const positionParagraph= findPos(paragraphs[i]);
		const positionUpperHidden = positionParagraph[1] ;
		const positionUpper = positionParagraph[1] - winH * 0.25;
		const positionBottom = positionParagraph[1] - winH * 0.5;
		const positionBottomHidden = positionParagraph[1] - winH * 0.75;
		const scrollLength = winH * 0.25;
		let x = 0;
		if(scrollY<=positionBottom && scrollY>=positionBottomHidden){
			x = 100 - Math.abs((scrollY - positionBottom) * 100/ scrollLength);
		}else if(scrollY>=positionUpper && scrollY<=positionUpperHidden){
			x = 100 - Math.abs((scrollY - positionUpper) *100/ scrollLength);
		}else if(scrollY<positionUpper && scrollY>positionBottom){
			x=100;
		}else{
			x=0;
		}
		paragraphs[i].style.opacity = `${x}%`;
	}
})
