export default function Dashboard(){
  return (
    <main style={{padding:40}}>
      <h1>Owner Dashboard</h1>
      <section>
        <h2>Booking Overview</h2>
        <p>Today’s bookings / Upcoming / No-shows</p>
      </section>
      <section>
        <h2>Leads & Conversations</h2>
        <p>New inquiries / Unanswered messages</p>
      </section>
      <section>
        <h2>Forms Status</h2>
        <p>Pending / Overdue / Completed</p>
      </section>
      <section>
        <h2>Inventory Alerts</h2>
        <p>Low-stock / Critical</p>
      </section>
      <section>
        <h2>Key Alerts</h2>
        <p>Missed messages / Unconfirmed bookings / Overdue forms</p>
      </section>
    </main>
  )
}
