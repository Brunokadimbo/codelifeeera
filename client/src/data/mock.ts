// Mock data for CodeLifeEra Dashboard

export const activeEngines = 5;

export const systemHealth = 'Good';

export const developerLog = [
  { id: 1, timestamp: '2024-04-25 11:42 PM', message: 'Core system initialized', level: 'info' },
  { id: 2, timestamp: '2024-04-25 11:40 PM', message: 'Neural network calibration complete', level: 'success' },
  { id: 3, timestamp: '2024-04-25 11:35 PM', message: 'Engine 3 performance optimized', level: 'info' },
  { id: 4, timestamp: '2024-04-25 11:30 PM', message: 'System health check passed', level: 'success' },
  { id: 5, timestamp: '2024-04-25 11:25 PM', message: 'Syncing core modules', level: 'warning' },
];

// Brain activity data points for the chart (20 values)
export const brainActivity = [
  45, 52, 48, 61, 55, 68, 72, 65, 78, 82,
  75, 88, 92, 85, 78, 72, 68, 75, 82, 78
];

// Engine data
export const engines = [
  { id: 1, name: 'Engine Alpha', status: 'active', load: 78 },
  { id: 2, name: 'Engine Beta', status: 'active', load: 65 },
  { id: 3, name: 'Engine Gamma', status: 'active', load: 82 },
  { id: 4, name: 'Engine Delta', status: 'standby', load: 0 },
  { id: 5, name: 'Engine Epsilon', status: 'active', load: 71 },
];
