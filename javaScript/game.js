// ตัวแปร
var score = 0,
  highScore = 0,
  time = 30, // ตั้งค่าเวลาเริ่มต้นใหม่
  timer;

var isPlaying = false;
var timeBoard = document.getElementById('time'),
  scoreboard = document.getElementById('score'),
  btnStart = document.getElementById('btn');

var fallingPics = document.getElementsByClassName('pic');

// ฟังก์ชันสำหรับแสดงเวลา
function showTime() {
  timeBoard.innerText = time;
}

// ฟังก์ชันสำหรับลดเวลา
function reduceTime() {
    if (isPlaying) {
      if (time > 0) {
        time--;
        showTime();
      } else {
        // หยุดจับเวลา
        clearInterval(timer);
  
        // จบเกม
        endGame();
      }
    }
  }
  

// ฟังก์ชันสำหรับเริ่มเกม
function startGame() {
  // ปิดใช้งานปุ่ม
  btnStart.disabled = 'disabled';

  // ตั้งค่าสถานะเกม
  isPlaying = true;

  // เริ่มจับเวลา
  timer = setInterval(reduceTime, 1000); // ลดเวลาทีละ 1 วินาที

  // แสดงภาพ
  for (var i = 0; i < fallingPics.length; i++) {
    fallingPics[i].style.display = 'inline-block';
  }
}

// ฟังก์ชันสำหรับจับภาพที่ตกลงมา
function fallDown(pic) {
  // ตรวจสอบว่าเกมกำลังเล่นอยู่
  if (isPlaying) {
    // เพิ่มคะแนน
    score++;

    // แสดงคะแนน
    renderScore();

    // ซ่อนภาพ
    pic.style.display = 'none';

    // กำหนดเวลาสุ่มสำหรับการปรากฏตัวของภาพใหม่
    setTimeout(function () {
      // แสดงภาพใหม่
      pic.style.display = 'inline-block';
      pic.style.top = '80px'; // ตั้งค่าตำแหน่งเริ่มต้นของภาพใหม่
    }, Math.random() * 1000 + 500);
  }
}

// ฟังก์ชันสำหรับแสดงคะแนน
function renderScore() {
  scoreboard.innerText = score;

  // ตรวจสอบคะแนนสูงสุด
  if (score > highScore) {
    highScore = score;
    document.getElementById('high').innerText = highScore;
  }
}

// ฟังก์ชันสำหรับจบเกม
function endGame() {
  // ตั้งค่าสถานะเกม
  isPlaying = false;

  // แจ้งเตือนคะแนน
  alert('คุณเก็บกระดาษได้ ' + score + ' แผ่น');

  // รีเซ็ตคะแนนและเวลา
  score = 0;
  time = 30; // ตั้งค่าเวลาเริ่มต้นใหม่

  // เปิดใช้งานปุ่ม
  btnStart.removeAttribute('disabled');

  // ซ่อนภาพ
  for (var i = 0; i < fallingPics.length; i++) {
    fallingPics[i].style.display = 'none';
  }
}

// เริ่มแสดงเวลา
showTime();

// เพิ่ม event listener สำหรับปุ่ม play
btnStart.addEventListener('click', startGame);

// เพิ่ม event listener สำหรับภาพ
for (var i = 0; i < fallingPics.length; i++) {
  fallingPics[i].addEventListener('click', function () {
    fallDown(this);
  });
}
