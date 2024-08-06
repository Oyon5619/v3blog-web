let tags = ['Java', 'Vue', 'Html', 'Css', 'Python']
let categories = ['前端', '后端', '数据库', '实用工具', '杂谈']

let data = []

function init() {
  for (let i = 0; i < tags.length; ++i) {
    data.push({
      id: i + 1,
      name: tags[i],
      type: 1, // type == 1 代表标签
      cover: 'none',
      relates: Math.floor(Math.random()*100) + 1
    })
  }
  for (let i = 0; i < categories.length; ++i) {
    data.push({
      id: i + 1,
      name: categories[i],
      type: 2, // type == 2 代表分类
      cover: 'none',
      relates: Math.floor(Math.random()*100) + 1
    })
  }
}
init()

export default data