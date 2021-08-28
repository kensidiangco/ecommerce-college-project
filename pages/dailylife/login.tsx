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
			<div className="flex justify-center py-20">
				<div className="px-3 md:px-10 py-5 shadow-lg bg-gray-200 dark:bg-gray-700 rounded-2xl">
					<p className="text-xl md:text-2xl font-semibold p-2 text-gray-700 dark:text-gray-50">Login your account.</p>
					<form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-2">
						<input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}
							className="p-2 md:p-3 dark:bg-gray-500 bg-gray-50 rounded-lg" required />
						<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
							className="p-2 md:p-3 dark:bg-gray-500 bg-gray-50 rounded-lg" required />
						<input type="submit" value="Login" className="p-2 md:p-4 bg-blue-500 text-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md hover:bg-indigo-500 transition delay-100 cursor-pointer" />
					</form>
					<div className="text-blue-700 dark:text-gray-200 text-center pt-2 text-sm md:text-md">
						<Link href="/dailylife/signup">Doesn&apos;t have an account? Signup</Link>
					</div>
				</div>
			</div>
		</>
	)
}