import Header from "./Header";

export default function About() {
  return (
    <div className="bg-[#121212] min-h-screen text-[#f2f2f2] px-6 -mt-10 py-10 flex flex-col items-center">
      <Header />
      <div className="max-w-3xl mt-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#00f0ff]">About This App</h1>
        <p className="text-lg leading-8 mb-4">
          Welcome to <span className="text-[#00f0ff] font-semibold">FlixTerra</span> – your personal gateway into the world of cinema.
          This app lets you discover, explore, and save your favorite movies using data fetched from
          <a
            href="https://www.themoviedb.org/"
            className="text-blue-400 hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB API
          </a>
          .
        </p>

        <p className="text-lg leading-8 mb-4">
          Whether you're searching for legendary blockbusters or indie gems, FlixTerra gives you a
          sleek and responsive interface to browse films, view details, and manage your favorite list
          – all without signing in.
        </p>

        <p className="text-lg leading-8 mb-4">
          Built with <span className="text-pink-400 font-semibold">React</span> and styled using{" "}
          <span className="text-green-400 font-semibold">Tailwind CSS</span>, the app leverages modern
          UI/UX principles to keep everything lightweight, intuitive, and blazing fast.
        </p>

        <p className="text-lg leading-8">
          This project is a work-in-progress, and I'm constantly adding new features like genre filters,
          user profiles, theme toggle, and more. If you have suggestions, feedback, or just wanna say hi —
          head over to the Feedback page!
        </p>

        <div className="mt-10 text-[#888] text-sm">
          © {new Date().getFullYear()} FlixTerra.
        </div>
      </div>
    </div>
  );
}
