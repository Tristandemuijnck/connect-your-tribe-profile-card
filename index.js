import express from 'express'

const app = express()
const memberId = "cldeo39d93rtl0bw5g97gv7t3";

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', async (req, res) => {
	let content = ""

	await fetch(`https://whois.fdnd.nl/api/v1/member?id=${memberId}`)
    .then((response) => response.json())
    .then((data) => content = data.member)

	res.render('index', { content })
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
	console.log(`Application started on http://localhost:${app.get('port')}`)
})