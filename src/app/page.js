import Link from "next/link";
import '../styles/globals.css'; // Adjust if needed


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/TheHUNT-logo.png" alt="The Hunt logo" className="w-20 h-auto" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/about">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          </div>
          <div className="items-center justify-between w-full flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-row p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-xl text-black bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 md:text-blue-500" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 text-xl text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Landing Page Section */}
      <section className="flex flex-col items-center justify-center h-screen p-8 sm:p-20" id="landing">
        <h1 className="text-4xl font-bold mt-8">Welcome to The Hunt</h1>
        <h2 className="text-4xl font-bold mt-8">The Ultimate Geocaching Challenge!</h2>
        <p className="mt-4 text-lg text-center">Ready for an adventure? Join The Hunt, a thrilling game where you can win real prize money by solving clues, following hidden maps, and discovering a geocache in the real world. All you need is your wits and a sense of adventure!</p>
        <div className="mt-8 flex gap-4">
          <a href="#about" className="btn btn-neutral">Learn more</a>
          <a href="#signup" className="btn btn-soft">Sign Up</a>
        </div>
      </section>

      {/* About the Game Section */}
      <section id="about" className="flex flex-col items-center justify-center h-screen p-8 sm:p-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold">How It Works:</h2>
        <img src="/images/rules.png" alt="Rules of the" className="w-20 h-auto" />
        <p className="mt-4 text-lg text-center max-w-2xl">
          Sign Up & Pay
          To enter, simply sign up and pay a small entry fee. You’ll receive a unique participant ID to track your progress throughout the game.

          Hints Unleashed
          Once 1,000 players have joined, we’ll release clues and map snippets on social media that will help guide you to the hidden geocache. These hints are key—solve them to unlock the next stage of the game.

          The Geocache Reveal
          On a specified date, the final clue will be released. Find the geocache, scan the QR code inside, and enter your unique ID to claim victory!

          The First to Find Wins
          The first player to find and scan the QR code wins the prize money. Will it be you?

          Ready to Play?
          Sign up now, get your ID, and start hunting for clues today. The game is on!
        </p>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="flex flex-col items-center justify-center h-screen p-8 sm:p-20">
        <h2 className="text-3xl font-semibold">Sign Up</h2>
        <p className="mt-4 text-lg text-center max-w-2xl">
          Ready to join the fun? Sign up now to start your adventure with us!
        </p>
        <form className="mt-8 w-full max-w-md">
          <input type="email" placeholder="Enter your email" className="input" />
          <button type="submit" className="btn mt-4">Sign Up</button>
        </form>
      </section>
      <div className="flex justify-center mt-8">
      <Link href="/">
      <button className="btn btn-soft btn-accent">Back to Top</button>
      </Link>
      </div>

      </div>
     


  );
}

// Tailwind CSS classes
const btn = "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";
const input = "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600";