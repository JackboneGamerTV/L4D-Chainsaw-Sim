var mmmusic;
var gameamb;
var mntAmbience;
var snd;

window.resizeTo(screen.availWidth, screen.availHeight);
window.moveTo(0, 0);
window.focus();

//Key blocker
document.onkeydown = keyblocker;

function keyblocker(e) {
  if (e.keyCode == 123) {
    return false;
  }
  else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    return false;
  }
  
  if (e.keyCode == 122) {
    return false;
  }
  
  if (e.ctrlKey && e.keyCode == 65) {
    return false;
  }
  if (e.keyCode == 27 && Game == true) {
    window.open("ONAM_Launcher.html", "_self");
  }
}
//End of key blocker

// Intro
window.onload = intro;

function intro() {
  var introTime = 10000;
  setTimeout(function () {
    var divintroImg = document.createElement("div");
	divintroImg.setAttribute("align", "center");
	divintroImg.setAttribute("id", "introimg");
	divintroImg.style.top = "200px";
	document.body.appendChild(divintroImg);
	
    var introImg = document.createElement("img");
	introImg.setAttribute("src", "img/intro.png");
	introImg.setAttribute("width", "900px");
	introImg.setAttribute("height", "640px");
	document.getElementById("introimg").appendChild(introImg);
  }, introTime = 3000);
  setTimeout(function () {
    var removeintroImg = document.getElementById("introimg");
	document.body.removeChild(removeintroImg);
  }, introTime = 6000);
  setTimeout(function () {
    var body = document.getElementById("body");
	body.style.background = "url(img/menu_background.png) no-repeat center center fixed";
	body.style.cursor = "default";
	var removeintrocan = document.getElementById("introcan");
	document.body.removeChild(removeintrocan);
	
	var menuLogo = document.createElement("h1");
	menuLogo.setAttribute("id", "menulogo");
	menuLogo.style.color = "red";
	menuLogo.style.fontSize = "70px";
	menuLogo.innerHTML = "One Night At Mansion";
	document.body.appendChild(menuLogo);
	
	var playButton = document.createElement("h2");
	playButton.setAttribute("id", "playbutton");
	playButton.setAttribute("onclick", "play()");
    playButton.style.fontSize = "50px";
	playButton.style.color = "red";
	playButton.style.width = "100px";
	playButton.innerHTML = "Play";
	document.body.appendChild(playButton);
	
	var creditButton = document.createElement("h2");
	creditButton.setAttribute("id", "creditbutton");
	creditButton.setAttribute("onclick", "credits()");
    creditButton.style.fontSize = "50px";
	creditButton.style.color = "red";
	creditButton.style.width = "150px";
	creditButton.innerHTML = "Credits";
	document.body.appendChild(creditButton);
	
	var quitButton = document.createElement("h2");
	quitButton.setAttribute("id", "quitbutton");
	quitButton.setAttribute("onclick", "quit()");
    quitButton.style.fontSize = "50px";
	quitButton.style.color = "red";
	quitButton.style.width = "100px";
	quitButton.innerHTML = "Quit";
	document.body.appendChild(quitButton);
	
	var ytbButton = document.createElement("img");
	ytbButton.setAttribute("id", "ytbbutton");
	ytbButton.setAttribute("src", "img/youtube.png");
	ytbButton.setAttribute("width", "110px");
	ytbButton.setAttribute("height", "80px");
	ytbButton.setAttribute("onclick", "youtube()");
	ytbButton.style.position = "absolute";
	ytbButton.style.top = "570px";
	ytbButton.style.left = "1250px";
	document.body.appendChild(ytbButton);
	
	var pmcButton = document.createElement("img");
	pmcButton.setAttribute("id", "pmcbutton");
	pmcButton.setAttribute("src", "img/pmc.jpg");
	pmcButton.setAttribute("width", "80px");
	pmcButton.setAttribute("height", "80px");
	pmcButton.setAttribute("onclick", "pmc()")
	pmcButton.style.position = "absolute";
	pmcButton.style.top = "570px";
	pmcButton.style.left = "1150px";
	document.body.appendChild(pmcButton);
	
	var musicButton = document.createElement("img");
	musicButton.setAttribute("id", "musicbutton");
	musicButton.setAttribute("src", "img/flashlight_button.png");
	musicButton.setAttribute("width", "70px");
	musicButton.setAttribute("height", "70px");
	musicButton.setAttribute("onclick", "music()")
	musicButton.style.position = "absolute";
	musicButton.style.top = "30px";
	musicButton.style.left = "1250px";
	document.body.appendChild(musicButton);
	
	if (musicType == true) {
	  mmmusic = new Audio("sounds/music.mp3");
	  mmmusic.play();
	  mmmusic.loop = true;
	}
  }, introTime = 10000);
}
//End of intro

//Main menu
function youtube() {
  snd = new Audio("sounds/click.ogg");
  snd.play();
  window.open("https://www.youtube.com/channel/UCVWC73HnvykSHxebex0JSYQ?view_as=subscriber");
}

function pmc() {
  snd = new Audio("sounds/click.ogg");
  snd.play();
  window.open("https://www.planetminecraft.com/member/jackpone/");
}

var musicType = true;
function music() {
  if (musicType == true) {
    snd = new Audio("sounds/click.ogg");
    snd.play();
    mmmusic.pause();
	musicType = false;
  }
  else if(musicType == false) {
    snd = new Audio("sounds/click.ogg");
	snd.play();
	mmmusic = new Audio("sounds/music.mp3");
	mmmusic.play();
	mmmusic.loop = true;
	musicType = true;
  }
}

function quit() {
  snd = new Audio("sounds/click.ogg");
  snd.play();
  
  var quitTime = 1000;
  setTimeout(function () {
    var removelogo = document.getElementById("menulogo");
    document.body.removeChild(removelogo);
    var removeplay = document.getElementById("playbutton");
    document.body.removeChild(removeplay);
    var removecredit = document.getElementById("creditbutton");
    document.body.removeChild(removecredit);
    var removequit = document.getElementById("quitbutton");
    document.body.removeChild(removequit);
	var removeytb = document.getElementById("ytbbutton");
    document.body.removeChild(removeytb);
	var removepmc = document.getElementById("pmcbutton");
    document.body.removeChild(removepmc);
	var removemusic = document.getElementById("musicbutton");
    document.body.removeChild(removemusic);
	
	mmmusic.pause();
  }, quitTime = 1);
  setTimeout(function () {
    window.close();
  }, quitTime = 600);
}

function credits() {
  var removelogo = document.getElementById("menulogo");
  document.body.removeChild(removelogo);
  var removeplay = document.getElementById("playbutton");
  document.body.removeChild(removeplay);
  var removecredit = document.getElementById("creditbutton");
  document.body.removeChild(removecredit);
  var removequit = document.getElementById("quitbutton");
  document.body.removeChild(removequit);
  var removeytb = document.getElementById("ytbbutton");
  document.body.removeChild(removeytb);
  var removepmc = document.getElementById("pmcbutton");
  document.body.removeChild(removepmc);
  var removemusic = document.getElementById("musicbutton");
  document.body.removeChild(removemusic);
  
  var loading = document.createElement("h2");
  loading.setAttribute("id", "loading");
  loading.style.color = "red";
  loading.style.fontSize = "50px";
  loading.innerHTML = "Loading.";
  document.body.appendChild(loading);
  
  mmmusic.pause();
  
  snd = new Audio("sounds/click.ogg");
  snd.play();
  
  var creditTime = 20000;
  setTimeout(function () {
    var removeload = document.getElementById("loading");
	document.body.removeChild(removeload);
	
	var body = document.getElementById("body");
	body.style.background = "url(img/credit_background.png) no-repeat center center fixed";
	body.style.cursor = "none";
	
	var creditCan = document.createElement("canvas");
	creditCan.setAttribute("id", "creditcan");
	creditCan.setAttribute("align", "center");
	creditCan.style.position = "absolute";
	creditCan.style.width = "1340px;";
	creditCan.style.height = "640px";
	document.body.appendChild(creditCan);
  }, creditTime = 3000);
  setTimeout(function () {
    mmmusic = new Audio("sounds/music.mp3");
	mmmusic.play();
	mmmusic.loop = false;
  }, creditTime = 4000);
  setTimeout(function () {
  var credit1 = document.createElement("h1");
    credit1.setAttribute("id", "credit1");
    credit1.setAttribute("align", "center");
    credit1.style.paddingTop = "220px";
    credit1.style.color = "#FE2E2E";
    credit1.innerHTML = "This Game Created By.<br /><br />JackboneGamerTV";
    document.body.appendChild(credit1);
  }, creditTime = 5000);
  setTimeout(function () {
    var removecredit1 = document.getElementById("credit1");
    document.body.removeChild(removecredit1);
  }, creditTime = 7000);
  setTimeout(function () {
    var credit2 = document.createElement("h1");
    credit2.setAttribute("id", "credit2");
    credit2.setAttribute("align", "center");
    credit2.style.paddingTop = "220px";
    credit2.style.color = "#FE2E2E";
    credit2.innerHTML = "Images & Graphics Created By.<br /><br />JackboneGamerTV & Mojang";
    document.body.appendChild(credit2);
  }, creditTime = 8000);
  setTimeout(function () {
    var removecredit2 = document.getElementById("credit2");
    document.body.removeChild(removecredit2);
  }, creditTime = 11000);
  setTimeout(function () {
    var credit3 = document.createElement("h1");
    credit3.setAttribute("id", "credit3");
    credit3.setAttribute("align", "center");
    credit3.style.paddingTop = "220px";
    credit3.style.color = "#FE2E2E";
    credit3.innerHTML = "Musics & Sound Effects Created By.<br /><br />JackboneGamerTV & Mojang & Scott Cawthon & Paulina Pabis & Michael Pabis";
    document.body.appendChild(credit3);
  }, creditstime = 12000);
  setTimeout(function () {
    var removecredit3 = document.getElementById("credit3");
    document.body.removeChild(removecredit3);
  }, creditTime = 16000);
  setTimeout(function () {
    var credit4 = document.createElement("h1");
    credit4.setAttribute("id", "credit4");
    credit4.setAttribute("align", "center");
    credit4.style.paddingTop = "220px";
    credit4.style.color = "#FE2E2E";
    credit4.innerHTML = "Thanks For Download This Game<br /><br />I Hope You Will Enjoy :)";
    document.body.appendChild(credit4);
  }, creditTime = 16001);
  setTimeout(function () {
    var removecredit4 = document.getElementById("credit4");
	document.body.removeChild(removecredit4);
	var removecreditCan = document.getElementById("creditcan");
	document.body.removeChild(removecreditCan);
	
	var body = document.getElementById("body");
	body.style.background = "url(img/menu_background.png) no-repeat center center fixed";
	body.style.cursor = "default";
	
    var menuLogo = document.createElement("h1");
	menuLogo.setAttribute("id", "menulogo");
	menuLogo.style.color = "red";
	menuLogo.style.fontSize = "70px";
	menuLogo.innerHTML = "One Night At Mansion";
	document.body.appendChild(menuLogo);
	
	var playButton = document.createElement("h2");
	playButton.setAttribute("id", "playbutton");
	playButton.setAttribute("onclick", "play()");
    playButton.style.fontSize = "50px";
	playButton.style.color = "red";
	playButton.style.width = "100px";
	playButton.innerHTML = "Play";
	document.body.appendChild(playButton);
	
	var creditButton = document.createElement("h2");
	creditButton.setAttribute("id", "creditbutton");
	creditButton.setAttribute("onclick", "credits()");
    creditButton.style.fontSize = "50px";
	creditButton.style.color = "red";
	creditButton.style.width = "150px";
	creditButton.innerHTML = "Credits";
	document.body.appendChild(creditButton);
	
	var quitButton = document.createElement("h2");
	quitButton.setAttribute("id", "quitbutton");
	quitButton.setAttribute("onclick", "quit()");
    quitButton.style.fontSize = "50px";
	quitButton.style.color = "red";
	quitButton.style.width = "100px";
	quitButton.innerHTML = "Quit";
	document.body.appendChild(quitButton);
	
	var ytbButton = document.createElement("img");
	ytbButton.setAttribute("id", "ytbbutton");
	ytbButton.setAttribute("src", "img/youtube.png");
	ytbButton.setAttribute("width", "110px");
	ytbButton.setAttribute("height", "80px");
	ytbButton.setAttribute("onclick", "youtube()");
	ytbButton.style.position = "absolute";
	ytbButton.style.top = "570px";
	ytbButton.style.left = "1250px";
	document.body.appendChild(ytbButton);
	
	var pmcButton = document.createElement("img");
	pmcButton.setAttribute("id", "pmcbutton");
	pmcButton.setAttribute("src", "img/pmc.jpg");
	pmcButton.setAttribute("width", "80px");
	pmcButton.setAttribute("height", "80px");
	pmcButton.setAttribute("onclick", "pmc()")
	pmcButton.style.position = "absolute";
	pmcButton.style.top = "570px";
	pmcButton.style.left = "1150px";
	document.body.appendChild(pmcButton);
	
	var musicButton = document.createElement("img");
	musicButton.setAttribute("id", "musicbutton");
	musicButton.setAttribute("src", "img/flashlight_button.png");
	musicButton.setAttribute("width", "70px");
	musicButton.setAttribute("height", "70px");
	musicButton.setAttribute("onclick", "music()")
	musicButton.style.position = "absolute";
	musicButton.style.top = "30px";
	musicButton.style.left = "1250px";
	document.body.appendChild(musicButton);
	
	if (musicType == true) {
	  mmmusic = new Audio("sounds/music.mp3");
	  mmmusic.play();
	  mmmusic.loop = true;
	}
  }, creditTime = 20000);
}

