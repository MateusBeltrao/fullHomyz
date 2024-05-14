import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-q8cx154qb7b3j6vd.us.auth0.com",
    tokenSigningAlg: "RS256"
})


export default jwtCheck