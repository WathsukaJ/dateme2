const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBtn1 = document.getElementById("nextBtn1");
const dateForm = document.getElementById("dateForm");
const finalDetails = document.getElementById("finalDetails");

// "No" බටන් එක මගහැර මාරු වීමේ Logic එක
noBtn.addEventListener("mouseover", moveBtn);
noBtn.addEventListener("touchstart", moveBtn);

function moveBtn() {
const x = Math.floor(Math.random() * (window.innerWidth - 100));
const y = Math.floor(Math.random() * (window.innerHeight - 50));

noBtn.style.position = "fixed";
noBtn.style.left = ${x}px; noBtn.style.top = ``${y}px;
}

// 1 -> 2 වෙනි Screen එකට යාම
yesBtn.addEventListener("click", () => {
card1.classList.add("hidden");
card2.classList.remove("hidden");
});

// 2 -> 3 වෙනි Screen එකට (Form එකට) යාම
nextBtn1.addEventListener("click", () => {
card2.classList.add("hidden");
card3.classList.remove("hidden");
});

// Form එක Submit කළ පසු Pickup Message එක සහිතව Final Screen එකට යාම
dateForm.addEventListener("submit", (e) => {
e.preventDefault();

const date = document.getElementById("dateInput").value;
const time = document.getElementById("timeInput").value;
const place = document.getElementById("placeInput").value;

finalDetails.innerHTML = See you on &lt;b&gt;${date}</b>! <br>
Location: <b>${place}&lt;/b&gt; 📍&lt;br&gt;&lt;br&gt; 🚗 &lt;b&gt;I'll be there to pick you up at ${time}!&lt;/b&gt; 💖;

card3.classList.add("hidden");
card4.classList.remove("hidden");
});