import {Link} from "react-router-dom"
 

 
 export default function Component() {
   return (
     <div className="min-h-screen bg-gray-100 flex">
       <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
           <p className="mt-2 text-center text-sm text-gray-600 max-w">
             Access your project management account securely
           </p>
         </div>
         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
           <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
             <form className="space-y-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                   Enter your email address
                 </label>
                 <div className="mt-1">
                   <input id="email" placeholder="email@email.com" type="email" />
                 </div>
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                   Enter your password
                 </label>
                 <div className="mt-1">
                   <input id="password" placeholder="******************" type="password" />
                 </div>
               </div>
               <div className="flex items-center justify-between">
                 <div className="flex items-center">
                   <input type="checkbox" id="terms" />
                   <label className="ml-2 block text-sm text-gray-900" htmlFor="terms">
                     By logging in, you agree to the Project Management Terms
                   </label>
                 </div>
                 <div className="text-sm">
                   <Link className="font-medium text-orange-600 hover:text-orange-500" to="/">
                     Forgot your project management password?
                   </Link>
                 </div>
               </div>
               <div>
                 <button className="w-full bg-orange-600 text-white">Log in</button>
               </div>
             </form>
             <div className="mt-6">
               <div className="relative">
                 <div className="absolute inset-0 flex items-center">
                   <div className="w-full border-t border-gray-300" />
                 </div>
                 <div className="relative flex justify-center text-sm">
                   <span className="px-2 bg-white text-gray-500">or</span>
                 </div>
               </div>
               <div className="mt-6">
                 <div className="text-center">
                   <Link className="font-medium text-orange-600 hover:text-orange-500" href="#">
                     New to project management? Create an account
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="hidden lg:block relative w-0 flex-1">
         <div className="absolute inset-0 bg-[#1a202c] flex flex-col justify-center">
           <div className="mx-auto w-96">
             <div className="flex justify-center mb-6">
              <MessageCircleIcon className="h-12 w-12 text-orange-500" />
             </div>
             <h3 className="text-center text-3xl font-extrabold text-white">Features</h3>
             <ul className="mt-8 space-y-4">
               <li className="flex items-center">
                 <CheckIcon className="h-6 w-6 text-green-500" />
                 <span className="ml-3 text-lg text-white">Unlimited task assignments</span>
               </li>
               <li className="flex items-center">
                 <GiftIcon className="h-6 w-6 text-green-500" />
                 <span className="ml-3 text-lg text-white">Free forever</span>
               </li>
               <li className="flex items-center">
                 <UsersIcon className="h-6 w-6 text-green-500" />
                 <span className="ml-3 text-lg text-white">Full team collaboration access</span>
               </li>
               <li className="flex items-center">
                 <LightbulbIcon className="h-6 w-6 text-green-500" />
                 <span className="ml-3 text-lg text-white">Expert recommendations</span>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   )
 }
 
 function CheckIcon(props) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <polyline points="20 6 9 17 4 12" />
     </svg>
   )
 }
 
 
 function GiftIcon(props) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <polyline points="20 12 20 22 4 22 4 12" />
       <rect width="20" height="5" x="2" y="7" />
       <line x1="12" x2="12" y1="22" y2="7" />
       <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
       <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
     </svg>
   )
 }
 
 
 function LightbulbIcon(props) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
       <path d="M9 18h6" />
       <path d="M10 22h4" />
     </svg>
   )
 }
 
 
 function MessageCircleIcon(props) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
     </svg>
   )
 }
 
 
 function UsersIcon(props) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
       <circle cx="9" cy="7" r="4" />
       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
     </svg>
   )
 }
 