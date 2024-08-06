let data = []

function init() {
  for(let i = 1; i <= 5; ++i) {
    data.push({
      id: i,
      name: '文章标题'.repeat(Math.random()*10 + 1)
    })
  }
}
init()

export default data