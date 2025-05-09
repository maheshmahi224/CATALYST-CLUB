
import React from 'react';
import { BadgeCheck, Award, Database } from 'lucide-react';

const Certification = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Are <span className="text-gradient">Certified</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <BadgeCheck className="h-12 w-12 text-catalyst-teal mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Be10x Certification</h3>
              <p className="text-gray-600">
                Earned a prestigious certification from the Be10x platform, showcasing our expertise in strategic thinking, innovation, and leadership. Focused on driving exponential growth and personal development.
              </p>
            </div>
            
            <div className="flex items-center space-x-3 mt-8">
              <Award className="h-6 w-6 text-catalyst-cyan" />
              <span className="text-sm font-medium text-gray-700">Excellence in Innovation</span>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <Award className="h-6 w-6 text-catalyst-cyan" />
              <span className="text-sm font-medium text-gray-700">Strategic Leadership</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <Database className="h-12 w-12 text-catalyst-teal mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Power BI Certification</h3>
              <p className="text-gray-600">
                Mahesh, Lead Coordinator, has completed Power BI Certification with Office Master. Now skilled in creating AI-powered dashboards and visual analytics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-medium text-gray-800">Data Visualization</h4>
                <p className="text-xs text-gray-500 mt-1">Advanced charting and reporting</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-medium text-gray-800">Dashboard Design</h4>
                <p className="text-xs text-gray-500 mt-1">Interactive business intelligence</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-medium text-gray-800">Data Modeling</h4>
                <p className="text-xs text-gray-500 mt-1">Relational data structures</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-medium text-gray-800">AI Integration</h4>
                <p className="text-xs text-gray-500 mt-1">Smart analytics solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
