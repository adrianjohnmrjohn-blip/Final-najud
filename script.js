// ================= GUEST LIST =================

const allowedNames = [
  "RHENA SHANE VALINTE",
  "JJ JAGMOC",
  "RHYS DESOYO",
  "CHARLES BONGAOS",
  "ISMAEL MAUNES",
  "KENNETH MONTON",
  "REYWEN SENTORIAS",
  "JOHNREYNAN SENTORIAS",
  "ROLDAN DISINI",
  "MICHAEL BUAS",
  "PETER JOHN BUAS",
  "ADRIAN JOHN BUAS",
  "YVARD ZANE BUAS",
  "TYRON MATURA",
  "RAMOND CARL VALINTE",
  "RHENIEL JOHN VALINTE",
  "EDWARD BUAS",
  "MARCELO BUAS",
  "RENAN VALINTE",

  "PAULINE PANAL",
  "NORHAN DIAZ",
  "PRINCESS DIAGBEL",
  "EARLA MIYUKE ABABAT",
  "MARYJANE JORDAN",
  "RHEA MAE PLAZA",
  "JERAMAE ENAD",
  "AMELYN UYANGUREN",
  "NAZARINE MALABAR",
  "MARITES CASAGAN",
  "JOIE MARIE MONDEZ",
  "ARNILYN LAURETE",
  "CHERRY ROSE BUAS",
  "SHAIRA MAR BUAS",
  "FHEBIE BUAS",
  "MARLEY BUAS",
  "SHIRLEY BUAS",
  "SHIELAMAR BUAS",

  "ARDEN S. MARCHAN",
  "ALONA JARAH BUAS",
  "MARILOU MAUNES",
  "MARIBEL MOMBILLIE",
  "KEVIN PADILLA",
  "ROY LAGUTIN",
  "NOVECA GALLEGOS",
  "SHARMEELA ABALLE",
  "JOHN CRIS AMBAN",
  "PRINCESS NIÑA CORTEZ",
  "CHRISTIAN MAE GUMILOY",
  "CHESCA PAULLIEN DELA CRUZ",
  "KRISTELL JANE CASAGAN",
  "ASHLEY MONTEBON",
  "ZHYAAN AMOR SANTE",
  "JOHN CARL GRINGCO",
  "TONI ACOSTA",
  "SHANNEN BASTATAS"
];

// ================= LISTS =================

const rosesList = [
  "Jj Jagmoc",
  "Rhys Desoyo",
  "Charles Bongaos",
  "Kevin Padilla",
  "Kenneth Monton",
  "Reywen Sentorias",
  "Johnreynan Sentorias",
  "Roldan Disini",
  "Michael Buas",
  "Peter John Buas",
  "Adrian John Buas",
  "Yvard Zane Buas",
  "Tyron Matura",
  "Ramond Carl Valinte",
  "Rheniel John Valinte",
  "Edward Buas",
  "Marcelo Buas",
  "Renan Valinte"
];

const candlesList = [
  "Pauline Panal",
  "Norhan Diaz",
  "Princess Diagbel",
  "Earla Miyuke Ababat",
  "Maryjane Jordan",
  "Rhea Mae Plaza",
  "Jeramae Enad",
  "Amelyn Uyanguren",
  "Nazarine Malabar",
  "Marites Casagan",
  "Joie Marie Mondez",
  "Arnilyn Laurete",
  "Cherry Rose Buas",
  "Shaira Mar Buas",
  "Fhebie Buas",
  "Marley Buas",
  "Shirley Buas",
  "Shielamar Buas"
];

const treasuresList = [
  "Arden S. Marchan",
  "Alona Jarah Buas",
  "Marilou Maunes",
  "Maribel Mombillie",
  "Roleen Jane Octora",
  "Roy Lagutin",
  "Noveca Gallegos",
  "Sharmeela Aballe",
  "John Cris Amban",
  "Princess Niña Cortez",
  "Christian Mae Gumiloy",
  "Chesca Paullien Dela Cruz",
  "Kristell Jane Casagan",
  "Ashley Montebon",
  "Zhyaan Amor Sante",
  "John Carl Gringco",
  "Toni Acosta",
  "Shannen Bastatas"
];

// ================= CURRENT USER =================

let currentUser = "";

// ================= ELEMENTS =================

const input = document.getElementById("nameInput");
const errorMsg = document.getElementById("errorMsg");
const entry = document.getElementById("entryScreen");
const main = document.getElementById("mainContent");
const welcomeMsg = document.getElementById("welcomeMsg");
const roleMessage = document.getElementById("roleMessage");
const birthdayMessage = document.getElementById("birthdayMessage");
const music = document.getElementById("bgMusic");

// ================= CREATE CARDS =================

