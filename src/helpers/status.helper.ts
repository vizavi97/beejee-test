export const getStatusInfo = (number: number) => {
    if(number === 0) return ({
        text: "задача не выполнена",
        emoji: "⛔"
    })
    if(number === 1) return ({
        text: "задача не выполнена, отредактирована админом",
        emoji: "❌"
    })
    if(number === 10) return ({
        text: "задача выполнена",
        emoji: "✔"
    })
    if(number === 11) return ({
        text: "задача отредактирована админом и выполнена",
        emoji: "✅"
    })
    else return ({
        text: "Статус задачи не известен",
        emoji: "❓"
    })
 }