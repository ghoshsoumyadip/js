//fetch a api in js
const name = 'soumyadip';
const md5h = require('md5');
fetch('https://example.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({Soumyadip: 'md5h'}),
})
.then(response => response.text())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
