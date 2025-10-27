const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data } = await GET `/odata/v4/catalog/CatalogService.ListOfBooks ${{ params: { $select: 'ID,title' } }}`
    expect(data.value).to.containSubset([
      {"ID":"201","title":"Wuthering Heights"},
    ])
  })

  // it('executes submitOrder', async () => {
  //   const { data } = await POST `/odata/v4/catalog/submitOrder ${
  //     {"book":"26750542-6aaf-48be-8bf5-8f6820fd3a48","quantity":16}
  //   }`
  //   // TODO finish this test
  //   // expect(data.value).to...
  // })
})
