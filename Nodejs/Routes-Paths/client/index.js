try {
    const data = await fetch("/api")
    const response = await data.json()
    renderCards(response)
} catch (error) {
    console.log(error);
}

function renderCards(cardsData){
    const cardContainer = document.querySelector(".cards-container")
    let cardHTML = ""
}