function play() {
  var removelogo = document.getElementById("menulogo");
  document.body.removeChild(removelogo);
  var removeplay = document.getElementById("playbutton");
  document.body.removeChild(removeplay);
  var removecredit = document.getElementById("creditbutton");
  document.body.removeChild(removecredit);
  var removequit = document.getElementById("quitbutton");
  document.body.removeChild(removequit);
  var removeytb = document.getElementById("ytbbutton");
  document.body.removeChild(removeytb);
  var removepmc = document.getElementById("pmcbutton");
  document.body.removeChild(removepmc);
  var removemusic = document.getElementById("musicbutton");
  document.body.removeChild(removemusic);
  
  var loading = document.createElement("h2");
  loading.setAttribute("id", "loading");
  loading.style.color = "red";
  loading.style.fontSize = "50px";
  loading.innerHTML = "Loading.";
  document.body.appendChild(loading);
  
  mmmusic.pause();
  
  snd = new Audio("sounds/click.ogg");
  snd.play();
  
  var playTime = 52000;
  setTimeout(function () {
    var removeload = document.getElementById("loading");
	document.body.removeChild(removeload);
	
    var body = document.getElementById("body");
	body.style.background = "url()";
	body.style.backgroundColor = "black";
	body.style.cursor = "none";
	
	var cutScene = document.createElement("canvas");
	cutScene.setAttribute("id", "cutscene");
	cutScene.setAttribute("align", "center");
	cutScene.style.position = "absolute";
	cutScene.style.width = "1340px;";
	cutScene.style.height = "640px";
	document.body.appendChild(cutScene);
  }, playTime = 4000);
  setTimeout(function () {
    var divPhone = document.createElement("div");
	divPhone.setAttribute("id", "phone");
	divPhone.setAttribute("align", "center");
	document.body.appendChild(divPhone);
	
    var phone = document.createElement("img");
	phone.setAttribute("id", "mphone");
	phone.setAttribute("src", "img/phone.png");
	phone.setAttribute("width", "450px");
	phone.setAttribute("height", "650px");
	phone.style.position = "absolute";
	phone.style.position = "fixed";
	phone.style.top = "600px";
	phone.style.left = "500px";
	document.getElementById("phone").appendChild(phone);
	
	snd = new Audio("sounds/phone.mp3");
	snd.play();
  }, playTime = 8000);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "550px";
  }, playTime = 8010);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "500px";
  }, playTime = 8020);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "450px";
  }, playTime = 8030);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "400px";
  }, playTime = 8040);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "350px";
  }, playTime = 8050);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "300px";
  }, playTime = 8060);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "250px";
  }, playTime = 8070);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "200px";
  }, playTime = 8080);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "150px";
  }, playTime = 8090);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "100px";
  }, playTime = 8100);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "50px";
  }, playTime = 8110);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.setAttribute("src", "img/phone1.png");
  }, playTime = 8500);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.setAttribute("src", "img/phone2.png");
	snd = new Audio("sounds/chat.ogg");
	snd.play();
  }, playTime = 12000);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.setAttribute("src", "img/phone3.png");
	snd = new Audio("sounds/chat.ogg");
	snd.play();
  }, playTime = 17000);
  setTimeout(function () {
    snd = new Audio("sounds/typing_phone.mp3");
	snd.play();
  }, playTime = 20000);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.setAttribute("src", "img/phone4.png");
	snd = new Audio("sounds/click.ogg");
	snd.play();
  }, playTime = 23000);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.setAttribute("src", "img/phone5.png");
	snd = new Audio("sounds/chat.ogg");
	snd.play();
  }, playTime = 26000);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.setAttribute("src", "img/phone6.png");
	snd = new Audio("sounds/chat.ogg");
	snd.play();
  }, playTime = 33000);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "100px";
  }, playTime = 40010);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "150px";
  }, playTime = 40020);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "200px";
  }, playTime = 40030);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "250px";
  }, playTime = 40040);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "300px";
  }, playTime = 40050);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "350px";
  }, playTime = 40060);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "400px";
  }, playTime = 40070);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "450px";
  }, playTime = 40080);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "500px";
  }, playTime = 40090);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "550px";
  }, playTime = 40100);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "600px";
  }, playTime = 40110);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "650px";
  }, playTime = 40120);
  setTimeout(function () {
    var phoneAnim = document.getElementById("mphone");
	phoneAnim.style.top = "700px";
	
	var removephone = document.getElementById("phone");
	document.body.removeChild(removephone);
  }, playTime = 40130);
  setTimeout(function () {
    mmmusic = new Audio("sounds/music.mp3");
	mmmusic.play();
  }, playTime = 42000);
  setTimeout(function () {
    var logo = document.createElement("h1");
	logo.setAttribute("align", "center");
	logo.setAttribute("id", "logo");
	logo.style.position = "absolute"
	logo.style.position = "fixed"
	logo.style.paddingTop = "220px";
	logo.style.color = "red";
	logo.style.fontSize = "100px";
	logo.innerHTML = "O";
	document.body.appendChild(logo);
  }, playTime = 45000);
  setTimeout(function () {
    var logoAnim = document.getElementById("logo");
	logoAnim.innerHTML = "One";
  }, playTime = 45500);
  setTimeout(function () {
    var logoAnim = document.getElementById("logo");
	logoAnim.innerHTML = "One Night";
  }, playTime = 46000);
  setTimeout(function () {
    var logoAnim = document.getElementById("logo");
	logoAnim.innerHTML = "One Night At";
  }, playTime = 46500);
  setTimeout(function () {
    var logoAnim = document.getElementById("logo");
	logoAnim.innerHTML = "One Night At <strong>Mansion</strong>";
  }, playTime = 47000);
  setTimeout(function () {
    var removelogo = document.getElementById("logo");
	document.body.removeChild(removelogo);
  }, playTime = 52000);
  setTimeout(function () {
    var begin = document.createElement("h1");
	begin.setAttribute("id", "begin");
	begin.style.position = "absolute"
	begin.style.position = "fixed"
	begin.style.paddingTop = "220px";
	begin.style.paddingLeft = "540px";
	begin.style.color = "red";
	begin.style.fontSize = "50px";
	begin.innerHTML = "Midnight";
	document.body.appendChild(begin);
	
	snd = new Audio("sounds/thunder.ogg");
	snd.play();
  }, playTime = 60000);
  setTimeout(function () {
    var body = document.getElementById("body");
	body.style.backgroundColor = "yellow";
  }, playTime = 60001);
  setTimeout(function () {
    var body = document.getElementById("body");
	body.style.backgroundColor = "black";
  }, playTime = 60100);
  setTimeout(function () {
    var body = document.getElementById("body");
	body.style.background = "linear-gradient( rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.93) ), url(img/spawner.png) no-repeat center center fixed";
	body.style.cursor = "default";
	
    var removeBegin = document.getElementById("begin");
	document.body.removeChild(removeBegin);
	var removecs = document.getElementById("cutscene");
	document.body.removeChild(removecs);
	
	var mntButton = document.createElement("img");
	mntButton.setAttribute("src", "img/monitor_button.png");
	mntButton.setAttribute("id", "mntbutton");
	mntButton.setAttribute("width", "300px");
	mntButton.setAttribute("height", "100px");
	mntButton.setAttribute("onclick", "mntopen()");
	mntButton.style.position = "absolute";
	mntButton.style.float = "left";
	mntButton.style.top = "550px";
	document.body.appendChild(mntButton);
	
	var flButton = document.createElement("img");
	flButton.setAttribute("src", "img/flashlight_button.png");
	flButton.setAttribute("id", "flbutton");
	flButton.setAttribute("width", "100px");
	flButton.setAttribute("height", "100px");
	flButton.setAttribute("onclick", "flopen()");
	flButton.style.position = "absolute";
	flButton.style.left = "1000px";
	flButton.style.top = "550px";
	document.body.appendChild(flButton);
	
	var monitor = document.createElement("img");
	monitor.setAttribute("src", "img/monitor.png");
	monitor.setAttribute("id", "monitor");
	monitor.setAttribute("width", "700px");
	monitor.setAttribute("height", "600px");
	monitor.style.position = "absolute";
	monitor.style.position = "fixed";
	monitor.style.float = "left";
	monitor.style.top = "700px";
	document.body.appendChild(monitor);
	
	var flashlight = document.createElement("img");
	flashlight.setAttribute("src", "img/flashlight.png");
	flashlight.setAttribute("id", "flashlight");
	flashlight.setAttribute("width", "700px");
	flashlight.setAttribute("height", "630px");
	flashlight.style.position = "absolute";
	flashlight.style.position = "fixed";
	flashlight.style.left = "520px";
	flashlight.style.top = "700px";
	document.body.appendChild(flashlight);
	
	var tool = document.createElement("img");
	tool.setAttribute("src", "img/tool.png");
	tool.setAttribute("id", "tool");
	tool.setAttribute("width", "700px");
	tool.setAttribute("height", "630px");
	tool.style.position = "absolute";
	tool.style.position = "fixed";
	tool.style.left = "520px";
	tool.style.top = "700px";
	document.body.appendChild(tool);
	
	var battery = document.createElement("img");
	battery.setAttribute("src", "img/battery/battery_full.png");
	battery.setAttribute("id", "battery");
	battery.setAttribute("width", "200px");
	battery.setAttribute("height", "100px");
	battery.style.position = "absolute";
	battery.style.left = "1100px";
	document.body.appendChild(battery);
	
	gameamb = new Audio("sounds/ambience.ogg");
	gameamb.play();
	gameamb.volume = 0.2;
	gameamb.loop = true;
	
	Game = true;
	startTime = true;
  }, playTime = 68000);
}
//End of main menu

