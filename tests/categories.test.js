const request = require('supertest')
const app = require('../index.js')

describe('testing/categories', () => {
  const category = {
    name: "Calzado"
  }

  test('Create a category', async () => {
    const res = await request(app)
      .post('/categories/newCategory')
      .send(category)
      .expect(201)
    
      const sendCategory = {
        ...category,
        id: res.body.category.id,
        name: res.body.category.name,
        createdAt: res.body.category.createdAt,
        updatedAt: res.body.category.updatedAt,
      }

      const newCategory = res.body.category
      expect(newCategory).toEqual(sendCategory)
  })
})

describe('testing/categories', () => {
  test('Create a category', async () => {
    const res = await request(app)
      .post('/categories/newCategory')
      .expect(201)
      expect(res.body.category.id).toBeDefined()
      expect(res.body.category.createdAt).toBeDefined()
      expect(res.body.category.updatedAt).toBeDefined()
  })
})