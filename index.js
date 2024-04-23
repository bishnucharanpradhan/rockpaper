const handOptions = {
    stone: "stone.png",
    paper: "paper.png",
    scissor: "scissor.png",
  };
  
  const handleUserHand = (value) => {
    document.querySelector(".playingHands").style.display = "none";
    document.querySelector(".decision").style.display = "flex";
    handleComputerHand(value);
  };
  
  const handleComputerHand = (usHand) => {
    const hands = ["stone", "paper", "scissor"];
    const cpHand = hands[Math.floor(Math.random() * hands?.length)];
    document.getElementById("userPickhand").src = handOptions[usHand];
    document.getElementById("computerPickHand").src = handOptions[cpHand];
    handleWinning(usHand, cpHand);
  };
  const handleText = (text) => {
    document.querySelector(".output h1").innerText = text;
    if (text === "TIE UP") {
      document.querySelector(".output h3").innerText = "";
      document.getElementById("playAgain").innerText = "PLAY AGAIN";
      document.getElementById("next").style.display = "none";
      const elements = document.querySelectorAll(".computerHand, .HandImg");
      elements.forEach(function (element) {
        element.style.animationPlayState = "paused";
      });
    } else if (text === "YOU WIN") {
      document.querySelector(".output h3").innerText = "AGAINST PC";
      document.getElementById("next").style.display = "flex";
      document.querySelector(".HandImg").style.animationPlayState = "running";
      document.querySelector(".computerHand").style.animationPlayState = "paused";
    } else if (text === "YOU LOSE") {
      document.querySelector(".output h3").innerText = "AGAINST PC";
      document.getElementById("next").style.display = "none";
      document.querySelector(".computerHand").style.animationPlayState =
        "running";
      document.querySelector(".HandImg").style.animationPlayState = "paused";
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const userScore = localStorage.getItem("us");
    const computerScore = localStorage.getItem("cs");
  
    document.getElementById("cps").innerText = computerScore ? computerScore : 0;
    document.getElementById("ys").innerText = userScore ? userScore : 0;
  });
  
  const handleScoring = (key, value) => {
    const validValue = isNaN(value) ? 1 : parseInt(value);
    localStorage.setItem(key, JSON.stringify(validValue));
    if (key === "cs" || key === "us") {
      const elementId = key === "cs" ? "cps" : "ys";
      document.getElementById(elementId).innerText = validValue;
      return null;
    }
  };
  
  const handleWinning = (userHand, cpHand) => {
    const userScore = localStorage.getItem("us");
    const computerScore = localStorage.getItem("cs");
    if (userHand == "paper" && cpHand == "scissor") {
      handleText("YOU LOSE");
      handleScoring("cs", parseInt(computerScore) + 1);
    }
    if (userHand == "paper" && cpHand == "stone") {
      handleText("YOU WIN");
      handleScoring("us", parseInt(userScore) + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      handleText("TIE UP");
    }
    if (userHand == "stone" && cpHand == "scissor") {
      handleText("YOU WIN");
      handleScoring("us", parseInt(userScore) + 1);
    }
    if (userHand == "stone" && cpHand == "paper") {
      handleText("YOU LOSE");
      handleScoring("cs", parseInt(computerScore) + 1);
    }
    if (userHand == "stone" && cpHand == "stone") {
      handleText("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "scissor") {
      handleText("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "stone") {
      handleText("YOU LOSE");
      handleScoring("cs", parseInt(computerScore) + 1);
    }
    if (userHand == "scissor" && cpHand == "paper") {
      handleText("YOU WIN");
      handleScoring("us", parseInt(userScore) + 1);
    }
  };
  
  const handleReplay = () => {
    document.querySelector(".playingHands").style.display = "flex";
    document.querySelector(".decision").style.display = "none";
    document.getElementById("next").style.display = "none";
  };
  
  const handleRules = () => {
    document.querySelector(".rules").style.display = "flex";
  };
  
  const handleRulesClose = () => {
    document.querySelector(".rules").style.display = "none";
  };
  const handleNext = () => {
    document.querySelector(".winner").style.display = "flex";
    document.getElementById("next").style.display = "none";
    document.querySelector(".dataContainer").style.display = "none";
  };
  const handleWinnerPlay = () => {
    document.querySelector(".dataContainer").style.display = "flex";
    document.querySelector(".winner").style.display = "none";
    document.querySelector(".playingHands").style.display = "flex";
    document.querySelector(".decision").style.display = "none";
  };