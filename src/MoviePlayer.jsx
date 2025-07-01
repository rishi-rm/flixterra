import { useParams } from "react-router-dom";

export default function MoviePlayer() {
  const { movieName } = useParams();

  return (
    <div className="min-h-screen w-full bg-[#121212] flex flex-col items-center px-4 py-10 text-white font-mono">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#00f0ff] tracking-wide drop-shadow">
        Now Streaming
      </h1>

      <div className="w-full max-w-5xl shadow-lg rounded-lg overflow-hidden border border-[#333] hover:border-[#00f0ff] transition-all duration-300">
        <video controls className="w-full h-auto rounded-lg bg-black">
          <source src={`https://6dcc-2401-4900-1c6f-7509-9c2f-7275-6448-8cd6.ngrok-free.app/videos/${movieName}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="mt-6 text-[#888] text-sm tracking-wider">
        Using the flixterra server
      </p>
    </div>
  );
}
