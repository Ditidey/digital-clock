// let num = 0;
// document.getElementById('start-btn').addEventListener('click', function(){
//       document.getElementById('hour-field').innerText = setInterval(() => {
//         console.log(num++);
//     }, 1000);
// })
// let num = 0;
// function setIntervalf(){
//     let time = setInterval(() => {
//         console.log(num++);
//     }, 1000);
     
// }

function presentTime(){
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = 'AM';

  if(hh == 0)
  {
    hh = 12;
  }
  if(hh > 12)
  {
    hh = hh - 12;
    session = 'PM';
  }
  hh = (hh < 10 ? '0' + hh : hh)
  mm = (mm < 10 ? '0' + mm : mm)
  ss = (ss < 10 ? '0' + ss : ss);
  document.getElementById('hour-field').value = hh;
  document.getElementById('minute-field').value = mm;
  document.getElementById('second-field').value = ss + " " + session;

  let time = setTimeout(function() {presentTime()}, 1000);
}
presentTime()