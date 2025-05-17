let playing = false;

function playmusic(){
	const audio = document.getElementById("audio");
	const press = document.getElementById("playAudio");
	
	if (playing) {
    		audio.pause();
    		press.textContent = "Want to play the background music? 🐠";
  	} else {
    		audio.play();
    		press.textContent = "The background music is playing 🐠";
  	}

  	playing = !playing;
}

function makeProfile(event) {
	event.preventDefault();

	const name1 = document.getElementById("Fname").value;
	const name2 = document.getElementById("Lname").value;
	const email = document.getElementById("email").value;
	const response = document.getElementById("comment").value;
	const sex = document.querySelector('input[name="gender"]:checked');

	if (sex) {
		localStorage.setItem("Sex", sex.value);
	}

	localStorage.setItem("Fname", name1);
	localStorage.setItem("Lname", name2);
	localStorage.setItem("Email", email);
	localStorage.setItem("response", response);

	window.location.href = "profile.html";
}

function collectInfo() {
    const savedname1 = localStorage.getItem("Fname");
    const savedname2 = localStorage.getItem("Lname");
    const savedEmail = localStorage.getItem("Email");
    const savedSex = localStorage.getItem("Sex");
    const savedAns = localStorage.getItem("response");

    document.getElementById("name1").textContent = "First Name: " + savedname1;
    document.getElementById("name2").textContent = "Last Name: " + savedname2;
    document.getElementById("emailAddress").textContent = "Email: " + savedEmail;
    document.getElementById("sex").textContent = "Sex: " + savedSex;
    document.getElementById("reasonOfSupport").textContent = "Support Reason: " + savedAns;
}

function result() {
    event.preventDefault();

    let score = 0;

    if (document.getElementById("correct1").checked) score++;
    if (document.getElementById("correct2").checked) score++;
    if (document.getElementById("correct3").checked) score++;
    if (document.getElementById("correct4").checked) score++;
    if (document.getElementById("correct5").checked) score++;

    alert("You scored " + score + " out of 5!");

	if(score >= 3){
		alert("Good Job⭐");
	}
	else{
		alert("It's Ok⚓️");
	}
    return false;
 }