function createCards(list, containerId, type){

  const container =
    document.getElementById(containerId);

  list.forEach((name)=>{

    const div =
      document.createElement("div");

    div.className = "card";

    div.dataset.owner = name;

    let icon = "";

    if(type === "candles"){
      icon = "<div class='flame'></div>";
    }

    if(type === "treasures"){
      icon = "<div class='treasure'>🎁</div>";
    }

    div.innerHTML = `

      <strong>${name}</strong>

      ${icon}

      <div class="publicMessage">
        No message yet 💌
      </div>

      <textarea
  class="messageInput"
  placeholder="Only ${name} can write a message."
  disabled
></textarea>

      <button
        class="saveBtn"
      >
        Save Message
      </button>

    `;

    const textarea =
      div.querySelector(".messageInput");

    const saveBtn =
      div.querySelector(".saveBtn");

    const publicMessage =
      div.querySelector(".publicMessage");

    // LOAD SAVED MESSAGE

    const saved =
      localStorage.getItem(name);

    if(saved){

      publicMessage.innerHTML =
        `💌 ${saved}`;

      textarea.value = saved;

    }

    // SAVE MESSAGE

    saveBtn.addEventListener("click", ()=>{

      if(
        currentUser.toLowerCase()
        !==
        name.toLowerCase()
      ){

        alert(
          `Only ${name} can write here.`
        );

        return;

      }

      const msg =
        textarea.value.trim();

      if(msg !== ""){

        // SAVE MESSAGE

        localStorage.setItem(
          name,
          msg
        );

        // SHOW MESSAGE

        publicMessage.innerHTML =
          `💌 ${msg}`;

      }

    });

    container.appendChild(div);

  });

}


// ================= ENABLE CURRENT USER =================
function enableCurrentUserCard() {
  const cards = document.querySelectorAll(".card");
  const user = currentUser.trim().toLowerCase();

  console.log("Attempting to unlock card for: " + user);

  cards.forEach((card) => {
    const owner = card.dataset.owner.trim().toLowerCase();
    const textarea = card.querySelector(".messageInput");
    const saveBtn = card.querySelector(".saveBtn");

    if (owner === user) {
      // THE UNLOCK
      textarea.disabled = false;
      saveBtn.disabled = false;
      
      // FORCING CLICKABILITY
      textarea.style.pointerEvents = "auto"; 
      saveBtn.style.pointerEvents = "auto";
      
      // VISUAL FEEDBACK
      textarea.style.opacity = "1";
      textarea.style.backgroundColor = "#fff"; // Turns white when unlocked
      textarea.style.color = "#000";           // Text turns black
      textarea.placeholder = "Type your message here...";
      
      saveBtn.style.opacity = "1";
      saveBtn.style.display = "block";

      console.log("✅ Success! Card unlocked for " + card.dataset.owner);
    } else {
      // LOCKING OTHERS
      textarea.disabled = true;
      saveBtn.disabled = true;
      textarea.style.pointerEvents = "none";
      textarea.style.opacity = "0.3";
    }
  });
}

// ================= LOAD CARDS =================

createCards(
  rosesList,
  "roses",
  "roses"
);

createCards(
  candlesList,
  "candles",
  "candles"
);

createCards(
  treasuresList,
  "treasures",
  "treasures"
);

// ================= LOGIN =================

input.addEventListener("keypress", (e)=>{

  if(e.key === "Enter"){

    // USER INPUT

    const enteredName =
      input.value.trim();

    // FIND MATCH

    const matchedName =
      allowedNames.find(
        n =>
        n.toLowerCase()
        ===
        enteredName.toLowerCase()
      );

    // SUCCESS LOGIN

    if(matchedName){

      currentUser = matchedName;

      // SHOW MAIN PAGE

      entry.style.display = "none";

      main.style.display = "block";

      // ENABLE MESSAGE

      enableCurrentUserCard();

      // WELCOME MESSAGE

      welcomeMsg.innerHTML =
        `✨ Welcome <b>${matchedName}</b> ✨`;

      // BIRTHDAY MESSAGE

      if(
        matchedName.toLowerCase()
        ===
        "rhena shane valinte"
      ){

        birthdayMessage.innerHTML = `
          🎉 THIS IS YOUR SPECIAL DAY 🎂 <br><br>

          NEW JOURNEY, NEW CHAPTER. <br>

          ALWAYS BE GRATEFUL, ATENG. <br><br>

          ❤️ FROM YOUR FAMILY ❤️
        `;

      }

      // ROLE MESSAGE

      if(
        rosesList.some(
          n =>
          n.toLowerCase()
          ===
          matchedName.toLowerCase()
        )
      ){

        roleMessage.innerHTML =
          "🌹 You are part of the 18 Roses.";

      }

      else if(
        candlesList.some(
          n =>
          n.toLowerCase()
          ===
          matchedName.toLowerCase()
        )
      ){

        roleMessage.innerHTML =
          "🕯️ You are part of the 18 Candles.";

      }

      else if(
        treasuresList.some(
          n =>
          n.toLowerCase()
          ===
          matchedName.toLowerCase()
        )
      ){

        roleMessage.innerHTML =
          "🎁 You are part of the 18 Treasures.";

      }

      else{

        roleMessage.innerHTML =
          "💌 Welcome to Rhena's debut celebration!";

      }

      // PLAY MUSIC

      music.play().catch(()=>{});

      // PETALS EFFECT

      setInterval(()=>{

        const petal =
          document.createElement("div");

        petal.className = "petal";

        petal.style.left =
          Math.random() * 100 + "vw";

        petal.style.animationDuration =
          (Math.random() * 4 + 4) + "s";

        document.body.appendChild(petal);

        setTimeout(()=>{

          petal.remove();

        },8000);

      },300);

    }

    // INVALID NAME

    else{

      errorMsg.style.display = "block";

    }

  }

});

// ================= SPARK EFFECT =================

document.addEventListener("mousemove", (e)=>{

  const spark =
    document.createElement("div");

  spark.className = "spark";

  spark.style.left =
    e.pageX + "px";

  spark.style.top =
    e.pageY + "px";

  document.body.appendChild(spark);

  setTimeout(()=>{

    spark.remove();

  },600);

});