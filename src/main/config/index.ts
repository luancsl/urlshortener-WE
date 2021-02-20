// constantes e variaveis de ambiente utilizadas no projeto
export default {
    SERVER_PORT: process.env.PORT || 3001,
    BD_CLEANING_TIME: {
        T1M: 60000,
        T1H: 3600000,
        T5H: 18000000,
        T1D: 86400000,
        T1W: 604800000
    }
}