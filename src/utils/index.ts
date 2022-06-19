
const isObject = (value: unknown):boolean =>{
    const type = typeof value;
    return null !== value && type === 'object' && !Array.isArray(value);
};

type StringIndexed = Record<string, any>;

function getKeysToArray(obj: StringIndexed): string[] {
    let array: string[] = [];
    Object.entries(obj).forEach(([k, v]) => {
        if (isObject(v)) {
            array.concat();
            array = [...array, `[${k}]`, ...getKeysToArray(v)];
        } else {
            array.push(`[${k}]=${v}`);
        }
    });
    return array;
}

function isPrimitive(value: unknown): boolean {
    const type = typeof value;
    return ['number', 'string', 'boolean'].indexOf(type) > -1;
}

function queryStringify(data: StringIndexed): string | never {
    if (!isObject(data)) {
        new Error('input must be an object');
    }
    let result = '';
    Object.entries(data).forEach(([key, value]) => {
        if (isPrimitive(value)) {
            result = `${result ? result + '&' : ''}${key}=${value}`;
        }
        if (Array.isArray(value)) {
            value.forEach((v, i) => {
                if (isPrimitive(v)) {
                    result = `${result ? result + '&' : ''}${key}[${i}]=${v}`;
                } else {
                    result = queryStringify(v);
                }
            });
        }
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            result = `${result ? result + '&' : ''}${key}${getKeysToArray(value).join('')}`;
        }
    });
    return result;
}

export default queryStringify;