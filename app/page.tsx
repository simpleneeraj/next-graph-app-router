import Link from 'next/link';

export default function Example() {
  return (
    <div className="container max-w-lg mx-auto h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/client"
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Client Side
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Explore the example with Apollo Hook →
          </p>
        </Link>
        <Link
          href="/client"
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Server Side
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Explore the example with Apollo Client →
          </p>
        </Link>
      </div>
    </div>
  );
}
