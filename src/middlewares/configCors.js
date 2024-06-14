import '../config/configEnv.js'

const port = process.env.PORT;

const corsOptions = ({
    origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
        'Content-Type', 'Authorization',
    ],
    allowedOrigins: '*',
    allowedHeaders: 'Content-Type',
    credentials: true,
    port: port,
    optionsSuccessStatus: 200
});

export default { corsOptions };