#!/usr/bin/env node

const { spawn } = require('child_process');
const net = require('net');

// Ports to try in order
const PORTS = [3000, 3001, 3002, 3003, 3004];

/**
 * Check if a port is available
 */
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(false);
      } else {
        resolve(false);
      }
    });
    
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    
    server.listen(port);
  });
}

/**
 * Find the first available port from the list
 */
async function findAvailablePort() {
  for (const port of PORTS) {
    const available = await isPortAvailable(port);
    if (available) {
      return port;
    }
  }
  return null;
}

/**
 * Start the Next.js dev server on an available port
 */
async function startDevServer() {
  const port = await findAvailablePort();
  
  if (!port) {
    console.error('❌ No available ports found. Tried:', PORTS.join(', '));
    process.exit(1);
  }
  
  console.log(`🚀 Starting Next.js dev server on port ${port}...`);
  
  const child = spawn('next', ['dev', '-p', port.toString()], {
    stdio: 'inherit',
    shell: true
  });
  
  child.on('error', (error) => {
    console.error('Failed to start dev server:', error);
    process.exit(1);
  });
  
  child.on('exit', (code) => {
    process.exit(code || 0);
  });
}

startDevServer();
