const faker = require('faker/locale/zh_CN')

const categoryTable = []
//
for (let i = 1; i <= 20; i++) {
  const name = faker.commerce.department()
  const createAt = faker.date.past().toISOString()
  const updateAt = faker.date.between(createAt, new Date()).toISOString()

  categoryTable.push({
    id: i,
    name,
    createAt,
    updateAt
  })
}

console.log('categoryTable:', categoryTable)
