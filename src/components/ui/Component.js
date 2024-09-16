'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Droplet, Brush, BarChart2, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

export default function BusOperationsComponent() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    { icon: <Bus className="h-6 w-6" />, text: "Real-time Bus tracking" },
    { icon: <Droplet className="h-6 w-6" />, text: "Inventory Management" },
    { icon: <Brush className="h-6 w-6" />, text: "Optimised cleaning" },
    { icon: <Clock className="h-6 w-6" />, text: "Efficient scheduling" },
    { icon: <AlertTriangle className="h-6 w-6" />, text: "Incident reporting" },
    { icon: <BarChart2 className="h-6 w-6" />, text: "Detailed analytics" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-gray-800 shadow-2xl overflow-hidden border border-gray-700">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-3xl font-bold mb-2">Reliable Company</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Revolutionizing Bus Operations Management
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="p-6">
          <motion.p
            className="text-gray-300 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reliable Company is transforming the bus operations industry with our cutting-edge management software. We automate and optimize cleaning, refueling, and fleet management tasks to ensure efficient, safe, and reliable public transport services.
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-gray-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-blue-700 p-2 rounded-full">{feature.icon}</div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="bg-gray-700 p-4 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white">Market Overview</h3>
            <p className="text-gray-300 mb-2">
              The public transport sector is increasingly seeking digital solutions to enhance operational efficiency, reduce downtime, and improve service reliability. With the shift towards smarter cities and sustainable transport, there is a growing demand for advanced fleet management systems.
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Market Size:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-2">
              <li>Australia Public Transport Industry: Valued at $9 billion, with a significant portion dedicated to bus operations.</li>
              <li>Digital Transformation in Public Transport: Estimated to be a $15 billion market globally.</li>
            </ul>
            <p className="text-gray-300">
              <strong>Target Audience:</strong> Public transport providers & small businesses investing in smart and efficient operational solutions, including public transit authorities and private bus operators and urban transport services.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
