//your JS code here. If required.
const size =document.getElementById('sizeInfo');
function setSize(){
	const width=window.innerWidth;
	const height=window.innerHeight;

	size.innerHTML='Width:' + ' ' + width +' and '+ ' Height:' + ' ' + height;
}

window.addEventListener('resize', setSize);
setSize();