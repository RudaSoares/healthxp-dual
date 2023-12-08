const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ2MGZkM2E2LTk0ZjEtNDY0Ni1iYjEyLTMwODBmYjdiNjM3ZS0xNjk4MzQ5ODIzOTU1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDNmY2M1MWItNzMwOS00OWZlLWI5ODYtMjBjYTA0OWE1ODg2IiwidHlwZSI6InQifQ.obSRhrjZo_BvmoSSym4cMVg7z3SoJj1JfFB2O5r47P0'

cypress.run({
    // specs to run here
})
    .then((results) => {
        const args = {
            target: TOKEN,
        }
        tesults.results(results, args);
    })
    .catch((err) => {
        console.error(err)
    })