// UI

const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

const prev = document.getElementById('prev'),
      next = document.getElementById('next');

let currentactive = 1;

next.addEventListener('click',()=>{

	// console.log('next');

	currentactive++;

	if(currentactive > circles.length){

		currentactive = circles.length;
	}

	update();

	// console.log(currentactive);
});


prev.addEventListener('click',()=>{

	// console.log('prev');

	currentactive--;

	if(currentactive < 1){

		currentactive = 1;
	}

	update();
	// console.log(currentactive);
});

function update(){

	circles.forEach((circle,index)=>{

		if(index < currentactive){

			circle.classList.add('active');

		}else{

			circle.classList.remove('active');
		}

		const actives = document.querySelectorAll('.active');
		// console.log(actives.length);
		// console.log(circles.length);

		progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

		if(actives.length === 1){
			prev.style.disabled = 'true';
		}else{
			prev.style.disabled = 'false';
		}
	});
}