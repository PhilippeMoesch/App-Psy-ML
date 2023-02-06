import React, { useState } from 'react';
import '../assets/main.css';

import  { useRef } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./contexts/AuthContext"
import {  useNavigate } from "react-router-dom"

function Settings() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, logout } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()

    //try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
   // } catch {
   //   setError("Failed to log in")
    //}
    setLoading(false)
  }

  async function handleSubmit_2(e) {
    e.preventDefault()

    //try {
      setError("")
      setLoading(true)
      await logout()
      alert("loged out")
      navigate('/Settings')
   // } catch {
   //   setError("Failed to log in")
    //}
    setLoading(false)
  }
    //onSubmit = () => {}
    return (
        <div className="relative flex flex-col justify-center min-h-screen w-full overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-700 underline">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            ref={passwordRef}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-green-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="flex space-x-4 mt-6">
                        <button onClick={handleSubmit} className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Login
                        </button>
                        <button  onClick={handleSubmit_2} className=" w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Log Out
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-green-600 hover:underline"
                    >
                        Please contact Philippe
                    </a>
                </p>
            </div>
        </div>
    );
}


export default Settings