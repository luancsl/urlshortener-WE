// constantes e variaveis de ambiente utilizadas no projeto
export default {
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    DATABASE_PORT: process.env.MONGO_PORT || 27017,
    DATABASE_ADDR: process.env.MONGO_URL || `mongodb://localhost:27017/shortenedUrl-app`,
    BD_CLEANING_TIME: {
        T1M: 60000,
        T1H: 3600000,
        T5H: 18000000,
        T1D: 86400000,
        T1W: 604800000
    }
}