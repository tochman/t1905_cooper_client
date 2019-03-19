describe('Cooper Client', async () => {

  beforeAll(async () => {
    jest.setTimeout(10000)
    await page.goto('http://localhost:3001');
  });

  beforeEach(async () => {
    await page.reload();
  })

  describe('calculates successfully', async () => {
    beforeEach(async () => {
      await page.type('input[placeholder="Distance"]', '1000')
      await page.type('input[placeholder="Age"]', '23')
      // let selector = await page.$$('#gender')
      // await selector.click()
    })

    it('displays age', async () => {
      await expect(page).toMatch('23 y/o')
    })

    it('displays gender', async () => {
      await expect(page).toMatch('female')
    })

    it('displays distance', async () => {
      await expect(page).toMatch('running 1000 meters')
    })

    it('displays result', async () => {
      await expect(page).toMatch('Result: Poor')
    })
  })
})