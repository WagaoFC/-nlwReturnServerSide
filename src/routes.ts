import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1d44373f829314",
        pass: "a0e483407a3d94"
    }
});

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const feedback = 

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Wagner Costa <wagner.costa@zema.com>',
        subject: 'Novo Feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    })

    return res.status(201).json({ data: feedback })
})