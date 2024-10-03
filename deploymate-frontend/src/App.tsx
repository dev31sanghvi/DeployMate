import React, { useState } from 'react';

const App: React.FC = () => {
  const [repoLink, setRepoLink] = useState('');
  const [deploying, setDeploying] = useState(false);
  const [deployId, setDeployId] = useState('');
  const [deployLink, setDeployLink] = useState('');

  const handleDeploy = () => {
    if (!repoLink) {
      alert('Please enter a valid GitHub repository link');
      return;
    }

    console.log(' Starting  Deployment Process ');
    console.log(`Repository Link: ${repoLink}`);

    setDeploying(true);
    const id = generateRandomId();
    setDeployId(id);

    console.log(`Generated Deployment ID: ${id}`);
    console.log(' Cloning repository from GitHub...');

    // Simulate each step of the complex deployment process
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
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Deploymate</h1>
      <input
        type="text"
        value={repoLink}
        onChange={(e) => setRepoLink(e.target.value)}
        placeholder="Paste your GitHub repo link"
        style={{ width: '300px', padding: '10px' }}
      />
      <br />
      <button onClick={handleDeploy} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Deploy
      </button>

      {deploying && (
        <div style={{ marginTop: '20px' }}>
          <p>Deployment started with ID: {deployId}</p>
        </div>
      )}

      {!deploying && deployLink && (
        <div style={{ marginTop: '20px' }}>
          <p>Your project has been deployed: <a href={deployLink} target="_blank" rel="noopener noreferrer">{deployLink}</a></p>
        </div>
      )}
    </div>
  );
};

export default App;