//Game
var Game = false;

var isScreen = false;
var isMnt = false;
function mntopen() {
  var mntOpening = 150;
  setTimeout(function () {
    var removemntButton = document.getElementById("mntbutton");
	document.body.removeChild(removemntButton);
	if (isFl == true) {
	  var removeflButton = document.getElementById("flbutton");
	  document.body.removeChild(removeflButton);
	}
	var grtbuttonExists = document.getElementById("grtbutton");
	if (grtbuttonExists) {
	  if (isGrt == true) {
	    var removegrtButton = document.getElementById("grtbutton");
	    document.body.removeChild(removegrtButton);
	  }
	}
	
	isMnt = true;
	
	snd = new Audio("sounds/monitor.mp3");
	snd.play();
  }, mntOpening = 1);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "650px";
  }, mntOpening = 10);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "600px";
  }, mntOpening = 20);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "550px";
  }, mntOpening = 30);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "500px";
  }, mntOpening = 40);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "450px";
  }, mntOpening = 50);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "400px";
  }, mntOpening = 60);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "350px";
  }, mntOpening = 70);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "300px";
  }, mntOpening = 80);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "250px";
  }, mntOpening = 90);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "200px";
  }, mntOpening = 100);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "150px";
  }, mntOpening = 110);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "100px";
  }, mntOpening = 120);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "70px";
	
	mntAmbience = new Audio("sounds/monitor_ambience.mp3");
	mntAmbience.play();
	mntAmbience.volume = 0.1;
	mntAmbience.loop = true;
  }, mntOpening = 130);
  setTimeout(function () {
    var mntButton = document.createElement("img");
	mntButton.setAttribute("src", "img/monitor_button.png");
	mntButton.setAttribute("id", "mntbutton");
	mntButton.setAttribute("width", "150px");
	mntButton.setAttribute("height", "50px");
	mntButton.setAttribute("onclick", "mntclose()");
	mntButton.style.position = "absolute";
	mntButton.style.left = "270px";
	mntButton.style.top = "600px";
	document.body.appendChild(mntButton);
	
	var screen = document.createElement("img");
	screen.setAttribute("id", "screen");
	screen.setAttribute("src", "img/cams/choose_cams.gif");
	screen.setAttribute("width", "645px");
	screen.setAttribute("height", "420px");
	screen.style.position = "absolute";
	screen.style.float = "left";
	screen.style.left = "25px";
	screen.style.top = "90px";
	screen.style.border = "solid";
	screen.style.borderColor = "white";
	document.body.appendChild(screen);
	
	var c1Button = document.createElement("img");
	c1Button.setAttribute("id", "c1button");
	c1Button.setAttribute("src", "img/cams/cam1_button.png");
	c1Button.setAttribute("width", "60px");
	c1Button.setAttribute("height", "60px");
	c1Button.setAttribute("onclick", "cam1()");
	c1Button.style.position = "absolute";
	c1Button.style.float = "left";
	c1Button.style.left = "35px";
	c1Button.style.top = "530px";
	document.body.appendChild(c1Button);
	
	var c2Button = document.createElement("img");
	c2Button.setAttribute("id", "c2button");
	c2Button.setAttribute("src", "img/cams/cam2_button.png");
	c2Button.setAttribute("width", "60px");
	c2Button.setAttribute("height", "60px");
	c2Button.setAttribute("onclick", "cam2()");
	c2Button.style.position = "absolute";
	c2Button.style.float = "left";
	c2Button.style.left = "97px";
	c2Button.style.top = "530px";
	document.body.appendChild(c2Button);
	
	var c3Button = document.createElement("img");
	c3Button.setAttribute("id", "c3button");
	c3Button.setAttribute("src", "img/cams/cam3_button.png");
	c3Button.setAttribute("width", "60px");
	c3Button.setAttribute("height", "60px");
	c3Button.setAttribute("onclick", "cam3()");
	c3Button.style.position = "absolute";
	c3Button.style.float = "left";
	c3Button.style.left = "159px";
	c3Button.style.top = "530px";
	document.body.appendChild(c3Button);
	
	var c4Button = document.createElement("img");
	c4Button.setAttribute("id", "c4button");
	c4Button.setAttribute("src", "img/cams/cam4_button.png");
	c4Button.setAttribute("width", "60px");
	c4Button.setAttribute("height", "60px");
	c4Button.setAttribute("onclick", "cam4()");
	c4Button.style.position = "absolute";
	c4Button.style.float = "left";
	c4Button.style.left = "221px";
	c4Button.style.top = "530px";
	document.body.appendChild(c4Button);
	
	var c5Button = document.createElement("img");
	c5Button.setAttribute("id", "c5button");
	c5Button.setAttribute("src", "img/cams/cam5_button.png");
	c5Button.setAttribute("width", "60px");
	c5Button.setAttribute("height", "60px");
	c5Button.setAttribute("onclick", "cam5()");
	c5Button.style.position = "absolute";
	c5Button.style.float = "left";
	c5Button.style.left = "283px";
	c5Button.style.top = "530px";
	document.body.appendChild(c5Button);
	
	isScreen = true;
  }, mntOpening = 150);
}

//Choose cams
var chooseCam1 = false;
var chooseCam2 = false;
var chooseCam3 = false;
var chooseCam4 = false;
var chooseCam5 = false;

function cam1() {
  if (cam1Ghost == false && chooseCam1 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam1.png");
  }
  if (cam1Ghost == true && chooseCam1 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam1_ghost.png");
  }
  
  if (chooseCam1 == false) {
    snd = new Audio("sounds/monitor_switch.mp3");
    snd.volume = 0.05;
    snd.play();
  }
  
  chooseCam1 = true;
  chooseCam2 = false;
  chooseCam3 = false;
  chooseCam4 = false;
  chooseCam5 = false;
}
function cam2() {
  if (cam2Ghost == false && chooseCam2 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam2.png");
  }
  if (cam2Ghost == true && chooseCam2 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam2_ghost.png");
  }
  
  if (chooseCam2 == false) {
    snd = new Audio("sounds/monitor_switch.mp3");
    snd.volume = 0.05;
    snd.play();
  }
  
  chooseCam1 = false;
  chooseCam2 = true;
  chooseCam3 = false;
  chooseCam4 = false;
  chooseCam5 = false;
}
function cam3() {
  if (cam3Ghost == false && chooseCam3 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam3.png");
  }
  if (cam3Ghost == true && chooseCam3 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam3_ghost.png");
  }
  
  if (chooseCam3 == false) {
    snd = new Audio("sounds/monitor_switch.mp3");
    snd.volume = 0.05;
    snd.play();
  }
  
  chooseCam1 = false;
  chooseCam2 = false;
  chooseCam3 = true;
  chooseCam4 = false;
  chooseCam5 = false;
}
function cam4() {
  if (cam4Ghost == false && chooseCam4 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam4.png");
  }
  if (cam4Ghost == true && chooseCam4 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam4_ghost.png");
  }
  
  if (chooseCam4 == false) {
    snd = new Audio("sounds/monitor_switch.mp3");
    snd.volume = 0.05;
    snd.play();
  }
  
  chooseCam1 = false;
  chooseCam2 = false;
  chooseCam3 = false;
  chooseCam4 = true;
  chooseCam5 = false;
}
function cam5() {
  if (cam5Ghost == false && chooseCam5 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam5.png");
  }
  if (cam5Ghost == true && chooseCam5 == false) {
    var screenAnim = document.getElementById("screen");
    screenAnim.setAttribute("src", "img/cams/cam5_ghost.png");
  }
  
  if (chooseCam5 == false) {
    snd = new Audio("sounds/monitor_switch.mp3");
    snd.volume = 0.05;
    snd.play();
  }
  
  chooseCam1 = false;
  chooseCam2 = false;
  chooseCam3 = false;
  chooseCam4 = false;
  chooseCam5 = true;
}
//End of choose cams

