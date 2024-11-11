import React from 'react';

type Issue = {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'closed';
};

const issues: Issue[] = [
  { id: 1, title: 'Use Bun as package manager', description: 'Finished', status: 'closed' },
  { id: 2, title: 'Setup monorepo architecture', description: 'Finished. Used TurboRepo for stability purpose', status: 'closed' },
  { id: 3, title: 'Put eslint config and typescript-config inside packages', description: 'Verified ESLint using = "bun run lint" command', status: 'closed' },
  { id: 4, title: ' Setup react app for dashboard', description: 'Frontend needs to be worked on. ', status: 'open' },
];

const IssuesViewer: React.FC = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        <a
          href="https://github.com/imanubhardwaj/sahay/issues/1" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500"
        >
          Issue #1
        </a>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{issue.title}</h2>
            <p className="mt-2 text-gray-600">{issue.description}</p>
            <div className="mt-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  issue.status === 'open' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}
              >
                {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
              </span>
              <div>
              <h2 className='flex justify-center'>
              <a
                href='https://github.com/imanubhardwaj/sahay/issues/1'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-800"
              ></a></h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex justify-center"><h1 className='text-3xl font-semibold text-white mb-6'>Go to /dashboard</h1></div>
    </>
  );
};

export default IssuesViewer;










// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//     <div className="flex justify-center">
//         Home page
//     </div>
//     </>
//   );
// }


//<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>