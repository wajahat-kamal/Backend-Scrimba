const form = document.getElementById("eventForm")
const formMessageText = document.getElementsByClassName("form-message-text")[0]

form.addEventListener("submit", async (e) => {
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

    try {
        formMessageText.textContent = ""
        const res = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (res.ok) {
            formMessageText.innerHTML = `Your sighting was uploaded. View it <a href="./sightings.html">here</a>.`;
            form.reset()
        } else {
            formMessageText.innerHTML = `The server Ghosted you(!). Please try again.`
            console.error("Server Error:", response.statusText)
        }
    } catch (error) {
        formMessageText.textContent = `Serious ghouls! Please try again.`
        console.error("Error:", error)
    }
})