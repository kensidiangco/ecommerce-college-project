import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()

		setUsername('')
		setPassword('')

		router.push("/")
	}

	return (
		<>
			<Head>
				<title>Login</title>	
			</Head>
			<div className="flex justify-center py-10">
				<div className="p-5 md:px-7 md:py-5 shadow-lg bg-gray-200 dark:bg-dark-card rounded-2xl">
					<p className="text-xl md:text-2xl font-semibold py-2 text-gray-700 dark:text-gray-50">Login your account.</p>
					<form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-2 mt-2">
						<input type="text" placeholder="Username or Email" onChange={(e) => setUsername(e.target.value)}
							className="p-2 md:p-3 dark:bg-dark-input bg-gray-50 rounded-lg placeholder-dark-placeholder" required />
						<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
							className="p-2 md:p-3 dark:bg-dark-input bg-gray-50 rounded-lg placeholder-dark-placeholder" required />
						<input type="submit" value="Login" className="p-2 md:p-3 mt-px bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-blue-400 transition delay-50 cursor-pointer" />
					</form>
					<div className="text-blue-700 dark:text-blue-500 text-center pt-2 text-sm md:text-md">
						<Link href="/dailylife/signup">Doesn&apos;t have an account? Signup</Link>
					</div>
				</div>
			</div>
		</>
	)
}