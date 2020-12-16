const navtransicion = () =>{
	const nav = document.querySelector('.nav-principal');
	const navprincipal=document.querySelectorAll('.nav-principal li');
	const acomodo = document.querySelector('.acomodo');
	acomodo.addEventListener('click', () =>{
		nav.classList.toggle('nav-activo');
		navprincipal.forEach((link, index)=>{
			if (link.style.animation) {
				link.style.animation ='';
			}else{
				link.style.animation = 'navLinkFade 0.5s ease forwards ${index /7+1.5 }s';
			}
		});
		acomodo.classList.toggle('toggle');
	});
	
}

navtransicion();

