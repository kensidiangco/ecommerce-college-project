import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn, getSession } from 'next-auth/client';

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	signIn('credentials', {
	// 		username,
	// 		password,

	// 		callbackUrl: `${window.location.origin}/`
	// 	})
	// 	setUsername('')
	// 	setPassword('')
	// }
	
	return (
		<>
			<Head>
				<title>Login</title>	
			</Head>
			<div className="flex justify-center py-10">
				<div className="p-5 md:px-7 md:py-5 shadow-lg bg-gray-200 dark:bg-dark-card rounded-2xl">
					<p className="text-xl md:text-2xl font-semibold py-2 text-gray-700 dark:text-gray-50">Login your account.</p>
					{/* <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-2 mt-2">
						<input type="text" placeholder="Username or Email" onChange={(e) => setUsername(e.target.value)}
							className="p-2 md:p-3 dark:bg-dark-input bg-gray-50 rounded-lg placeholder-dark-placeholder" required />
						<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
							className="p-2 md:p-3 dark:bg-dark-input bg-gray-50 rounded-lg placeholder-dark-placeholder" required />
						<input type="submit" value="Login" className="p-2 md:p-3 mt-px bg-blue-500 text-gray-50 dark:bg-dark-button dark:hover:bg-button-hover rounded-md hover:bg-blue-400 transition cursor-pointer" />
					</form>
					<div className="text-blue-700 dark:text-blue-500 text-center pt-2 text-sm md:text-md">
						<Link href="/dailylife/signup">Doesn&apos;t have an account? Signup</Link>
					</div> */}
					
					<div className="mt-2">
						<div className="py-1 px-5 rounded-md bg-gray-100 text-gray-700 dark:text-gray-50 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 transition delay-50 cursor-pointer m-2" onClick={() => signIn()}>
							<span className="flex items-center font-semibold gap-1">
								<Image src="/googleLogo.png" width={40} height={40} objectFit='contain' loading="eager" alt="Google"/>
								<p className="text-sm">Login with Google</p>
							</span>
						</div> 
					</div>

					{/* <div className="mt-2">
						<div className="flex py-px px-5 items-center justify-center cursor-pointer border border-gray-400 rounded-md text-gray-800 dark:text-gray-200" onClick={() => signIn('facebook', { callbackUrl: `${window.location.origin}/dailylife/cart` })}>
							<Image src="/googleLogo.png" width={40} height={40} objectFit='contain'/>
							<p className="text-sm">Login with Facebook</p>
						</div> 
					</div> */}
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps(context) {
	const session = await getSession(context)

	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: { session }
	}
}