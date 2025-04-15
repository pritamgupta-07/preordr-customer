"use client"
import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      // Add your authentication logic here
      console.log('Logging in with:', { email, password })
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log('Signing in with Google')
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="bg-[var(--color-surface-500)] shadow-md rounded-lg w-[350px] md:w-[500px] mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-[var(--color-text-primary-600)]">Login to your account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-3 bg-red-500/20 text-red-300 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary-500)]">
            Email address*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-[var(--color-surface-700)] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-[var(--color-text-primary-500)]">
            Password*
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[var(--color-surface-700)] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-[var(--color-primary-500)]"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded bg-[var(--color-surface-600)] border-[var(--color-surface-700)] text-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--color-text-primary-500)]">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)]">
              Forgot password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-[var(--color-surface-500)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
      
      <div className="flex items-center my-2">
        <div className="flex-grow border-t border-[var(--color-surface-700)]"></div>
        <span className="mx-4 text-sm text-[var(--color-text-primary-300)]">OR</span>
        <div className="flex-grow border-t border-[var(--color-surface-700)]"></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[var(--color-surface-400)] hover:bg-[var(--color-surface-550)] text-[var(--color-text-primary-500)] font-medium rounded-md border border-[var(--color-surface-700)] transition-colors duration-200 focus:outline-none focus:ring-offset-2  disabled:opacity-70 disabled:cursor-not-allowed focus:bg-[var(--color-surface-600)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
          <path 
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
            fill="#4285F4"
          />
          <path 
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
            fill="#34A853"
          />
          <path 
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
            fill="#FBBC05"
          />
          <path 
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
            fill="#EA4335"
          />
        </svg>
        {isLoading ? 'Signing in...' : 'Continue with Google'}
      </button>

      <div className="mt-6 text-center text-sm text-[var(--color-text-primary-200)]">
        Don't have an account?{' '}
        <a href="#" className="font-medium text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)]">
          Sign up
        </a>
      </div>
    </div>
  )
}

export default LoginForm