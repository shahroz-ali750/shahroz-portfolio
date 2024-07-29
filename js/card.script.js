let cards = [
  {
    id: "1",
    img: "../assets/images/Moderna.png",
    title: "Moderna",
    link: "https://moderna-12.netlify.app/",
  },
  {
    id: "2",
    img: "../assets/images/Yummy.png",
    title: "Yummy",
    link: "https://yummy-12.netlify.app/",
  },
  {
    id: "3",
    img: "../assets/images/Imperial.png",
    title: "Imperial",
    link: "https://imperial-12.netlify.app/",
  },
  {
    id: "4",
    img: "../assets/images/Metaverse.png",
    title: "MetaVerse",
    link: "https://metaverse-12.netlify.app/",
  },
  {
    id: "5",
    img: "../assets/images/Maundy.png",
    title: "Maundy",
    link: "https://maundy.netlify.app/",
  },
  {
    id: "6",
    img: "../assets/images/Groovin.png",
    title: "GroovIn",
    link: "https://metaverse-12.netlify.app/",
  },
  {
    id: "7",
    img: "../assets/images/UpConstruction.png",
    title: "Up Construction",
    link: "https://up-constructions.netlify.app/",
  },
  {
    id: "8",
    img: "../assets/images/GrayScale.png",
    title: "GrayScale",
    link: "https://gray-scale-1.netlify.app/",
  },
  {
    id: "9",
    img: "../assets/images/UI Learning.png",
    title: "UI Learning",
    link: "https://ui-learning.netlify.app/",
  },
  {
    id: "10",
    img: "../assets/images/Twitter.png",
    title: "Twitter",
    link: "https://twitter-11.netlify.app/",
  },
];

// card count
let counter = cards.length;
let cardCounter = document.getElementById("cardCount");
cardCounter.innerText = `Templates Listing: ${counter}`;

// Cards Listing Error Handling

listErr = document.getElementById("listingError")

if (counter === 0){
    listingError.style.display = "block"
}

else{
    listingError.style.display = "none"
}

// search box
document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.querySelector(".inp-cus-bor");
  var searchButton = document.querySelector(".bi-search");
  var errorMessage = document.getElementById("errorMessage");

  searchButton.addEventListener("click", function () {
    performSearch();
  });

  searchInput.addEventListener("input", function () {
    updateSuggestions();
  });

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performSearch();
    }
  });

  function performSearch() {
    var searchQuery = searchInput.value.toLowerCase().trim();

    if (searchQuery.length < 2) {
      resetSearch();
      return;
    }

    var cardsContainer = document.querySelector("#card");
    var cards = Array.from(cardsContainer.children);

    var filteredCards = cards.filter(function (card) {
      var cardTitle = card
        .querySelector(".text-start")
        .textContent.toLowerCase();
      return cardTitle.includes(searchQuery);
    });

    if (filteredCards.length === 0) {
      showError();
      return;
    }

    hideError();

    cards.forEach(function (card) {
      card.style.display = "none";
    });

    filteredCards.forEach(function (card) {
      card.style.display = "block";
    });

    cardsContainer.innerHTML = "";
    filteredCards.forEach(function (card) {
      cardsContainer.appendChild(card);
    });
  }

  function updateSuggestions() {
    var searchQuery = searchInput.value.toLowerCase().trim();

    var cardsContainer = document.querySelector("#card");
    var cards = Array.from(cardsContainer.children);

    cards.forEach(function (card) {
      card.style.display = "block";
    });

    if (searchQuery.length < 1) {
      return;
    }

    var suggestedCards = cards.filter(function (card) {
      var cardTitle = card
        .querySelector(".text-start")
        .textContent.toLowerCase();
      return cardTitle.includes(searchQuery);
    });

    cards.forEach(function (card) {
      if (!suggestedCards.includes(card)) {
        card.style.display = "none";
      }
    });
  }

  function resetSearch() {
    var cardsContainer = document.querySelector("#card");
    var cards = Array.from(cardsContainer.children);

    cards.forEach(function (card) {
      card.style.display = "block";
    });

    cardsContainer.innerHTML = "";
    cards.forEach(function (card) {
      cardsContainer.appendChild(card);
    });
  }
  function showError() {
    errorMessage.style.display = "block";
  }

  function hideError() {
    errorMessage.style.display = "none";
  }
});

// card loop
let div = document.querySelector("#card");

cards.forEach((x) => {
  div.innerHTML += `
  <div class="col-12 col-md-12 col-xl-6 col-xxl-4 ">
        <div class="card mx-0 mx-md-5 my-sm-3 my-md-3 bg-black border border-5 " id="${x.id}">
            <div>
                <p class="text-start fw-bold fs-4 px-3 pt-2 txt-orange bg-black">${x.title}</p>
            </div>
                <a href="${x.link}" target="blank">
                <img src="${x.img}" class="card-img-top rounded-0 img-fluid" alt="..."></a>
        </div>
    </div>
    `;
});
