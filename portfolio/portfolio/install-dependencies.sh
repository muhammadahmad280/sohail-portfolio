#!/bin/bash

echo "Installing dependencies..."

# Install all dependencies
npm install

# Install additional dependencies if needed
npm install clsx
npm install @hookform/resolvers

# Install dev dependencies
npm install -D @types/react @types/react-dom

echo "Dependencies installed successfully!"