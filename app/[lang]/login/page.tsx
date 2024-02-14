
import { ProfileForm } from "@/app/[lang]/login/forms";




export default function  Home() {


  return (

  



      <div className="flex flex-col items-center justify-center min-h-full">
      
     
          <div className="">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <ProfileForm />
            
          </div>
      
  
 
 
     
 


    
     
 


    </div>

    

  );
}
