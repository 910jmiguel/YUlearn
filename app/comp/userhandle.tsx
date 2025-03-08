"use client"
import React, { useState, useEffect } from 'react'

const UserHandle = () => {
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('/api/user') // API endpoint to fetch user name
        const data = await response.json()
        setUserName(data.name || 'Guest')
      } catch (error) {
        console.error('Failed to fetch user data', error)
      }
    }
    fetchUserName()
  }, [])

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow pt-16">
        <h1 className="text-7xl font-bold mb-4">YuLearn</h1>
        <p className="text-lg font-semibold">Welcome, {userName}!</p>
      </div>
    </div>
  )
}

export default UserHandle
