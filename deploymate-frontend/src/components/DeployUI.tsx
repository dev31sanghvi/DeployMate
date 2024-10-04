import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DeployUI: React.FC = () => {
  const [repoLink, setRepoLink] = useState('');
  const [deploying, setDeploying] = useState(false);
  const [deployId, setDeployId] = useState('');
  const [deployLink, setDeployLink] = useState('');

  const handleDeploy = () => {
    if (!repoLink) {
      alert('Please enter a valid GitHub repository link');
      return;
    }

    console.log(' Starting Deployment Process ');
    console.log(`Repository Link: ${repoLink}`);

    setDeploying(true);
    const id = generateRandomId();
    setDeployId(id);

    console.log(`Generated Deployment ID: ${id}`);
    console.log(' Cloning repository from GitHub...');

    setTimeout(() => {
      console.log(' Uploading files to S3...');
    }, 1000);

    setTimeout(() => {
      console.log('Retrieving files from S3 for build...');
    }, 2000);

    setTimeout(() => {
      console.log(' Setting up build environment (installing dependencies)...');
    }, 3000);

    setTimeout(() => {
      console.log(' Running build script...');
    }, 4000);

    setTimeout(() => {
      console.log(' Packaging application...');
    }, 5000);

    setTimeout(() => {
      console.log(' Deploying application to server...');
    }, 6000);

    setTimeout(() => {
      console.log(' Finalizing deployment and running post-deploy tasks...');
    }, 7000);

    setTimeout(() => {
      const deploymentLink = 'https://devsanghvi.me';
      setDeployLink(deploymentLink);
      setDeploying(false);

      console.log(`Deployment Successful! Your project is deployed at: ${deploymentLink}`);
      console.log('--- Complex Deployment Process Completed ---');
    }, 8000);
  };

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 5);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
    <motion.h1
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: 'spring', duration: 1.5 }}
  style={{
    marginBottom: '20px',
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#00D1B2',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  }}
>
  Deploymate
</motion.h1>


      <motion.input
        type="text"
        value={repoLink}
        onChange={(e) => setRepoLink(e.target.value)}
        placeholder="Paste your GitHub repo link"
        style={{ width: '300px', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: 'none', color: 'black' }}
        whileHover={{ scale: 1.05 }}
        whileFocus={{ outline: '2px solid #00D1B2' }}
      />

      <motion.button
        onClick={handleDeploy}
        style={{
          backgroundColor: '#00D1B2',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
        whileHover={{ scale: 1.1, backgroundColor: '#00B29C' }}
        whileTap={{ scale: 0.95 }}
      >
        Deploy
      </motion.button>

      {/* Deployment Message */}
      {deploying && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            backgroundColor: '#2C2C2C',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <p>Deployment started with ID: <strong>{deployId}</strong></p>
        </motion.div>
      )}

      {!deploying && deployLink && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            backgroundColor: '#2C2C2C',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <p>Your project has been deployed: <a href={deployLink} target="_blank" rel="noopener noreferrer" style={{ color: '#00D1B2', fontWeight: 'bold', textDecoration: 'underline' }}>{deployLink}</a></p>
        </motion.div>
      )}

      {/* Monitoring Service Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        style={{
          marginTop: '40px',
          padding: '20px',
          borderRadius: '5px',
          backgroundColor: '#2C2C2C',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
        }}
      >
        <h2 className="text-xl font-bold text-white mb-2">Monitoring Service</h2>
        <p className="text-gray-400 mb-4">Set up monitoring for your deployed project to track its performance and uptime.</p>
        <motion.button
          onClick={() => alert('Monitoring setup functionality coming soon!')}
          style={{
            backgroundColor: '#00D1B2',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
          whileHover={{ scale: 1.1, backgroundColor: '#00B29C' }}
          whileTap={{ scale: 0.95 }}
        >
          Set Up Monitoring
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DeployUI;
