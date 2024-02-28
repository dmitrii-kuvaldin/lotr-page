const filmTitle = document.getElementById("title")
const filmOscar = document.getElementById("oscar")
const filmDescription = document.getElementById("description")
const filmPoster = document.getElementById("poster")

// https://dmitrii-kuvaldin.github.io/lotr-api/data.json

async function getData() {
  const res = await fetch(
    "https://dmitrii-kuvaldin.github.io/lotr-api/data.json",
  )
  const data = await res.json()
  const { title, year, hasOscar, poster, description } = data

  // добавление данных к текстовому элементу через textContent
  filmTitle.textContent = `${title}, ${year} year`
  filmPoster.src = poster
  filmDescription.textContent = description
  filmOscar.textContent = hasOscar ? 'Won 11 oscars ✨' : 'Now awards :('
}

getData()
