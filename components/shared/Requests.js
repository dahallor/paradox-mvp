export async function GETRequest(path) {
    try {
        const res = await fetch(path)
        const data = await res.json()
        if (!res.ok) {
            console.log('res issue')
            console.log(res)
            return
        }
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function PATCHRequest(path, key, value) {
    try {
        const res = await fetch(path, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ [key]: value })
        })
        const data = await res.json()
        if (!res.ok) {
            console.log('res issue')
            console.log(res)
        }
        return data
    } catch (error) {
        console.log(error)
    }

}

export async function POSTRequest(path, value) {
    try {
        const res = await fetch(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
        })
        const data = await res.json()
        if (!res.ok) {
            console.log('res issue')
            console.log(res)
        }
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function CreateNewToplineResource(path, value) {
    try {
        const res = await fetch(path, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
        })
        const data = await res.json()
        if (!res.ok) {
            console.log('res issue')
            console.log(res)
        }
        return data
    } catch (error) {
        console.log(error)
    }

}
