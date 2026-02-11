import {useState} from 'react'
export default function Onboarding(){
  const [step,setStep]=useState(1)
  return (
    <main style={{padding:40}}>
      <h1>Workspace Onboarding (Wizard)</h1>
      <div style={{marginTop:20}}>
        {step===1 && (
          <section>
            <h2>Step 1 — Create Workspace</h2>
            <p>Collect business name, address, timezone, contact email.</p>
            <button onClick={()=>setStep(2)}>Next</button>
          </section>
        )}
        {step===2 && (
          <section>
            <h2>Step 2 — Connect Email & SMS</h2>
            <p>Connect at least one channel to activate the Inbox.</p>
            <button onClick={()=>setStep(3)}>Next</button>
          </section>
        )}
        {step===3 && (
          <section>
            <h2>Step 3 — Create Contact Form</h2>
            <p>Create public contact form fields (name, email/phone, message).</p>
            <button onClick={()=>setStep(4)}>Next</button>
          </section>
        )}
        {step>3 && (
          <section>
            <h2>Remaining Steps</h2>
            <ol>
              <li>Set up bookings</li>
              <li>Attach post-booking forms</li>
              <li>Configure inventory</li>
              <li>Invite staff & Activate</li>
            </ol>
          </section>
        )}
      </div>
    </main>
  )
}
