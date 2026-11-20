import dotenv from "dotenv"

dotenv.config()

const requireVariables = ["MONGODB_URI"]

for (const variable of requireVariables) {
    if(!process.env[variable]) {
        throw new Error(`Missing environment variable: ${variable}`)
    }
}

export const env = {
    port: Number(process.env.PORT) || 5000,
    nodeEnv: process.env.NODE_ENV || "development",
    mongodbUri: process.env.MONGODB_URI,
    clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
}