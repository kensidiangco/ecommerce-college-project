import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Signup() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const [passError, setPassError] = useState('')
	const [successSignup, setSuccessSignup] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		if(password !== password2) {
			setSuccessSignup('')
			setPassError('Confirm password is not pair.')
			setPassword('')
			setPassword2('')
		}else{
			setPassError('')
			setSuccessSignup('Account created. login now')
			setUsername('')
			setEmail('')
			setPassword('')
			setPassword2('')
		}

	}

	return (
		<>
			<Head>
				<title>Sign up</title>
			</Head>
			<div className="flex justify-center py-10">
				<div className="px-5 py-5 md:px-10 md:py-5 shadow-lg bg-gray-200 dark:bg-gray-700 rounded-2xl">
					<p className="text-xl md:text-2xl font-semibold px-3 py-2 text-gray-700 dark:text-gray-50">Create your account.</p>
					{!!successSignup && <p className="text-center text-green-600 p2">{successSignup}</p>}
					<form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-2">
						<input 
							type="text" 
							name="username" 
							placeholder="Username" 
							className="p-2 md:p-3 dark:bg-gray-500 bg-gray-50 rounded-lg" 
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							required 
						/>
						
						<input 
							type="email" 
							name="email" 
							placeholder="Email" 
							className="p-2 md:p-3 dark:bg-gray-500 bg-gray-50 rounded-lg" 
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required 
						/>

						<input 
							type="password" 
							name="password" 
							placeholder="Password" 
							className="p-2 md:p-3 dark:bg-gray-500 bg-gray-50 rounded-lg" 
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required 
							/>

						<input 
							type="password" 
							name="password2" 
							placeholder="Confirm password" 
							className="p-2 md:p-3 dark:bg-gray-500 bg-gray-50 rounded-lg" 
							onChange={(e) => setPassword2(e.target.value)}
							value={password2}
							required 
						/>

						{!!passError && <p className="text-md text-red-500 text-center">{passError}</p>}
						<input 
							type="submit" 
							value="Signup" 
							className="p-2 md:p-4 bg-blue-500 text-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md hover:bg-indigo-500 transition delay-100 cursor-pointer" 
						/>
					</form>
					<div className="text-blue-700 dark:text-gray-200 text-center pt-2 text-sm md:text-md">
						<Link href="/dailylife/login">have an account? Login</Link>
					</div>
				</div>
			</div>
		</>
	)
}