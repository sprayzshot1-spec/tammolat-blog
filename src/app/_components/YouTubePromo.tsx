// src/app/_components/YouTubePromo.tsx
'use client';

interface YouTubePromoProps {
  videoUrl: string;
  title?: string;
}

export default function YouTubePromo({ videoUrl, title = 'فيديو تعريفي' }: YouTubePromoProps) {
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 animate-fade-in">
      <div className="bg-white p-2 sm:p-4 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">🎬 {title}</h3>
        <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}