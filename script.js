const quizData = [
    {
      question: "เพลงไหนของ Jin ที่ร่วมงานกับวง Coldplay?",
      choices: ["Tonight", "Super Tuna", "The Astronaut", "Abyss"],
      answer: 2
    },
    {
      question: "เพลงอะไรที่กลายเป็นไวรัลเพราะท่าเต้นน่ารัก?",
      choices: ["Super Tuna", "Epiphany", "Heart on the Window", "Dream Glow"],
      answer: 0
    },
    {
      question: "เพลง 'Epiphany' สื่อถึงอะไร?",
      choices: ["ความรักที่ไม่สมหวัง", "การรักตัวเอง", "การเดินทาง", "ความฝัน"],
      answer: 1
    },
    {
      question: "เพลง 'I'll Be There' ปล่อยในปีใด?",
      choices: ["2020", "2022", "2023", "2024"],
      answer: 3
    },
    {
      question: "ถ้าพี่จินมีพลังวิเศษ 1 อย่าง เขาจะ...?",
      choices: ["เสกอาหารกินได้ตลอดเวลา", "ทำเสียงปลุกให้อาร์มี่ทุกเช้า", "กลายเป็น Worldwide Handsome x2", "เสกปลาทูน่าให้เต้นพร้อมกันทั่วโลก"],
      answer: 2
    },
    {
      question: "เสียงร้องของพี่จินเหมือนอะไร?",
      choices: ["น้ำผึ้งเคลือบคาราเมล", "เสียงฟ้าร้องที่อ่อนโยน", "ก้อนเมฆนุ่มๆที่ลอยลงมาเล่นกับใจอาร์มี่", "เสียงกระดิ่งแมวในโลกคู่ขนาน"],
      answer: 2
    },
    {
      question: "ถ้าพี่จินส่งข้อความมาว่า กินข้าวยังจ๊ะ คุณจะ...?",
      choices: ["ตอบว่า กินแล้ว แต่ถ้าพี่อยากเลี้ยง กินใหม่ก็ได้", "ถ่ายรูปข้าวให้ดู พร้อมสลิปโอน", "ยังไม่กินรอพี่อยู่", "สติหลุด พิมพ์ผิดเป็นภาษาแบ้ดชอว์ตี้"],
      answer: 0
    },
    {
      question: "ถ้าพี่จินเขียนนิยายรัก พี่จินจะตั้งชื่อเรื่องว่า?",
      choices: ["ชัมชี่วิลยูแมรี่มี?", "เธอกับฉันและทูน่าของเรา", "เสียงนั้นฉันจำได้ ฮี่ ฮี่ ฮี่", "ยืนงงในดง Worldwide Handsome"],
      answer: 0
    },
    {
      question: "ถ้าพี่จินติดเกาะกับคุณแค่ 2 คน คุณจะเอาอะไรไปด้วย?",
      choices: ["กล้องไว้ถ่ายสุดหล่อทุกมุมทุกองศา", "ลำโพงไว้ให้พี่จินเต้นชัมชี่", "เต็นท์เพราะจะติดเกาะด้วยกันตลอดไป", "แค่มีพี่จินคนเดียวอยู่เคียงข้างก็พอแล้วจ้า"],
      answer: 3
    },
    {
      question: "ติ่งสายเปย์ตัวแม่เวลามีสินค้าวงออกใหม่ คุณจะ...?",
      choices: ["ท่องไว้ ไม่ซื้อ ดูอย่างเดียว", "ดูยอดเงินในบัญชี ทำใจไม่ซื้อ", "กดซื้อก่อน แล้วค่อยร้องไห้ทีหลัง", "ท่องไว้ ของมันต้องมีๆๆๆ"],
      answer: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;
    q.choices.forEach((choice, index) => {
      document.getElementById("btn" + index).textContent = choice;
    });
    document.getElementById("result").textContent = "";
  }
  
  function checkAnswer(choice) {
    if (choice === quizData[currentQuestion].answer) {
      score++;
      document.body.style.backgroundColor = "#ccffe6";
      document.getElementById("result").textContent = "ถูกต้อง! เก่งมาก!";
    } else {
      document.body.style.backgroundColor = "#ffd6d6";
      document.getElementById("result").textContent = "ตอบผิดน้า เควนชาน่า เตง เน้ง เนง เนง เนง";
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      setTimeout(() => {
        document.body.style.backgroundColor = "#FFFFCC";
        loadQuestion();
      }, 1500);
    } else {
      setTimeout(showFinalResult, 1500);
    }
  }
  
  function showFinalResult() {
    document.getElementById("quiz").innerHTML = `
      <h2>จบเกมแล้ว!</h2>
      <p>คุณได้คะแนน ${score} จาก ${quizData.length}</p>
      <p>${score === quizData.length ? "อาร์มี่ตัวจริง!" : "ลองใหม่ได้น้าามาแก้มือกันค่ะคนเก่ง~"}</p>
  
      <div class="cute-box">
      <img src="https://img2.pic.in.th/pic/IMG_4532777847b6a0e30610.jpeg" alt="IMG 4532" border="0">
        <p>KSJ2 IS COMING</p>
        <p>ECHO IS COMING</p>
        <p>สามารถโดเนทซัพพอร์ตพี่จินได้ที่นี่ (ไม่บังคับค่ะ)</p>
        <button onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLScRSeVLjB3zLFLmsJ8tSyASzcJPT999_CPVCbitcSyf92yehQ/viewform')">Donation Click</button>
      </div>
  
      <p>ขอบคุณทุกท่านที่ซัพพอร์ตค่ะ🙏🏻🙇🏻‍♀️🩷🩵💛</p>
    `;
  }
  
  loadQuestion();
  
  // Floating hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = "🩷🩵💛";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
  setInterval(createHeart, 800);