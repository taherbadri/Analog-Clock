// let secondHand = document.querySelector(".seconds-hand");
// let minuteHand = document.querySelector(".minutes-hand");
// let hourHand = document.querySelector(".hours-hand");

function updateHands() {
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();

	let secondHand = document.querySelector(".seconds-hand");
	let minuteHand = document.querySelector(".minutes-hand");
	let hourHand = document.querySelector(".hours-hand");

	// Calculate degrees for each hand
	let secondDegree = -90 + (360 / 60) * seconds;
	let minuteDegree = -90 + (360 / 60) * minutes + (6 / 60) * seconds; // Adjust for seconds in minute hand
	let hourDegree = -90 + (360 / 12) * hours + (30 / 60) * minutes; // Adjust for minutes in hour hand

	// Apply transforms to hands
	secondHand.style.transform = `translate(-25%, -50%) rotate(${secondDegree}deg)`;
	minuteHand.style.transform = `translate(-25%, -50%) rotate(${minuteDegree}deg)`;
	hourHand.style.transform = `translate(-25%, -50%) rotate(${hourDegree}deg)`;
}

let timing = setInterval(updateHands, 1000);

const select = document.querySelector("select");

const changeTheme = (e) => {
	let root = document.querySelector(":root");
	switch (e.currentTarget.value) {
		case "0":
			root.style.setProperty("--background", "#fcf9ec");
			root.style.setProperty("--secondary", "#4caf50");
			root.style.setProperty("--text", "#444444");
			break;
		case "1":
			root.style.setProperty("--background", "#fff");
			root.style.setProperty("--secondary", "#0074d9");
			root.style.setProperty("--text", "#000000");
			break;
		case "2":
			root.style.setProperty("--background", "#f9f9f9");
			root.style.setProperty("--secondary", "#666666");
			root.style.setProperty("--text", "#333333");
			break;
		case "3":
			root.style.setProperty("--background", "#fdfdfd");
			root.style.setProperty("--secondary", "#ff9f80");
			root.style.setProperty("--text", "#444444");
			break;
		case "4":
			root.style.setProperty("--background", "#fff");
			root.style.setProperty("--secondary", "#00b386");
			root.style.setProperty("--text", "#333333");
			break;
		case "5":
			root.style.setProperty("--background", "#ffebd1");
			root.style.setProperty("--secondary", "#ff6b35");
			root.style.setProperty("--text", "#555555");
			break;
		case "6":
			root.style.setProperty("--background", "#f4f4f4");
			root.style.setProperty("--secondary", "#00a8b5");
			root.style.setProperty("--text", "#333333");
			break;
		case "7":
			root.style.setProperty("--background", "#f5f5f5");
			root.style.setProperty("--secondary", "#b288e6");
			root.style.setProperty("--text", "#3a3a3a");
			break;
		case "8":
			root.style.setProperty("--background", "#fff");
			root.style.setProperty("--secondary", "#aaaaaa");
			root.style.setProperty("--text", "#000000");
			break;
		case "9":
			root.style.setProperty("--background", "#fff");
			root.style.setProperty("--secondary", "#ffd700");
			root.style.setProperty("--text", "#333333");
			break;
		case "10":
			root.style.setProperty("--background", "#fff");
			root.style.setProperty("--secondary", "#87ceeb");
			root.style.setProperty("--text", "#333333");
			break;
		default:
			console.log("try again");
			break;
	}
};
select.addEventListener("change", changeTheme);
