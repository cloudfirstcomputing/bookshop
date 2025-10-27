const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('Catalog APIs', () => {

  it('serves CatalogService.Books', async () => {
    const { data,status } = await GET `/odata/v4/catalog/CatalogService.Books ${{ params: { $select: 'ID,title' } }}`
    expect(data.value).to.containSubset([
      {"ID":1,"title":"Wuthering Heights"},
    ]);
    expect(status).to.equal(200);
  })

})