function mntclose() {
  var mntClosing = 150;
  setTimeout(function () {
    var removemntButton = document.getElementById("mntbutton");
	document.body.removeChild(removemntButton);
	
	snd = new Audio("sounds/monitor.mp3");
	snd.play();
	
	mntAmbience.pause();
	
	isScreen = false;
	isMnt = false;
  }, mntClosing = 1);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "70px";
  }, mntClosing = 10);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "100px";
  }, mntClosing = 20);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "150px";
  }, mntClosing = 30);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "200px";
  }, mntClosing = 40);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "250px";
  }, mntClosing = 50);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "300px";
  }, mntClosing = 60);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "350px";
  }, mntClosing = 70);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "400px";
  }, mntClosing = 80);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "450px";
  }, mntClosing = 90);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "500px";
  }, mntClosing = 100);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "550px";
  }, mntClosing = 110);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "600px";
  }, mntClosing = 120);
  setTimeout(function () {
    var monitorAnim = document.getElementById("monitor");
	monitorAnim.style.top = "700px";
  }, mntClosing = 130);
  setTimeout(function () {
    if (Ghost == false && grtBroke == false) {
      var mntButton = document.createElement("img");
	  mntButton.setAttribute("src", "img/monitor_button.png");
	  mntButton.setAttribute("id", "mntbutton");
	  mntButton.setAttribute("width", "300px");
	  mntButton.setAttribute("height", "100px");
	  mntButton.setAttribute("onclick", "mntopen()");
	  mntButton.style.position = "absolute";
	  mntButton.style.float = "left";
	  mntButton.style.top = "550px";
	  document.body.appendChild(mntButton);
	}
	if (isFl == true) {
	  var flButton = document.createElement("img");
	  flButton.setAttribute("src", "img/flashlight_button.png");
	  flButton.setAttribute("id", "flbutton");
	  flButton.setAttribute("width", "100px");
	  flButton.setAttribute("height", "100px");
	  flButton.setAttribute("onclick", "flopen()");
	  flButton.style.position = "absolute";
	  flButton.style.left = "1000px";
	  flButton.style.top = "550px";
	  document.body.appendChild(flButton);
	}
	if (isGrt == true && Ghost == false) {
	  var grtButton = document.createElement("img");
	  grtButton.setAttribute("src", "img/generator_button.png");
	  grtButton.setAttribute("id", "grtbutton");
	  grtButton.setAttribute("width", "100px");
	  grtButton.setAttribute("height", "300px");
	  grtButton.setAttribute("onclick", "grtgo()");
	  grtButton.setAttribute("onmouseover", "hoveron()");
	  grtButton.setAttribute("onmouseleave", "hoveroff()");
	  grtButton.style.position = "absolute";
	  grtButton.style.float = "left";
	  grtButton.style.top = "150px";
	  grtButton.style.left = "370px";
	  grtButton.style.opacity = "0.2";
	  document.body.appendChild(grtButton);
	}
  }, mntClosing = 150);
}

var isFl = true;
var isLight = false;
function flopen() {
  var flOpening = 100;
  setTimeout(function () {
    var mntbuttonExists = document.getElementById("mntbutton");
	if (mntbuttonExists) {
      var removemntButton = document.getElementById("mntbutton");
	  document.body.removeChild(removemntButton);
	}
	var removeflButton = document.getElementById("flbutton");
	document.body.removeChild(removeflButton);
	var grtbuttonExists = document.getElementById("grtbutton");
	if (grtbuttonExists) {
	  if (isGrt == true) {
	    var removegrtButton = document.getElementById("grtbutton");
	    document.body.removeChild(removegrtButton);
	  }
	}
	
	isLight = true;
  }, flOpening = 1);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "500px";
  }, flOpening = 10);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "450px";
  }, flOpening = 20);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "400px";
  }, flOpening = 30);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "350px";
  }, flOpening = 40);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "300px";
  }, flOpening = 50);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "250px";
  }, flOpening = 60);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "200px";
  }, flOpening = 70);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "150px";
  }, flOpening = 80);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "100px";
	
	var light = document.createElement("img");
	light.setAttribute("id", "light");
	light.setAttribute("src", "img/light.png");
	light.setAttribute("width", "303px");
	light.setAttribute("height", "338px");
	light.style.position = "absolute";
	light.style.position = "fixed";
	light.style.left = "547px";
	light.style.top = "185px";
	document.body.appendChild(light);
	
	snd = new Audio("sounds/flashlight.mp3");
	snd.play();
	
	if (Ghost == true) {
	  var body = document.getElementById("body");
	  body.style.background = "linear-gradient( rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.93) ), url(img/spawner.png) no-repeat center center fixed";
	  
	  Ghost = false;
	}
  }, flOpening = 90);
  setTimeout(function () {
    var flButton = document.createElement("img");
	flButton.setAttribute("src", "img/flashlight_button.png");
	flButton.setAttribute("id", "flbutton");
	flButton.setAttribute("width", "100px");
	flButton.setAttribute("height", "100px");
	flButton.setAttribute("onclick", "flclose()");
	flButton.style.position = "absolute";
	flButton.style.left = "1000px";
	flButton.style.top = "550px";
	document.body.appendChild(flButton);
  }, flOpening = 100);
}

function flclose() {
  var flClosing = 100;
  setTimeout(function () {
	var removeflButton = document.getElementById("flbutton");
	document.body.removeChild(removeflButton);
	
	snd = new Audio("sounds/flashlight.mp3");
	snd.play();
	
	isLight = false;
  }, flClosing = 1);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "100px";
  }, flClosing = 10);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "150px";
  }, flClosing = 20);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "200px";
  }, flClosing = 30);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "250px";
  }, flClosing = 40);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "300px";
  }, flClosing = 50);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "350px";
  }, flClosing = 60);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "400px";
  }, flClosing = 70);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "450px";
  }, flClosing = 80);
  setTimeout(function () {
    var flAnim = document.getElementById("flashlight");
	flAnim.style.top = "700px";
  }, flClosing = 90);
  setTimeout(function () {
    var flButton = document.createElement("img");
	flButton.setAttribute("src", "img/flashlight_button.png");
	flButton.setAttribute("id", "flbutton");
	flButton.setAttribute("width", "100px");
	flButton.setAttribute("height", "100px");
	flButton.setAttribute("onclick", "flopen()");
	flButton.style.position = "absolute";
	flButton.style.left = "1000px";
	flButton.style.top = "550px";
	document.body.appendChild(flButton);
	
	if (Ghost == false && grtBroke == false) {
	  var mntButton = document.createElement("img");
	  mntButton.setAttribute("src", "img/monitor_button.png");
	  mntButton.setAttribute("id", "mntbutton");
	  mntButton.setAttribute("width", "300px");
	  mntButton.setAttribute("height", "100px");
	  mntButton.setAttribute("onclick", "mntopen()");
	  mntButton.style.position = "absolute";
	  mntButton.style.float = "left";
	  mntButton.style.top = "550px";
	  document.body.appendChild(mntButton);
	}
	
	if (isGrt == true && Ghost == false) {
	  var grtButton = document.createElement("img");
	  grtButton.setAttribute("src", "img/generator_button.png");
	  grtButton.setAttribute("id", "grtbutton");
	  grtButton.setAttribute("width", "100px");
	  grtButton.setAttribute("height", "300px");
	  grtButton.setAttribute("onclick", "grtgo()");
	  grtButton.setAttribute("onmouseover", "hoveron()");
	  grtButton.setAttribute("onmouseleave", "hoveroff()");
	  grtButton.style.position = "absolute";
	  grtButton.style.float = "left";
	  grtButton.style.top = "150px";
	  grtButton.style.left = "370px";
	  grtButton.style.opacity = "0.2";
	  document.body.appendChild(grtButton);
	}
  }, flClosing = 100);
}

