export async function DebugFunction() {
    console.log("in debug function")
    let message = await testing()
    console.log('debug function got await message:', message)
    return message
}

async function testing() {
    //     setTimeout(() => {
    //         let message = "returned data"
    //         console.log('in set timeout')
    //         return message
    //     }, 2000)
    for (let i = 0; i < 1000000; i++) {
        asdf = i + 1
    }
    let m = "returned data"
    return m
}