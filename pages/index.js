
export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: 'url(https://i.imgur.com/ZU6pA1M.jpg)' }}>
      <div className="bg-black bg-opacity-70 min-h-screen flex flex-col justify-center items-center px-4 py-10">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl max-w-md w-full text-center shadow-2xl">
          <div className="bg-red-600 text-white text-sm font-bold py-2 px-4 rounded mb-4">🔞 18+ WARNING: Adult Content</div>

          <h1 className="text-3xl font-bold mb-4">🔥 Meet Hot Singles Near You</h1>
          <p className="text-lg mb-6">Thousands are ready to connect. Are you 18+ and ready to chat?</p>

          <a
            href="https://your-cpa-link.com"
            className="bg-pink-600 hover:bg-pink-700 transition-all text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-lg"
          >
            Yes, I am 18+ – Enter Now
          </a>

          <p className="text-sm mt-6 opacity-70">
            *This is an advertisement. You must be 18 or older to continue.
          </p>
        </div>
      </div>
    </div>
  );
}
