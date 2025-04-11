// Role-Based Authorization
// Task:
// Restrict access to routes based on roles (e.g., admin, user).

// Concepts Tested:

// Decoding JWT payload
// Custom role-checking middleware


require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error('JWT_SECRET is not defined in .env file');
  process.exit(1); 
}


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Authentication token required' });
  }

  try {
 
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};


const restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: 'Access denied: Insufficient permissions' 
      });
    }
    next();
  };
};


app.get('/user-data', 
  authenticateToken, 
  restrictTo('user', 'admin'), 
  (req, res) => {
    res.json({ message: 'User data accessed', user: req.user });
  }
);

app.get('/admin-data', 
  authenticateToken, 
  restrictTo('admin'), 
  (req, res) => {
    res.json({ message: 'Admin data accessed', user: req.user });
  }
);


app.post('/login', (req, res) => {
  
  const user = {
    id: 1,
    username: req.body.username,
    role: req.body.role 
  };

 
  const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});


app.listen(3000, () => console.log('Server running on port 3000'));