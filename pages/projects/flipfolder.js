import React, { useRef, useEffect, useState } from 'react';
import ProjectHeader from '../../components/ProjectHeader';
import SayHi from '../../components/SayHi';

function FlipFolder() {
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
        title="FlipFolder App"
        company="Freelance"
        year="2025"
        scope="Mobile App"
      />

      {/* Project Intro */}
      <p className="mb-12 lg:w-3/5 fade-in delay-4">
        FlipFolder is a mobile app that synchronizes digital sheet music across musical band members in real time, replacing traditional paper flip folders for seamless performances.
      </p>

      <div className="mb-3 flex lg:flex-row flex-col rounded-lg gap-10 fade-in delay-5">
        <div className="flex-1 rounded-lg relative overflow-hidden bg-neutral-100">
            <video className="lazyload rounded-lg" ref={el => videoRefs.current[1] = el} muted autoPlay loop playsInline preload="auto" poster="">
                <source
                  type="video/mp4"
                  src="/videos/flipfolder/ff-featured-wide.mp4"></source>
            </video>
        </div>
      </div>

      <p className="mb-16 annotation text-sm fade-in delay-6">In collaboration with Lynn Tang and J.W. Pepper team</p>

      <b className="mb-4">Background</b>
      <p className="mb-4 lg:w-3/5">
        Since its MVP launch in 2018, FlipFolder prioritized function over form, resulting in an outdated user interface. I partnered with J.W. Pepper, a leading sheet music provider, to modernize the app and create a more polished and intuitive experience.
      </p>
      <p className="mb-12 lg:w-3/5">
        Through band leader and player interviews, I identified key challenges and opportunities to improve performances.
      </p>

      <div className="mb-16 flex lg:flex-row flex-col rounded-lg">
        <div className="flex-1 py-6 rounded-lg relative lg:h-[541px] overflow-hidden bg-neutral-100 flex items-center justify-center">
            <video className="lazyload rounded-lg h-full w-full object-contain" ref={el => videoRefs.current[2] = el} muted autoPlay loop playsInline preload="auto" poster="">
                <source
                  type="video/mp4"
                  src="/videos/flipfolder/ff-performances.mp4"></source>
            </video>
        </div>
      </div>

      <b className="mb-4">Visibility through interaction</b>
      <p className="mb-4 lg:w-3/5">
        One of the key challenges was &ldquo;how to subtly but effectively communicate that a user is in a live performance&rdquo;&mdash;a concern highlighted by band leaders.
      </p>
      <p className="mb-12 lg:w-3/5">
        To solve this, I have created a dynamic status indicator that updates in real time, reinforcing the app&apos;s core functionality while maintaining a seamless, fluid experience. I focused on crafting smooth transitions and animations to make it feel natural and cohesive.
      </p>

      <div className="mb-16 flex lg:flex-row flex-col rounded-lg">
        <div className="flex-1 rounded-lg relative overflow-hidden flex items-end">
            <video className="lazyload rounded-lg w-full" ref={el => videoRefs.current[3] = el} muted autoPlay loop playsInline preload="auto" poster="">
                <source
                  type="video/mp4"
                  src="/videos/flipfolder/ff-status.mp4"></source>
            </video>
        </div>
      </div>

      <b className="mb-4">Manipulating music</b>
      <p className="mb-4 lg:w-3/5">
        Previously, the app lacked clear feedback when manipulating music sheets, making annotation, cropping, and rearranging pages confusing.
      </p>
      <p className="mb-12 lg:w-3/5">
        I redesigned the canvas interactions with visible state updates, icon labels, and real-time feedback, ensuring every action felt intentional and intuitive.
      </p>

      <div className="mb-4 flex-1 px-32 py-6 rounded-lg relative overflow-hidden bg-neutral-100">
        <img className="" src="/images/flipfolder/ff-annotations.png" alt="FlipFolder Annotations" />
      </div>
      <p className="mb-12 annotation text-sm">Improved annotation mode and labeling of tools.</p>

      <div className="mb-4 flex-1 px-32 py-6 rounded-lg relative overflow-hidden bg-neutral-100">
        <img className="" src="/images/flipfolder/ff-rearrange.png" alt="FlipFolder Rearrange" />
      </div>
      <p className="mb-16 annotation text-sm">Leaders can now rearrange or hide pages in the app, letting them fix incorrectly uploaded files.</p>

      <b className="mb-4">Responsive design</b>
      <p className="mb-12 lg:w-3/5">
        Users manage performances and view music on variety of devices and orientations. I designed an adaptive system that adapts flawlessly, from compact mobile phones to larger tablets, in portrait and landscape.
      </p>

      <div className="mb-12 flex-1 px-16 py-12 rounded-lg relative overflow-hidden bg-neutral-100">
        <img className="" src="/images/flipfolder/ff-landscape.png" alt="FlipFolder Responsive" />
      </div>

      <b className="mb-4">Beyond aesthetics</b>
      <p className="mb-12 lg:w-3/5">
        Besides the aesthetic choice, dark mode improves battery life by 30-50% for extended performances and enhances music sheet readability in bright outdoor environments, ensuring we cater to specific needs of band players.
      </p>

      <div className="mb-12 flex-1 py-16 rounded-lg relative overflow-hidden bg-neutral-100">
        <img className="" src="/images/flipfolder/ff-darkmode.png" alt="FlipFolder Dark Mode" />
      </div>

      <div className="mb-12 flex-1 px-16 py-24 rounded-lg relative overflow-hidden bg-neutral-100">
        <img className="" src="/images/flipfolder/ff-components.png" alt="FlipFolder Components" />
      </div>

      <b className="mb-4">Additional details</b>
      <p className="mb-12 lg:w-3/5">
        I wrote Swift to create high fidelity prototypes, and took on the role of directly responsible individual to execute on the details and work to ensure this brand new app surface was built with a high level of craftsmanship.
      </p>

      <div className="mb-3 flex-1 py-6 px-16 rounded-lg relative overflow-hidden bg-neutral-100">
        <img className="" src="/images/flipfolder/ff-swiftprototype.png" alt="FlipFolder Swift Prototype" />
      </div>

      <p className="mb-16 annotation text-sm">Main view and starting performance prototype</p>

      <p className="mb-4 lg:w-3/5">
        FlipFolder is a product of the hard work and collaboration with amazing teammates at J.W. Pepper. The new app will be available in App Store at the end of 2025.
      </p>

      <SayHi></SayHi>
    </div>
  );
}

export default FlipFolder; 