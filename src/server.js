import app from '../src/app.js'
import './config/configEnv.js'

const port = process.env.PORT;

app.listen(port, () =>
    console.log(`Api Rodando no endereço http://localhost:${port}`)
)