var battery = 0;
setInterval(function () {
  if (isLight == true) {
    battery++;
  }
}, 50);
setInterval(function () {
  if (battery == 10) {
    var batteryAnim = document.getElementById("battery");
	batteryAnim.setAttribute("src", "img/battery/battery_80.png");
	
	battery = 11;
  }
  if (battery == 20) {
    var batteryAnim = document.getElementById("battery");
	batteryAnim.setAttribute("src", "img/battery/battery_60.png");
	
	battery = 21;
  }
  if (battery == 30) {
    var batteryAnim = document.getElementById("battery");
	batteryAnim.setAttribute("src", "img/battery/battery_40.png");
	
	battery = 31;
  }
  if (battery == 40) {
    var batteryAnim = document.getElementById("battery");
	batteryAnim.setAttribute("src", "img/battery/battery_20.png");
	
	battery = 41;
  }
  if (battery == 50) {
    var batteryAnim = document.getElementById("battery");
	batteryAnim.setAttribute("src", "img/battery/battery_empty.png");
	
	battery = 51;
    
	isFl = false;
	isGrt = true;
	
	var stopflTime = 100;
	setTimeout(function () {
	  var flbuttonExists = document.getElementById("flbutton");
	  if (flbuttonExists) {
	    var removeflButton = document.getElementById("flbutton");
	    document.body.removeChild(removeflButton);
	  }
	
	  snd = new Audio("sounds/flashlight.mp3");
	  snd.play();
	
	  isLight = false;
    }, stopflTime = 1);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "100px";
    }, stopflTime = 10);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "150px";
    }, stopflTime = 20);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "200px";
    }, stopflTime = 30);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "250px";
    }, stopflTime = 40);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "300px";
    }, stopflTime = 50);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "350px";
    }, stopflTime = 60);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "400px";
    }, stopflTime = 70);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "450px";
    }, stopflTime = 80);
    setTimeout(function () {
      var flAnim = document.getElementById("flashlight");
	  flAnim.style.top = "700px";
    }, stopflTime = 90);
	setTimeout(function () {
	  if (Ghost == false && grtBroke == false) {
	    var mntButton = document.createElement("img");
	    mntButton.setAttribute("src", "img/monitor_button.png");
	    mntButton.setAttribute("id", "mntbutton");
	    mntButton.setAttribute("width", "300px");
	    mntButton.setAttribute("height", "100px");
	    mntButton.setAttribute("onclick", "mntopen()");
	    mntButton.style.position = "absolute";
	    mntButton.style.float = "left";
	    mntButton.style.top = "550px";
	    document.body.appendChild(mntButton);
	  }
	  
	  if (isGrt == true && Ghost == false) {
	    var grtButton = document.createElement("img");
	    grtButton.setAttribute("src", "img/generator_button.png");
	    grtButton.setAttribute("id", "grtbutton");
	    grtButton.setAttribute("width", "100px");
	    grtButton.setAttribute("height", "300px");
	    grtButton.setAttribute("onclick", "grtgo()");
	    grtButton.setAttribute("onmouseover", "hoveron()");
	    grtButton.setAttribute("onmouseleave", "hoveroff()");
	    grtButton.style.position = "absolute";
	    grtButton.style.float = "left";
	    grtButton.style.top = "150px";
	    grtButton.style.left = "370px";
	    grtButton.style.opacity = "0.2";
	    document.body.appendChild(grtButton);
	  }
    }, stopflTime = 100);
  }
}, 1);

var startTime = false;
var timeScore = 1200000;
setInterval(function () {
  if (Game == true && startTime == true) {
	setTimeout(function () {
	  var times = document.createElement("h1");
	  times.setAttribute("id", "times");
	  times.style.position = "absolute";
	  times.style.fontSize = "50px";
	  times.style.color = "red";
	  times.style.float = "left";
	  times.innerHTML = "Clock: Midnight";
	  document.body.appendChild(times);
	  
	  startTime = false;
	}, timeScore = 1);
	setTimeout(function () {
	  var timeAnim = document.getElementById("times");
	  timeAnim.innerHTML = "Clock: 1:00";
	}, timeScore = 200000);
	setTimeout(function () {
	  var timeAnim = document.getElementById("times");
	  timeAnim.innerHTML = "Clock: 2:00";
	}, timeScore = 400000);
	setTimeout(function () {
	  var timeAnim = document.getElementById("times");
	  timeAnim.innerHTML = "Clock: 3:00";
	}, timeScore = 600000);
	setTimeout(function () {
	  var timeAnim = document.getElementById("times");
	  timeAnim.innerHTML = "Clock: 4:00";
	}, timeScore = 800000);
	setTimeout(function () {
	  var timeAnim = document.getElementById("times");
	  timeAnim.innerHTML = "Clock: 5:00";
	}, timeScore = 1000000);
	setTimeout(function () {
	  if (lose == false) {
	    var timesExists = document.getElementById("times");
	    if (timesExists) {
	      var removetime = document.getElementById("times");
	      document.body.removeChild(removetime);
	    }
	    var mntExists = document.getElementById("monitor");
	    if (mntExists) {
	      var removemnt = document.getElementById("monitor");
	      document.body.removeChild(removemnt);
	    }
	    var flExists = document.getElementById("flashlight");
	    if (flExists) {
	      var removefl = document.getElementById("flashlight");
	      document.body.removeChild(removefl);
	    }
        var batteryExists = document.getElementById("battery");
	    if (batteryExists) {
	      var removebattery = document.getElementById("battery");
	      document.body.removeChild(removebattery);
	    }
	  
	    isLight = false;
	    Game = false;
		Ghost = false;
		isScreen = false;
	  
	    var winTime = 25000;
	    setTimeout(function () {
	      var body = document.getElementById("body");
	      body.style.background = "url()";
		  body.style.cursor = "none";
	      body.style.backgroundColor = "black"
		  
		  var cutScene = document.createElement("canvas");
	      cutScene.setAttribute("id", "cutscene");
	      cutScene.setAttribute("align", "center");
	      cutScene.style.position = "absolute";
	      cutScene.style.width = "1340px;";
	      cutScene.style.height = "640px";
	      document.body.appendChild(cutScene);
	    }, winTime = 1);
	    setTimeout(function () {
          var divPhone = document.createElement("div");
	      divPhone.setAttribute("id", "phone");
	      divPhone.setAttribute("align", "center");
	      document.body.appendChild(divPhone);
	
          var phone = document.createElement("img");
	      phone.setAttribute("id", "mphone");
	      phone.setAttribute("src", "img/6.00.png");
	      phone.setAttribute("width", "450px");
	      phone.setAttribute("height", "650px");
	      phone.style.position = "absolute";
	      phone.style.position = "fixed";
	      phone.style.top = "600px";
	      phone.style.left = "500px";
	      document.getElementById("phone").appendChild(phone);
	
	      snd = new Audio("sounds/phone.mp3");
	      snd.play();
        }, winTime = 1000);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "450px";
		}, winTime = 1010);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "400px";
		}, winTime = 1020);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "350px";
		}, winTime = 1030);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "300px";
		}, winTime = 1040);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "250px";
		}, winTime = 1050);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "200px";
		}, winTime = 1060);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "150px";
		}, winTime = 1070);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "100px";
		}, winTime = 1080);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "50px";
		}, winTime = 1090);
		setTimeout(function () {
		  snd = new Audio("sounds/6.00.mp3");
		  snd.play();
		}, winTime = 2500);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "50px";
		}, winTime = 8010);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "100px";
		}, winTime = 8020);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "150px";
		}, winTime = 8030);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "200px";
		}, winTime = 8040);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "250px";
		}, winTime = 8050);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "300px";
		}, winTime = 8060);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "350px";
		}, winTime = 8070);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "400px";
		}, winTime = 8080);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "450px";
		}, winTime = 8090);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "500px";
		}, winTime = 9000);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "550px";
		}, winTime = 9010);
		setTimeout(function () {
		  var phoneAnim = document.getElementById("mphone");
		  phoneAnim.style.top = "600px";
		}, winTime = 9020);
		setTimeout(function () {
		  var removePhone = document.getElementById("phone");
		  document.body.removeChild(removePhone);
		}, winTime = 9030);
		setTimeout(function () {
		  var win = document.createElement("h1");
	      win.setAttribute("id", "win");
	      win.style.position = "absolute"
		  win.style.top = "250px";
		  win.style.left = "530px";
	      win.style.color = "red";
		  win.style.textAlign = "center";
	      win.style.fontSize = "40px";
	      win.innerHTML = "You Win!";
	      document.body.appendChild(win);
		  
		  snd = new Audio("sounds/win.ogg");
		  snd.play();
		}, winTime = 13000);
		setTimeout(function () {
		  var winAnim = document.getElementById("win");
		  winAnim.innerHTML = "Thanks for<br />Playing :)";
		}, winTime = 16000);
		setTimeout(function () {
		  var winAnim = document.getElementById("win");
		  winAnim.innerHTML = "You are the best Gamer!<br />I never seen!";
		}, winTime = 20000);
		setTimeout(function () {
		  var winAnim = document.getElementById("win");
		  winAnim.innerHTML = "Game is restarting.";
        }, winTime = 25000);
		setTimeout(function () {
		  window.open("ONAM_Launcher.html", "_self");
        }, winTime = 28000);
	  }

	}, timeScore = 1200000);
  }
}, 50);

//Lose
var lose = false;
var jsTime = 0;
var grtjsTime = 0;
var jsRandom;

setInterval(function () {
  if (nearGrt == true && cam1Ghost == true && Game == true) {
    grtjsTime++;
  }
}, 90);
setInterval(function () {
  if (Ghost == true && Game == true) {
    jsTime++;
  }
}, 60);
setInterval(function () {
  if (jsTime == 70 && jsRandom == 2) {
    var timesExists = document.getElementById("times");
	if (timesExists) {
	  var removetime = document.getElementById("times");
	  document.body.removeChild(removetime);
	}
	var mntExists = document.getElementById("monitor");
	if (mntExists) {
	  var removemnt = document.getElementById("monitor");
	  document.body.removeChild(removemnt);
	}
	var flExists = document.getElementById("flashlight");
	if (flExists) {
	  var removefl = document.getElementById("flashlight");
	  document.body.removeChild(removefl);
	}
    var batteryExists = document.getElementById("battery");
	if (batteryExists) {
	  var removebattery = document.getElementById("battery");
	  document.body.removeChild(removebattery);
	}
	
	var body = document.getElementById("body");
    body.style.cursor = "none";
	body.style.backgroundColor = "black";
	
	var divjs = document.createElement("div");
	divjs.setAttribute("align", "center");
	divjs.setAttribute("id", "js");
	divjs.style.top = "200px";
	document.body.appendChild(divjs);
	
    var js = document.createElement("img");
	js.setAttribute("id", "mjs");
	js.setAttribute("src", "img/jumpscare.png");
	js.setAttribute("width", "1500px");
	js.setAttribute("height", "1500px");
	js.style.position = "absolute";
	js.style.position = "fixed";
	js.style.right = "-30px";
	js.style.top = "0px";
	document.getElementById("js").appendChild(js);
	
	var cutScene = document.createElement("canvas");
	cutScene.setAttribute("id", "cutscene");
	cutScene.setAttribute("align", "center");
	cutScene.style.position = "absolute";
	cutScene.style.width = "1340px;";
	cutScene.style.height = "640px";
	document.body.appendChild(cutScene);
	
	snd = new Audio("sounds/alexjumpscare.ogg");
	snd.play();
	
	jsTime = 0;
	tpScore = 0;
	
	isScreen = false;
	isLight = false;
	Game = false;
	Ghost = false;
	lose = true;
	
	var loseTime = 12000;
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-50px";
	}, loseTime = 10);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-100px";
	}, loseTime = 50);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-200px";
	}, loseTime = 100);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-300px";
	}, loseTime = 150);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-400px";
	}, loseTime = 200);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-530px";
	}, loseTime = 250);
	setTimeout(function () {
	  var removejs = document.getElementById("js");
	  document.body.removeChild(removejs);
	  
	  var body = document.getElementById("body");
	  body.style.background = "url(img/cams/cam_break.gif)";
	  
	  snd = new Audio("sounds/cam_break.mp3");
	  snd.play();
	}, loseTime = 1700);
	setTimeout(function () {
	  var lose = document.createElement("h1");
	  lose.setAttribute("id", "lose");
	  lose.style.position = "absolute"
      lose.style.top = "220px";
	  lose.style.left = "530px";
	  lose.style.color = "red";
	  lose.style.textAlign = "center";
	  lose.style.fontSize = "40px";
	  lose.innerHTML = "Game Over";
	  document.body.appendChild(lose);
	}, loseTime = 4000);
	setTimeout(function () {
	  var loseAnim = document.getElementById("lose");
	  loseAnim.innerHTML = "Game is restarting.";
	}, loseTime = 9000);
	setTimeout(function () {
	  window.open("ONAM_Launcher.html", "_self");
	}, loseTime = 12000);
  }
}, 1);

