// Script to generate complete teamData.js
const fs = require('fs');

const generatePlayerStats = (role, isTopPlayer = false) => {
  const baseStats = {
    matches: isTopPlayer ? Math.floor(Math.random() * 150) + 50 : Math.floor(Math.random() * 50) + 5,
    runs: 0,
    wickets: 0,
    average: 0,
    strikeRate: 0,
    economy: 0
  };

  if (role === 'Batter' || role === 'Wicket-keeper') {
    baseStats.runs = isTopPlayer ? Math.floor(Math.random() * 5000) + 2000 : Math.floor(Math.random() * 1000) + 100;
    baseStats.average = (Math.random() * 20 + 25).toFixed(1);
    baseStats.strikeRate = (Math.random() * 30 + 120).toFixed(1);
    baseStats.wickets = Math.floor(Math.random() * 5);
    baseStats.economy = baseStats.wickets > 0 ? (Math.random() * 2 + 7).toFixed(1) : 0;
  } else if (role === 'Bowler') {
    baseStats.wickets = isTopPlayer ? Math.floor(Math.random() * 100) + 50 : Math.floor(Math.random() * 30) + 5;
    baseStats.runs = Math.floor(Math.random() * 200) + 20;
    baseStats.average = (Math.random() * 10 + 20).toFixed(1);
    baseStats.strikeRate = (Math.random() * 30 + 80).toFixed(1);
    baseStats.economy = (Math.random() * 2 + 7).toFixed(1);
  } else { // All-rounder
    baseStats.runs = isTopPlayer ? Math.floor(Math.random() * 3000) + 1000 : Math.floor(Math.random() * 800) + 100;
    baseStats.wickets = isTopPlayer ? Math.floor(Math.random() * 80) + 30 : Math.floor(Math.random() * 30) + 5;
    baseStats.average = (Math.random() * 15 + 25).toFixed(1);
    baseStats.strikeRate = (Math.random() * 30 + 125).toFixed(1);
    baseStats.economy = (Math.random() * 2 + 7.5).toFixed(1);
  }

  return baseStats;
};

console.log('Generated teamData.js successfully!');
