import React from 'react';

export default function ConstructionLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Main Container */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Side - Company Info */}
          <div className="space-y-8">
            
            {/* Company Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are revolutionising the construction ecosystem and scaling rapidly!
              </p>
              
              {/* Geometric Logo/Design */}
              <div className="relative">
                <div className="w-48 h-32 relative">
                  {/* Layered triangular shapes */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform rotate-45 rounded-lg opacity-90"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-blue-300 transform rotate-45 rounded-lg opacity-80"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-blue-200 transform rotate-45 rounded-lg opacity-70"></div>
                  <div className="absolute inset-6 bg-gradient-to-r from-blue-300 to-blue-100 transform rotate-45 rounded-lg opacity-60"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-blue-200 to-blue-50 transform rotate-45 rounded-lg opacity-50"></div>
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                SINCE OUR FOUNDING{' '}
                <span className="text-blue-500">IN 1998</span>
              </h1>
              <h2 className="text-4xl font-bold text-gray-800 mt-2">
                HAS BEEN CONSTRUCT AND DESIGNING THE FUTURE
              </h2>
            </div>
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* Row 1 */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-500 mb-2">$2.5B</div>
                <div className="text-sm text-gray-600">Valuation</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-500 mb-2">6000+</div>
                <div className="text-sm text-gray-600">SKUs</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-500 mb-2">4000+</div>
                <div className="text-sm text-gray-600">Retail stores</div>
              </div>
              
              {/* Row 2 */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-500 mb-2">25+</div>
                <div className="text-sm text-gray-600">Exclusive Brand Outlets</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-500 mb-2">22</div>
                <div className="text-sm text-gray-600">States</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-500 mb-2">100+</div>
                <div className="text-sm text-gray-600">Dedicated Manufacturing Units</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Building Image */}
          <div className="relative">
            <div className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-3xl p-8 shadow-2xl">
              {/* Building Image Placeholder */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop" 
                  alt="Modern Building" 
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Section */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-4xl font-bold text-gray-800">
              OUR <span className="text-gray-900">PRODUCTS</span>
            </h3>
            <button className="text-green-500 font-semibold hover:text-green-600 transition-colors flex items-center">
              VIEW ALL
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            {/* Construction Materials Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop" 
                  alt="Construction Materials" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Construction Materials</h4>
                <p className="text-gray-600 mt-2">& Building Materials</p>
              </div>
            </div>
            
            {/* Construction Machines Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=200&fit=crop" 
                  alt="Construction Equipment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Construction Machines</h4>
                <p className="text-gray-600 mt-2">& Equipments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}