setInterval(function () {
  if (grtjsTime == 70 && jsRandom == 2) {
    var timesExists = document.getElementById("times");
	if (timesExists) {
	  var removetime = document.getElementById("times");
	  document.body.removeChild(removetime);
	}
	var mntExists = document.getElementById("monitor");
	if (mntExists) {
	  var removemnt = document.getElementById("monitor");
	  document.body.removeChild(removemnt);
	}
	var flExists = document.getElementById("flashlight");
	if (flExists) {
	  var removefl = document.getElementById("flashlight");
	  document.body.removeChild(removefl);
	}
    var batteryExists = document.getElementById("battery");
	if (batteryExists) {
	  var removebattery = document.getElementById("battery");
	  document.body.removeChild(removebattery);
	}
	
	var body = document.getElementById("body");
    body.style.cursor = "none";
	body.style.backgroundColor = "black";
	
	var divjs = document.createElement("div");
	divjs.setAttribute("align", "center");
	divjs.setAttribute("id", "js");
	divjs.style.top = "200px";
	document.body.appendChild(divjs);
	
    var js = document.createElement("img");
	js.setAttribute("id", "mjs");
	js.setAttribute("src", "img/jumpscare.png");
	js.setAttribute("width", "1500px");
	js.setAttribute("height", "1500px");
	js.style.position = "absolute";
	js.style.position = "fixed";
	js.style.right = "-30px";
	js.style.top = "0px";
	document.getElementById("js").appendChild(js);
	
	var cutScene = document.createElement("canvas");
	cutScene.setAttribute("id", "cutscene");
	cutScene.setAttribute("align", "center");
	cutScene.style.position = "absolute";
	cutScene.style.width = "1340px;";
	cutScene.style.height = "640px";
	document.body.appendChild(cutScene);
	
	snd = new Audio("sounds/alexjumpscare.ogg");
	snd.play();
	
	jsTime = 0;
	tpScore = 0;
	
	isScreen = false;
	isLight = false;
	Game = false;
	Ghost = false;
	lose = true;
	
	var loseTime = 12000;
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-50px";
	}, loseTime = 10);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-100px";
	}, loseTime = 50);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-200px";
	}, loseTime = 100);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-300px";
	}, loseTime = 150);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-400px";
	}, loseTime = 200);
	setTimeout(function () {
	  var jsAnim = document.getElementById("mjs");
	  jsAnim.style.top = "-530px";
	}, loseTime = 250);
	setTimeout(function () {
	  var removejs = document.getElementById("js");
	  document.body.removeChild(removejs);
	  
	  var body = document.getElementById("body");
	  body.style.background = "url(img/cams/cam_break.gif)";
	  
	  snd = new Audio("sounds/cam_break.mp3");
	  snd.play();
	}, loseTime = 1700);
	setTimeout(function () {
	  var lose = document.createElement("h1");
	  lose.setAttribute("id", "lose");
	  lose.style.position = "absolute"
      lose.style.top = "220px";
	  lose.style.left = "530px";
	  lose.style.color = "red";
	  lose.style.textAlign = "center";
	  lose.style.fontSize = "40px";
	  lose.innerHTML = "Game Over";
	  document.body.appendChild(lose);
	}, loseTime = 4000);
	setTimeout(function () {
	  var loseAnim = document.getElementById("lose");
	  loseAnim.innerHTML = "Game is restarting.";
	}, loseTime = 9000);
	setTimeout(function () {
	  window.open("ONAM_Launcher.html", "_self");
	}, loseTime = 12000);
  }
}, 1);
setInterval(function () {
  if (jsTime == 71) {
    jsTime = 0;
  }
}, 1);
setInterval(function () {
  if (grtjsTime == 71) {
    grtjsTime = 0;
  }
}, 1);
setInterval(function () {
  jsRandom = Math.floor((Math.random() * 2) + 1);
}, 200);
//End of lose

//Ghost
var cam1Ghost = false;
var cam2Ghost = false;
var cam3Ghost = false;
var cam4Ghost = false;
var cam5Ghost = false;
var Ghost = false;
var tpScore = 0;
var tpRandom = Math.floor((Math.random() * 6) + 1);
setInterval(function () {
  if (Game == true) {
    tpScore++;
  }
}, 60);
setInterval(function () {
  if (tpScore == 699) {
    if (tpRandom == 1) {
	  cam1Ghost = true;
	  cam2Ghost = false;
	  cam3Ghost = false;
	  cam4Ghost = false;
	  cam5Ghost = false;
	  Ghost = false;
	  
	  if (chooseCam1 == true && cam1Ghost == true) {
	    var screenAnim = document.getElementById("screen");
		screenAnim.setAttribute("src", "img/cams/cam_break.gif");
		snd = new Audio("sounds/cam_break.mp3");
		snd.volume = 0.05;
		snd.play();
	  }
	}
	if (tpRandom == 2) {
	  cam1Ghost = false;
	  cam2Ghost = true;
	  cam3Ghost = false;
	  cam4Ghost = false;
	  cam5Ghost = false;
	  Ghost = false;
	  
	  if (chooseCam2 == true && cam2Ghost == true) {
	    var screenAnim = document.getElementById("screen");
		screenAnim.setAttribute("src", "img/cams/cam_break.gif");
		snd = new Audio("sounds/cam_break.mp3");
		snd.volume = 0.05;
		snd.play();
	  }
	}
	if (tpRandom == 3) {
	  cam1Ghost = false;
	  cam2Ghost = false;
	  cam3Ghost = true;
	  cam4Ghost = false;
	  cam5Ghost = false;
	  Ghost = false;
	  
	  if (chooseCam3 == true && cam3Ghost == true) {
	    var screenAnim = document.getElementById("screen");
		screenAnim.setAttribute("src", "img/cams/cam_break.gif");
		snd = new Audio("sounds/cam_break.mp3");
		snd.volume = 0.05;
		snd.play();
	  }
	}
	if (tpRandom == 4) {
	  cam1Ghost = false;
	  cam2Ghost = false;
	  cam3Ghost = false;
	  cam4Ghost = true;
	  cam5Ghost = false;
	  Ghost = false;
	  
	  if (chooseCam4 == true && cam4Ghost == true) {
	    var screenAnim = document.getElementById("screen");
		screenAnim.setAttribute("src", "img/cams/cam_break.gif");
		snd = new Audio("sounds/cam_break.mp3");
		snd.volume = 0.05;
		snd.play();
	  }
	}
	if (tpRandom == 5) {
	  cam1Ghost = false;
	  cam2Ghost = false;
	  cam3Ghost = false;
	  cam4Ghost = false;
	  cam5Ghost = true;
	  Ghost = false;
	  
	  if (chooseCam5 == true && cam5Ghost == true) {
	    var screenAnim = document.getElementById("screen");
		screenAnim.setAttribute("src", "img/cams/cam_break.gif");
		snd = new Audio("sounds/cam_break.mp3");
		snd.volume = 0.05;
		snd.play();
	  }
	}
	if (tpRandom == 6 && isLight == false && nearGrt == false && runingGrt == false) {
	  if (Ghost == false) {
	    var body = document.getElementById("body");
	    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.93) ), url(img/spawner_ghost.png) no-repeat center center fixed";
	  }
	  
	  if (Ghost == false) {
	    snd = new Audio("sounds/shadow.ogg");
		snd.volume = 0.02;
	    snd.play();
	  }
	  
	  var grtbuttonExists = document.getElementById("grtbutton");
	  if (grtbuttonExists) {
	    if (isGrt == true) {
	      var removegrtButton = document.getElementById("grtbutton");
	      document.body.removeChild(removegrtButton);
	    }
	  }
	  
	  cam1Ghost = false;
	  cam2Ghost = false;
	  cam3Ghost = false;
	  cam4Ghost = false;
	  cam5Ghost = false;
	  Ghost = true;
	}
  }
}, 1);
setInterval(function () {
  if (tpScore == 700) {
    tpScore = 0;
  }
}, 1);

setInterval(function () {
  tpRandom = Math.floor((Math.random() * 6) + 1);
}, 200);
setInterval(function () {
  if (jsRandom == 7) {
    tpRandom = 0;
  }
}, 1);

setInterval(function () {
  if (Ghost == true) {
    tpRandom = 0;
	tpScore = 0;
	
	cam1Ghost = false;
	cam2Ghost = false;
	cam3Ghost = false;
	cam4Ghost = false;
	cam5Ghost = false;
	Ghost = true;
  }
}, 20);
setInterval(function () {
  if (Ghost == false) {
    jsTime = 0;
  }
}, 20);
//End of ghost

//Generator
var isGrt = false;
var nearGrt = false;
var runingGrt = false;
var grtBroke = false;
var useTool = false;
var grtLife = 0;
var grtRandom;
var toolSnd;
var fixTime = 0;
var charge;
var poweron;

