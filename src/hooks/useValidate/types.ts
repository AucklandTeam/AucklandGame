export type Patterns = {
    pattern: RegExp;
    error: string;
    test?(value: string): boolean;
}

export type ValTypes = {
    [key: string]: Patterns;
}
