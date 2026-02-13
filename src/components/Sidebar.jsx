import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-64 bg-white shadow-md p-6'>
        <h1 className='text-xl font-bond mb-6 text-blue-600'>
            RiskRadar
        </h1>

        <ul className="space-y-4">
            <li className='cursor-pointer hover:text-blue-500'>
                Dashboard
            </li>
            <li>Risk Map</li>
            <li>Alerts</li>
            <li>Reports</li>
        </ul>
    </div>
  )
}
