import { useEffect, useState } from "react"
import Head from 'next/head'
import axios from 'axios'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`${process.env.BACKEND_API_BASE}/store/api/contact/`, {
            name: name,
            sender: email,
            message: message
        })

        .then(res => {
            setName('')
            setEmail('')
            setMessage('')
            setSuccess('Email sent!')
        })
        .catch(err =>
            setErrorMessage('Message not sent! Check your connections and try again.')
        )
    }

    const removeMessage = () => {
        setSuccess('')
        setErrorMessage('')
    }

    useEffect(() => {
		if(!!errorMessage){
			setTimeout(() => setErrorMessage(''), 5000)
		}
	}, [errorMessage])

    useEffect(() => {
		if(!!success){
			setTimeout(() => setSuccess(''), 5000)
		}
	}, [success])
    
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <div className="container mx-auto">
                    {!!success && 
                        <p className="text-center text-green-600 dark:text-green-200 mt-5">{success} <span className="text-red-500 cursor-pointer mx-5" onClick={() => removeMessage()}>x</span></p>
                    }
                    {!!errorMessage &&
                         <p className="text-center text-red-600 dark:text-red-200 mt-5">{errorMessage} <span className="text-gray-600 dark:text-gray-50 cursor-pointer mx-5" onClick={() => removeMessage()}>x</span></p>
                    }
                <div className="flex justify-center py-5">
                    <div className="p-5 md:px-7 md:py-5 shadow-lg bg-gray-200 dark:bg-dark-card rounded-2xl">
                        <h1 className="text-xl md:text-2xl font-semibold py-2 text-gray-700 dark:text-gray-50">
                            Contact us!
                        </h1>
                        <form autoComplete="off" className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Your name..." 
                                className="p-2 md:p-3 dark:bg-dark-input bg-gray-50 rounded-lg placeholder-dark-placeholder" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required/>
                            <input 
                                type="email" 
                                placeholder="Your email..." 
                                className="p-2 md:p-3 dark:bg-dark-input bg-gray-50 rounded-lg placeholder-dark-placeholder" 
                                value={email}    
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                            <textarea
                                rows={5}
                                placeholder="messages..."
                                className="w-full p-2 md:p-3 dark:bg-dark-input bg-gray-50 rounded-lg placeholder-dark-placeholder"
                                value={message}    
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <input type="submit" value="Send" className="p-2 md:p-3 bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-indigo-500 transition delay-50 cursor-pointer"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}