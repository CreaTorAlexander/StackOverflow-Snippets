const wishesData = [{
    name: "Peter",
    presents: ["coffee", "holidays"]
  },
  {
    name: "Mario",
    presents: ["coffee", "videogames"]
  },
  {
    name: "Amanda",
    presents: ["computer", "tattoo"]
  }
]
const scoresData = [{
    name: "Peter",
    score: 10
  },
  {
    name: "Mario",
    score: 2.3
  },
  {
    name: "Amanda",
    score: 1.1
  }
]
const result = wishesData.map((ele) => {
  const score = 0 || scoresData.find(s => s.name === ele.name).score
  return {
    ...ele,
    score
  }
})
console.log("este es el resultado=>", result)