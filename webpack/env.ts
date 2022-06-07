import { join } from 'path'

export const IS_DEV = process.env.NODE_ENV !== 'production'
export const IS_PROD = !IS_DEV
export const SRC_DIR = join(__dirname, '../src')
export const SERVER_DIR = join(__dirname, '../src/server')
export const ROOT_DIR = join(__dirname, '../')
export const DIST_DIR = join(__dirname, '../dist')
export const PUB_DIR = join(__dirname, '../public')
