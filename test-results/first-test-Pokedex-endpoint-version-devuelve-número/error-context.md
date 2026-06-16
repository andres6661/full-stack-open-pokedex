# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: first-test.spec.js >> Pokedex >> endpoint /version devuelve número
- Location: e2e-tests\first-test.spec.js:21:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/version
Call log:
  - navigating to "http://localhost:3000/version", waiting until "load"

```

# Test source

```ts
  1  | const { test, describe, expect } = require('@playwright/test')
  2  | 
  3  | describe('Pokedex', () => {
  4  |   test('front page can be opened', async ({ page }) => {
  5  |     await page.goto('')
  6  |     await expect(page.getByText('ivysaur')).toBeVisible()
  7  |     await expect(
  8  |       page.getByText(
  9  |         'Pokémon and Pokémon character names are trademarks of Nintendo.',
  10 |       ),
  11 |     ).toBeVisible()
  12 |   })
  13 | 
  14 |   test('navegar en la pagina de Ivysaur y verificar habilidad', async ({
  15 |     page,
  16 |   }) => {
  17 |     await page.goto('http://localhost:8080')
  18 |     await page.click('text=ivysaur')
  19 |     await expect(page.locator('body')).toContainText('chlorophyll')
  20 |   })
  21 |   test('endpoint /version devuelve número', async ({ page }) => {
  22 |     // Abre directamente la ruta /version en el servidor configurado
> 23 |     await page.goto('http://localhost:3000/version')
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/version
  24 | 
  25 |     // Verifica que el contenido sea un número
  26 |     const content = await page.textContent('body')
  27 |     expect(content).toMatch(/^\d+$/) // comprueba que es un número
  28 |   })
  29 | })
  30 | 
```