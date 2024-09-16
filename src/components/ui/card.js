import React from 'react';

export function Card({ children, className }) {
  return <div className={`rounded-lg p-4 shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function CardDescription({ children, className }) {
  return <p className={className}>{children}</p>;
}

export function CardHeader({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`font-bold text-xl ${className}`}>{children}</h2>;
}
