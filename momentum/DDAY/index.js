const clockTitle = document.querySelector(".js-clock");


function getDDay(){
  const dday = new Date("December 25, 2021, 00:00:00");

  const today = new Date();
  const result = dday.getTime() - today.getTime();

  const date = Math.floor(result/(1000*60*60*24));
  const hours = String(Math.floor((result % (1000*60*60*24))/(1000*60*60))).padStart(2, "0");
  const minutes = String(Math.floor((result % (1000*60*60))/(1000*60))).padStart(2, "0");
  const seconds = String(Math.floor((result % (1000*60))/1000)).padStart(2, "0");

  clockTitle.innerText = `${date}d ${hours}h ${minutes}m ${seconds}`;
}

getDDay();
setInterval(getDDay, 1000);