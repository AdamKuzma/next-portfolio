import React, { useRef, useEffect, useState } from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import SayHi from '../../components/SayHi';

function MusicPerformanceApp() {
  const videoRefs = useRef([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // The password you want to use
  const correctPassword = 'lookaround';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  useEffect(() => {
    // Only run video initialization if authenticated
    if (!isAuthenticated) return;
    
    const playVideo = (video) => {
      video.play().catch(error => {
        console.error('Error attempting to play', error);
      });
    };

    videoRefs.current.forEach(video => {
      if (video) {
        // Try to play the video direct
        playVideo(video);

        // Add event listener to try to play the video on user interaction
        video.addEventListener('click', () => playVideo(video));
        video.addEventListener('touchstart', () => playVideo(video));
      }
    });
  }, [isAuthenticated]);

  // Password protection form
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-2xl font-bold mb-6">Protected Project</h1>
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Please enter the password to view this project
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Original content (only shown after authentication)
  return (
    <div className="container mx-auto">
      <ProjectHeader
        title="Music Performance App"
        company="Freelance"
        year="2025"
        scope="Mobile App"
      />

      {/* Project Intro */}
      <p className="mb-12 lg:w-3/5 fade-in delay-4">
        A mobile app that synchronizes digital sheet music across musical band members in real time, replacing traditional paper folders for seamless performances.
      </p>

      <div className="mb-3 flex lg:flex-row flex-col rounded-lg fade-in delay-5">
        <div className="flex-1 rounded-lg relative overflow-hidden bg-neutral-100">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <video 
                    className="lazyload rounded-lg absolute top-0 left-0 w-full h-full object-cover" 
                    ref={el => videoRefs.current[1] = el} 
                    muted 
                    autoPlay 
                    loop 
                    playsInline 
                    preload="auto" 
                    poster=""
                >
                    <source
                        type="video/mp4"
                        src="/videos/flipfolder/ff-featured.mp4"
                    ></source>
                </video>
            </div>
        </div>
      </div>

      <SayHi></SayHi>
    </div>
  );
}

export default MusicPerformanceApp; 