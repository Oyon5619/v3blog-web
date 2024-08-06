const data = []
const tags = ['Java', 'Html', 'Vue', 'React', 'Css', 'Python']

function init() {
  for (let i = 1; i <= 10; ++i) {

    let len = Math.floor(Math.random() * tags.length) + 1
    let st = new Set()
    for (let j = 1; j <= len; ++j) {
      st.add(tags[Math.floor(Math.random() * tags.length)])
    }

    let item = {
      id: i,
      title: '文章标题'.repeat(Math.floor(Math.random()*10) + 1),
      author: 'x'.repeat(Math.floor(Math.random()*15) + 1),
      content: '文章内容'.repeat(Math.floor(Math.random()*150) + 1),
      releaseTime: '2022-03-25 19:21:18',
      likes: 100,
      watches: 200,
      comments: 23,
      tags: [...st]
    }
    data.push(item)
  }
}
init()

function getData(current, pageSize) {

}

export default data