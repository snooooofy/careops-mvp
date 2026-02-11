import Link from 'next/link'
export default function Home(){
  return (
    <main style={{padding:40,fontFamily:'Inter,system-ui,sans-serif'}}>
      <h1>CareOps — MVP</h1>
      <p>Unified operations platform prototype (Inbox, Bookings, Forms, Inventory, Dashboard)</p>
      <ul>
        <li><Link href="/onboarding">Onboarding wizard</Link></li>
        <li><Link href="/dashboard">Owner Dashboard</Link></li>
        <li><Link href="/inbox">Inbox</Link></li>
        <li><Link href="/bookings">Bookings</Link></li>
        <li><Link href="/inventory">Inventory</Link></li>
      </ul>
    </main>
  )
}
