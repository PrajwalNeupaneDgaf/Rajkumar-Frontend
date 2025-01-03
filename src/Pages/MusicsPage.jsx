import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MusicsPage = () => {
  const containerRef = useRef();
  const musicListRef = useRef();

  // Initialize state for videos fetched from YouTube
  const [videos, setVideos] = useState([]);

  const API_KEY = 'AIzaSyD5cgoPcqIa1ZQT9fEgg6GwJkAROCRqeCk'; // Replace with your API Key
  const CHANNEL_ID = 'UCJMEoCLpTQt9e0vtnGLvfvQ'; // Replace with your actual Channel ID (not username)

  // Fetch videos from YouTube
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Fetch channel's upload playlist
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${CHANNEL_ID}&part=contentDetails`
        );
        const channelData = await channelResponse.json();
        const uploadPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Fetch videos from the upload playlist
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${uploadPlaylistId}&part=snippet&maxResults=5`
        );
        const videosData = await videosResponse.json();

        // Map the video data
        const videoLinks = videosData.items.map((item) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium.url,
          link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        }));

        // Set videos state
        setVideos(videoLinks);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideos();
  }, [API_KEY, CHANNEL_ID]);

  // GSAP ScrollTrigger setup for video items
  useEffect(() => {
    const listItems = musicListRef.current.children;

    gsap.fromTo(
      listItems,
      {
        opacity: 0,
        y: 100, // Start position: off-screen (100px down)
      },
      {
        opacity: 1,
        y: 0, // End position: normal
        duration: 1,
        stagger: 0.3, // Stagger the animation for each item
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // Trigger when 80% of the container is visible
          end: 'bottom 20%',
          toggleActions: 'play none none reverse', // Play on scroll in, reverse on scroll out
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="musics"
      className="h-[100vh] w-full bg-gray-900 flex flex-col items-center pt-10 to-gray-800 text-white overflow-hidden"
    >
      <h1 className="lg:text-5xl text-3xl font-bold text-blue-300 tracking-wide mb-8">
        🎵 My Music Collection
      </h1>

      <div className="w-[90%] h-[80vh] mainBox overflow-y-auto overflow-x-hidden bg-transparent rounded-lg p-6">
        <ul ref={musicListRef} className="space-y-6">
          {videos.map((video, index) => (
            <li
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 rounded-xl p-6 shadow-xl relative hover:scale-105 transform transition-all"
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-red-500 to-pink-500 opacity-30 rounded-xl blur-lg"></div>

              <span className="text-sm lg:text-lg font-semibold text-yellow-300 z-10">
                {video.title}
              </span>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 lg:mt-0 bg-blue-500 hover:bg-blue-600 text-white text-sm lg:text-md font-bold py-2 px-4 rounded-full transition-all z-10"
              >
                Visit YouTube
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicsPage;
