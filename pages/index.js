export default function Home() {

  return (
    <div className="h-screen w-screen">
      <div className="container flex justify-center pt-10 flex-row items-center w-screen">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 pr-10">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
        <h1 className="pl-10 text-3xl font-bold font-sans">
          R. A. Ross
        </h1>     
      </div>
      {/* end photo and name section */}

      {/* intro and cta text */}
      <div className="container mt-10 text-center text-xl mx-auto">
        <p>Hey there. I&apos;m Ryan. I make up stories and write them down. They usually take place in space, or on a distant planet and, of course, have fight scenes and explosions.</p> 
        <br/>
        <p>I like to focus on the people. It&apos;s the people who make the story worth writing and reading. Whether hurdling through space using amazing technology or trying to light a survival fire using ship wreckage in a jungle, it&apos;s the people who we can identify with.</p> 
        <br/>
        {/* <p>If that sounds like something you&apos;re into, then place join my monthly newsletter. You&apos;ll get upates on writing progress, discount codes, product updates, and no spam.</p> */}
        <p>If that sounds like something you&apos;re into, then please check back. I&apos;ll be adding a newletter sign up with a free eBook soon. My first sci-fi series will be out when it&apos;s done.</p>
        </div>
      {/* end intro and cta text */}
    </div>
  )
}