import { UserProps } from '@/interfaces'
import React from 'react'

const UserCard : React.FC<UserProps> = ({id,name,username,email,phone,website,company,address}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-blue-600 underline">🌐 {website}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">🏢 {company.name}</h3>
        <p className="text-sm italic text-gray-500">{company.catchPhrase}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          📍 {address.suite}, {address.street}, {address.city}
        </p>
        <p>Zip: {address.zipcode}</p>
      </div>

      <div className="mt-2 text-xs text-gray-400">User ID: {id}</div>
    </div>
  )
}

export default UserCard
