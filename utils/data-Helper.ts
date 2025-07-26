import crypto from 'crypto'

export async function randomNumber(){
    return Math.floor(Math.random() * 1000 +1)

}

export async function randonString(){
    return crypto.randomBytes(10).toString('hex')
}