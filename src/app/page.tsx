import Image from "next/image";

export default function Home() {
  return (
    <div style={{'background':'#f39ff3', 'display':'flex'}} className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div style={{'width':'55%','padding':'130px','fontSize': '30px', 'border':'1px solid gray', 'marginRight':'20px', 'marginLeft':'10px'}}>
        <h1><u>Saadia Parveen</u></h1>
        <div>
            <p>I am a house wife and i have Three Childerns</p>
            <p>I am a new nextjs developer</p>
            <p>My Goal to be a new Freelancer for nextjs projects</p>
            <p>I have some ideas of Freelancer websites.</p>
            <p>My interest to learn web design and developments.</p>
        </div>
      </div>
      <div style={{'width':'25%','padding':'180px', 'border':'1px solid gray'}}>
      <img
            aria-hidden
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1RgH3oS3XlyJAcsAyUspuRz8IZVI0sJ0K7lrnQ0XLFMoE2pa2VpNg2Pk3W6gLfzlNK8&usqp=CAU"
            alt="File icon"
            width={400}
            height={400}
          />
      </div>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
