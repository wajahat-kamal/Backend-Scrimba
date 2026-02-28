const form = document.getElementById("eventForm")
const formMessageText = document.getElementsByClassName("form-message-text")[0]

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = document.getElementById("location").value
    const text = document.getElementById("details").value
    const title = document.getElementById("title").value

    if (!location || !text || !title) {
        formMessageText.textContent = `Please complete all fields!`
        return
    }

    const isoDateString = document.getElementById("datetime").value

    if (!isoDateString) {
        formMessageText.textContent = "Please select a date and time!"
        return
    }

    const date = new Date(isoDateString)
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, form
    }

    const readableDate = date.toLocaleString("en-GB", options)

    const formData = {
        timeStamp: readableDate,
        text,
        title,
        location,
    }
})