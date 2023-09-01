const smiles = document.querySelector('.smiles');
const send = document.querySelector('.send');
const voteContainer = document.querySelector('.vote-container');
const message = document.querySelector('.message');
let smile;

smiles.addEventListener('click', (e) => {
	if (e.target.classList.contains('fa-smile')) {
		smile = 'satisfied';
		console.log(smile);
	} else if (e.target.classList.contains('fa-meh')) {
		smile = 'neutral';
		console.log(smile);
	} else if (e.target.classList.contains('fa-grin')) {
		smile = 'unhappy';
		console.log(smile);
	}
});
send.addEventListener('click', (e) => {
	voteContainer.classList.remove('active');
	message.classList.add('active');
	message.innerHTML = `<div class="heart"><i class="fas fa-heart"></i></div>
    <p>Thank you</p>
    <p>Feedback ${smile} received</p>
    <p>We'll use your feedback to improve our customer support</p>`;
});
