// Belgilangan vaqtdan (masalan 30 daqiqa) orqaga sanaydigon va qolgan vaqtni daqiqa va soniyalarda ko'rsatadigon oddiy 
//  teskari taymer yarating. Bunda  1. modullar,   2. try catch   3.setInterval  4. destructuring.  5.arrow function  
//  lardan foydalaning.


const { floor } = Math;
const interval = 1000; 
let remainingTime = 30 * 60;   // 30 daqiqa 30 * 60 soniya
let timer;

const timerFunction = () => {
  const minutes = floor(remainingTime / 60);
  const seconds = floor(remainingTime % 60);
  
  console.log(${minutes} daqiqa ${seconds} soniya qoldi.);
  
  if (remainingTime <= 0) {
    clearInterval(timer);
    console.log("Vaqt tugadi!");
  } else {
    remainingTime--;
  }
};


try {
  timer = setInterval(timerFunction, interval);
} catch (error) {
  console.error("Xatolik yuz berdi: " + error.message);
}
