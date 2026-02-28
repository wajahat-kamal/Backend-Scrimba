try {
    const data = await fetch("/api")
    const response = await data.json()
    renderCards(response)
} catch (error) {
    console.log(error);
}

function renderCards(cardsData) {
    const cardContainer = document.querySelector(".cards-container")
    let cardHTML = ""

    cardsData.forEach((card, i) => {
        cardHTML = `
        <article class="sighting-card" aria-labelledby="sighting-title-${i}">
            <p class="card-details">${card.timeStamp}, ${card.location}</p>
            <h3 id="sighting-title-${i}">${card.title}</h3>
            <div class="sighting-text-wrapper">
                <p class="sighting-text">${card.text}</p>
            </div>
            <button class="read-more-btn" aria-expanded="false">Read in full</button>
        </article>
        `
    });
    cardContainer.innerHTML = cardHTML
}