function hoveron() {
  var grtbuttonAnim = document.getElementById("grtbutton");
  grtbuttonAnim.style.opacity = "1";
}
function hoveroff() {
  var grtbuttonAnim = document.getElementById("grtbutton");
  grtbuttonAnim.style.opacity = "0.2";
}

function grtgo() {
  var mntbuttonExists = document.getElementById("mntbutton");
  if (mntbuttonExists) {
    var removemntButton = document.getElementById("mntbutton");
	document.body.removeChild(removemntButton);
  }
  var flbuttonExists = document.getElementById("flbutton");
  if (flbuttonExists) {
    var removeflButton = document.getElementById("flbutton");
	document.body.removeChild(removeflButton);
  }
  var grtbuttonExists = document.getElementById("grtbutton");
  if (grtbuttonExists) {
    var removegrtButton = document.getElementById("grtbutton");
	document.body.removeChild(removegrtButton);
  }
  
  runingGrt = true;
  
  var runinggrtTime = 2000;
  setTimeout(function () {
    var body = document.getElementById("body");
	body.style.background = "url()";
	body.style.backgroundColor = "black";
	
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 100);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 300);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 600);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 900);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 1200);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 1500);
  setTimeout(function () {
    if (Game == true) {
      var body = document.getElementById("body");
	  if (grtBroke == false) {
	    body.style.background = "url(img/generator_light.png) no-repeat center center fixed";
	  }
	  if (grtBroke == true) {
	    body.style.background = "linear-gradient( rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.91) ), url(img/generator.png) no-repeat center center fixed";
	  }
	  
	  var backButton = document.createElement("img");
	  backButton.setAttribute("src", "img/monitor_button.png");
	  backButton.setAttribute("id", "backbutton");
	  backButton.setAttribute("width", "300px");
	  backButton.setAttribute("height", "100px");
	  backButton.setAttribute("onclick", "grtback()");
	  backButton.style.position = "absolute";
	  backButton.style.float = "left";
	  backButton.style.top = "550px";
	  document.body.appendChild(backButton);
	  
	  if (isFl == false && grtBroke == false) {
	    var charButton = document.createElement("img");
	    charButton.setAttribute("src", "img/charge_button.png");
	    charButton.setAttribute("id", "charbutton");
	    charButton.setAttribute("width", "300px");
	    charButton.setAttribute("height", "100px");
		charButton.setAttribute("onclick", "chargebutton()");
	    charButton.style.position = "absolute";
	    charButton.style.position = "fixed";
	    charButton.style.left = "800px";
	    charButton.style.top = "550px";
	    document.body.appendChild(charButton);
	  }
	  
	  if (grtBroke == true) {
	    var fixButton = document.createElement("canvas");
	    fixButton.setAttribute("id", "fixbutton");
	    fixButton.setAttribute("width", "300px");
	    fixButton.setAttribute("height", "300px");
		fixButton.setAttribute("onclick", "usetool()");
	    fixButton.style.position = "absolute";
	    fixButton.style.left = "500px";
	    fixButton.style.top = "200px";
	    document.body.appendChild(fixButton);
	  }
	  
	  runingGrt = false;
	  nearGrt = true;
	}
  }, runinggrtTime = 3000);
}

function grtback() {
  nearGrt = false;
  runingGrt = true;
  jsTime = 0;
  
  var runinggrtTime = 2000;
  setTimeout(function () {
    var body = document.getElementById("body");
	body.style.background = "url()";
	body.style.backgroundColor = "black";
	
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 100);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 300);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 600);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 900);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 1200);
  setTimeout(function () {
    snd = new Audio("sounds/runing.ogg");
	snd.play();
  }, runinggrtTime = 1500);
  setTimeout(function () {
    if (Game == true) {
      var body = document.getElementById("body");
	  body.style.background = "linear-gradient( rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.93) ), url(img/spawner.png) no-repeat center center fixed";
	  if (grtBroke == false && Ghost == false) {
	    var mntButton = document.createElement("img");
	    mntButton.setAttribute("src", "img/monitor_button.png");
	    mntButton.setAttribute("id", "mntbutton");
	    mntButton.setAttribute("width", "300px");
	    mntButton.setAttribute("height", "100px");
	    mntButton.setAttribute("onclick", "mntopen()");
	    mntButton.style.position = "absolute";
	    mntButton.style.float = "left";
	    mntButton.style.top = "550px";
	    document.body.appendChild(mntButton);
	  }
	  
	  if (isFl == true) {
	    var flButton = document.createElement("img");
	    flButton.setAttribute("src", "img/flashlight_button.png");
	    flButton.setAttribute("id", "flbutton");
	    flButton.setAttribute("width", "100px");
	    flButton.setAttribute("height", "100px");
	    flButton.setAttribute("onclick", "flopen()");
	    flButton.style.position = "absolute";
	    flButton.style.left = "1000px";
	    flButton.style.top = "550px";
	    document.body.appendChild(flButton);
	  }
	  
	  if (isGrt == true && Ghost == false) {
	    var grtButton = document.createElement("img");
	    grtButton.setAttribute("src", "img/generator_button.png");
	    grtButton.setAttribute("id", "grtbutton");
	    grtButton.setAttribute("width", "100px");
	    grtButton.setAttribute("height", "300px");
	    grtButton.setAttribute("onclick", "grtgo()");
	    grtButton.setAttribute("onmouseover", "hoveron()");
	    grtButton.setAttribute("onmouseleave", "hoveroff()");
	    grtButton.style.position = "absolute";
	    grtButton.style.float = "left";
	    grtButton.style.top = "150px";
	    grtButton.style.left = "370px";
	    grtButton.style.opacity = "0.2";
	    document.body.appendChild(grtButton);
	  }
	  
	  runingGrt = false;
	}
  }, runinggrtTime = 3000);
}

function chargebutton() {
    var chargeTime = 20;
	setTimeout(function () {
	  charge = new Audio("sounds/charge.mp3");
      charge.play();
	  
	  var charbuttonExists = document.getElementById("charbutton");
	  if (charbuttonExists) {
        var removecharButton = document.getElementById("charbutton");
        document.body.removeChild(removecharButton);
	  }
	}, chargeTime = 10);
	setTimeout(function () {
	  var batteryAnim = document.getElementById("battery");
      batteryAnim.setAttribute("src", "img/battery/battery_full.png");
  
      battery = 0;
  
      if (grtBroke == false) {
        isGrt = false;
      }
  
      isFl = true;
	}, chargeTime = 20);
}

function usetool() {
  var removefixButton = document.getElementById("fixbutton");
  document.body.removeChild(removefixButton);
  var removebackButton = document.getElementById("backbutton");
  document.body.removeChild(removebackButton);
  
  var toolAnim = 100;
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "400px";
  }, toolAnim = 10);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "350px";
  }, toolAnim = 20);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "300px";
  }, toolAnim = 30);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "250px";
  }, toolAnim = 40);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "200px";
  }, toolAnim = 50);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "150px";
  }, toolAnim = 60);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "110px";
	
	if (grtBroke == true) {
	  var fixButton = document.createElement("canvas");
	  fixButton.setAttribute("id", "fixbutton");
	  fixButton.setAttribute("width", "300px");
	  fixButton.setAttribute("height", "300px");
      fixButton.setAttribute("onclick", "stopusetool()");
	  fixButton.style.position = "absolute";
	  fixButton.style.left = "500px";
	  fixButton.style.top = "200px";
	  document.body.appendChild(fixButton);
	}
	
	toolSnd = new Audio("sounds/tool.mp3");
	toolSnd.volume = 0.1;
	toolSnd.loop = true;
    toolSnd.play();
	
	useTool = true;
  }, toolAnim = 70);
}

function stopusetool() {
  var removefixButton = document.getElementById("fixbutton");
  document.body.removeChild(removefixButton);
  
  toolSnd.pause();
  
  useTool = false;
  var toolAnim = 100;
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "100px";
  }, toolAnim = 10);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "150px";
  }, toolAnim = 20);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "200px";
  }, toolAnim = 30);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "250px";
  }, toolAnim = 40);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "300px";
  }, toolAnim = 50);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "350px";
  }, toolAnim = 60);
  setTimeout(function () {
    var toolAnim = document.getElementById("tool");
	toolAnim.style.top = "700px";
	
	if (grtBroke == true) {
	  var fixButton = document.createElement("canvas");
	  fixButton.setAttribute("id", "fixbutton");
	  fixButton.setAttribute("width", "300px");
	  fixButton.setAttribute("height", "300px");
      fixButton.setAttribute("onclick", "usetool()");
	  fixButton.style.position = "absolute";
	  fixButton.style.left = "500px";
	  fixButton.style.top = "200px";
	  document.body.appendChild(fixButton);
	}
	
	var backButton = document.createElement("img");
	backButton.setAttribute("src", "img/monitor_button.png");
	backButton.setAttribute("id", "backbutton");
	backButton.setAttribute("width", "300px");
	backButton.setAttribute("height", "100px");
	backButton.setAttribute("onclick", "grtback()");
    backButton.style.position = "absolute";
	backButton.style.float = "left";
	backButton.style.top = "550px";
	document.body.appendChild(backButton);
  }, toolAnim = 70);
}

