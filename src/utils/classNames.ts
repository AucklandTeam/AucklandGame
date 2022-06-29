function classNames(...args: any[]) {
    let stack = args
    const result: string[] = []

    while (stack.length > 0) {
        const current = stack.shift()
        if (!current) {
            continue
        }
        if (Array.isArray(current)) {
            stack = [...current, ...stack]
            continue
        }
        if (typeof current === 'object') {
            Object.entries(current).forEach(([key, value]) => {
                if (value) {
                    result.push(key)
                }
            })
            continue
        }
        result.push(current)
    }

    return result.join(' ')
}

export default classNames
