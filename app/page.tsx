import Link from "next/link";


export default function Home() {
  return (
    <>
    <main>
      <h1 className="text-3xl font-bold mb-4 text-blue-600">The Cat Gallery</h1>
      <p>
        This web application fetches and display random cat
        images from the internet. Click on the <strong>Images</strong> tab to see!
      </p>

    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500"> Resources on Cats</h2>
        <ul>
          <li>
            <Link
              href="https://thecatconnection.org/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Website that helps cats!
            </Link>
          </li>
          <li>
            <Link
              href="https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Random facts about cats!
            </Link>
          </li>
          <li>
            <Link
              href="https://www.petfinder.com/search/cats-for-adoption/us/ma/boston/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Adopt a cat!
            </Link>
          </li>
        </ul>
    </div>
    </main>
    </>
  );
}
