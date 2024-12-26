
import ButtonLogin from "@/components/ButtonLogin";

function Home() {
  const isLoggedIn = true;
  const name = "Chad";

  return (
    <main>
      {/* Header */}
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
         <div className="font-bold">CodeFastSaaS</div>
         <div className="space-x-4 max-md:hidden">
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">FAQ</a>
         </div>
        <div>
      </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
        </div>
   


      </section>
      {/* Hero */}
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
      <h1 className="text-4xl lg:text-5-xl font-extrabold mb-6">
        Collect customer feedback to build better products</h1>
      <div className="opacity-90 mb-10">
        Create a feedback board in minutes, priotize features, and 
        build products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
      </section>

      {/* Pricing */}
      <section className="bg-base-200">
        <div className="py-32 px-8 maxx-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
            </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
             <div className="flex gap-2 items-baseline">
                <div className="text-4xl font-black>">$19</div>
                <div className="uppercase text-sm font-medium opacity-60">/month</div>
             </div>
             
             <ul classname="space-y-2">

               <li className="flex gap-2 items-center">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" 
                className="text-green-600 size-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>

               
                Collect Customer Feedback</li>
                <li className="flex gap-2 items-center">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" 
                className="text-green-600 size-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>

               
                Admin Dashboard</li>
                <li className="flex gap-2 items-center">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" 
                className="text-green-600 size-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>

               
                24/7 Support</li>
                <li className="flex gap-2 items-center">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" 
                className="text-green-600 size-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>

               
                Unlimited Boards</li>
               
             </ul>
             <ButtonLogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full"/>
           </div>
           </div>
      </section>
    </main>
  );
}

export default Home;