setInterval(function () {
  if (useTool == true && grtBroke == true) {
    fixTime++;
  }
}, 90);
setInterval(function () {
  if (fixTime == 100) {
    if (nearGrt == true) {
	  body.style.background = "url(img/generator_light.png) no-repeat center center fixed";
	}
	
	grtBroke = false;
	useTool = false;
	fixTime = 0;
	
	var removefixButton = document.getElementById("fixbutton");
    document.body.removeChild(removefixButton);
  
    toolSnd.pause();
	
	poweron = new Audio("sounds/poweron.ogg");
	poweron.volume = 0.1;
	poweron.play();

    var toolAnim = 100;
    setTimeout(function () {
      var toolAnim = document.getElementById("tool");
	  toolAnim.style.top = "100px";
    }, toolAnim = 10);
    setTimeout(function () {
      var toolAnim = document.getElementById("tool");
	  toolAnim.style.top = "150px";
    }, toolAnim = 20);
    setTimeout(function () {
      var toolAnim = document.getElementById("tool");
	  toolAnim.style.top = "200px";
    }, toolAnim = 30);
    setTimeout(function () {
      var toolAnim = document.getElementById("tool");
	  toolAnim.style.top = "250px";
    }, toolAnim = 40);
    setTimeout(function () {
      var toolAnim = document.getElementById("tool");
	  toolAnim.style.top = "300px";
    }, toolAnim = 50);
    setTimeout(function () {
      var toolAnim = document.getElementById("tool");
	  toolAnim.style.top = "350px";
    }, toolAnim = 60);
	setTimeout(function () {
      var toolAnim = document.getElementById("tool");
	  toolAnim.style.top = "700px";
	  
	  if (isFl == false) {
	    var charButton = document.createElement("img");
	    charButton.setAttribute("src", "img/charge_button.png");
	    charButton.setAttribute("id", "charbutton");
	    charButton.setAttribute("width", "300px");
	    charButton.setAttribute("height", "100px");
		charButton.setAttribute("onclick", "chargebutton()");
	    charButton.style.position = "absolute";
	    charButton.style.position = "fixed";
	    charButton.style.left = "800px";
	    charButton.style.top = "550px";
	    document.body.appendChild(charButton);
	  }
	  
	  var backButton = document.createElement("img");
	  backButton.setAttribute("src", "img/monitor_button.png");
	  backButton.setAttribute("id", "backbutton");
	  backButton.setAttribute("width", "300px");
	  backButton.setAttribute("height", "100px");
	  backButton.setAttribute("onclick", "grtback()");
      backButton.style.position = "absolute";
	  backButton.style.float = "left";
	  backButton.style.top = "550px";
	  document.body.appendChild(backButton);
	  
	  if (isFl == true) {
        isGrt = false;
      }
    }, toolAnim = 70);
  }
}, 1);

setInterval(function () {
  if (Game == true && grtBroke == false) {
    grtLife++;
  }
}, 700);
setInterval(function () {
  if (grtLife == 150 && grtRandom == 2 && grtBroke == false) {
    if (nearGrt == true) {
	  body.style.background = "linear-gradient( rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.91) ), url(img/generator.png) no-repeat center center fixed";
	}
	
	if (nearGrt == true) {
	  var fixButton = document.createElement("canvas");
	  fixButton.setAttribute("id", "fixbutton");
	  fixButton.setAttribute("width", "300px");
	  fixButton.setAttribute("height", "300px");
      fixButton.setAttribute("onclick", "usetool()");
	  fixButton.style.position = "absolute";
	  fixButton.style.left = "500px";
	  fixButton.style.top = "200px";
	  document.body.appendChild(fixButton);
	}
	
    snd = new Audio("sounds/powerout.ogg");
	snd.volume = 0.2;
	snd.play();
	
	grtLife = 151;
	
	var screenExists = document.getElementById("screen");
    if (screenExists) {
      var removeScreen = document.getElementById("screen");
	  document.body.removeChild(removeScreen);
	}
	var c1buttonExists = document.getElementById("c1button");
    if (c1buttonExists) {
      var removec1Button = document.getElementById("c1button");
	  document.body.removeChild(removec1Button);
	}
	var c2buttonExists = document.getElementById("c2button");
    if (c2buttonExists) {
      var removec2Button = document.getElementById("c2button");
	  document.body.removeChild(removec2Button);
	}
	var c3buttonExists = document.getElementById("c3button");
    if (c3buttonExists) {
      var removec3Button = document.getElementById("c3button");
	  document.body.removeChild(removec3Button);
	}
	var c4buttonExists = document.getElementById("c4button");
    if (c4buttonExists) {
      var removec4Button = document.getElementById("c4button");
	  document.body.removeChild(removec4Button);
	}
	var c5buttonExists = document.getElementById("c5button");
    if (c5buttonExists) {
      var removec5Button = document.getElementById("c5button");
	  document.body.removeChild(removec5Button);
	}
	var mntbuttonExists = document.getElementById("mntbutton");
	if (mntbuttonExists && isMnt == false) {
      var removemntButton = document.getElementById("mntbutton");
	  document.body.removeChild(removemntButton);
	}
	var charbuttonExists = document.getElementById("charbutton");
	if (charbuttonExists && nearGrt == true) {
      var removecharButton = document.getElementById("charbutton");
	  document.body.removeChild(removecharButton);
	}
	var grtbuttonExists = document.getElementById("grtbutton");
	if (grtbuttonExists) {
	  var removegrtButton = document.getElementById("grtbutton");
	  document.body.removeChild(removegrtButton);
	}
	
    if (Ghost == false && isMnt == false && isLight == false && runingGrt == false && nearGrt == false) {
	  var grtButton = document.createElement("img");
	  grtButton.setAttribute("src", "img/generator_button.png");
	  grtButton.setAttribute("id", "grtbutton");
	  grtButton.setAttribute("width", "100px");
	  grtButton.setAttribute("height", "300px");
	  grtButton.setAttribute("onclick", "grtgo()");
	  grtButton.setAttribute("onmouseover", "hoveron()");
	  grtButton.setAttribute("onmouseleave", "hoveroff()");
	  grtButton.style.position = "absolute";
	  grtButton.style.float = "left";
	  grtButton.style.top = "150px";
	  grtButton.style.left = "370px";
	  grtButton.style.opacity = "0.2";
	  document.body.appendChild(grtButton);
	}
	
	chooseCam1 = false;
    chooseCam2 = false;
    chooseCam3 = false;
    chooseCam4 = false;
    chooseCam5 = false;
	grtBroke = true;
	isGrt = true;
  }
}, 1);
setInterval(function () {
  if (grtLife == 151) {
    grtLife = 0;
  }
}, 1);

setInterval(function () {
  grtRandom = Math.floor((Math.random() * 2) + 1);
}, 200);
//End of generator

//End of game

//Restart
setInterval(function () {
  if (isScreen == false) {
    var screenExists = document.getElementById("screen");
    if (screenExists) {
      var removeScreen = document.getElementById("screen");
	  document.body.removeChild(removeScreen);
	}
	var c1buttonExists = document.getElementById("c1button");
    if (c1buttonExists) {
      var removec1Button = document.getElementById("c1button");
	  document.body.removeChild(removec1Button);
	}
	var c2buttonExists = document.getElementById("c2button");
    if (c2buttonExists) {
      var removec2Button = document.getElementById("c2button");
	  document.body.removeChild(removec2Button);
	}
	var c3buttonExists = document.getElementById("c3button");
    if (c3buttonExists) {
      var removec3Button = document.getElementById("c3button");
	  document.body.removeChild(removec3Button);
	}
	var c4buttonExists = document.getElementById("c4button");
    if (c4buttonExists) {
      var removec4Button = document.getElementById("c4button");
	  document.body.removeChild(removec4Button);
	}
	var c5buttonExists = document.getElementById("c5button");
    if (c5buttonExists) {
      var removec5Button = document.getElementById("c5button");
	  document.body.removeChild(removec5Button);
	}
	
	chooseCam1 = false;
    chooseCam2 = false;
    chooseCam3 = false;
    chooseCam4 = false;
    chooseCam5 = false;
  }
}, 1);
setInterval(function () {
  if (isLight == false) {
    var lightExists = document.getElementById("light");
	if (lightExists) {
      var removelight = document.getElementById("light");
	  document.body.removeChild(removelight);
	}
  }
}, 1);
setInterval(function () {
  if (isFl == false) {
    var flbuttonExists = document.getElementById("flbutton");
	if (flbuttonExists) {
      var removeflButton = document.getElementById("flbutton");
	  document.body.removeChild(removeflButton);
	}
  }
}, 1);
setInterval(function () {
  if (Game == false) {
    var mntbuttonExists = document.getElementById("mntbutton");
	if (mntbuttonExists) {
      var removemntButton = document.getElementById("mntbutton");
	  document.body.removeChild(removemntButton);
	}
	
	tpRandom = 0;
	tpScore = 0;
	jsTime = 0;
	grtjsTime = 0;
	jsRandom = 0;
	
	isMnt = false;
  }
}, 1);
setInterval(function () {
  if (Game == false) {
    gameamb.pause();
  }
}, 1);
setInterval(function () {
  if (Game == false) {
	mntAmbience.pause();
  }
}, 1);
setInterval(function () {
  if (Game == false) {
	toolSnd.pause();
  }
}, 1);
setInterval(function () {
  if (Game == false) {
    var flbuttonExists = document.getElementById("flbutton");
	if (flbuttonExists) {
      var removeflButton = document.getElementById("flbutton");
	  document.body.removeChild(removeflButton);
	}
	var timesExists = document.getElementById("times");
	if (timesExists) {
	  var removetime = document.getElementById("times");
	  document.body.removeChild(removetime);
	}
  }
}, 1);
setInterval(function () {
  if (Game == false) {
    isGrt = false;
	nearGrt = false;
	runingGrt = false;
	grtBroke = false;
	
	var grtbuttonExists = document.getElementById("grtbutton");
	if (grtbuttonExists) {
      var removegrtButton = document.getElementById("grtbutton");
	  document.body.removeChild(removegrtButton);
	}
	var toolExists = document.getElementById("tool");
	if (toolExists) {
      var removetool = document.getElementById("tool");
	  document.body.removeChild(removetool);
	}
	
	grtLife = 0;
  }
}, 1);
setInterval(function () {
  if (nearGrt == false) {
	var backbuttonExists = document.getElementById("backbutton");
	if (backbuttonExists) {
      var removebackButton = document.getElementById("backbutton");
	  document.body.removeChild(removebackButton);
	}
	var charbuttonExists = document.getElementById("charbutton");
	if (charbuttonExists) {
      var removecharButton = document.getElementById("charbutton");
	  document.body.removeChild(removecharButton);
	}
	var fixbuttonExists = document.getElementById("fixbutton");
	if (fixbuttonExists) {
      var removefixButton = document.getElementById("fixbutton");
	  document.body.removeChild(removefixButton);
	}
	
	grtjsTime = 0;
  }
}, 1);
//End of restart