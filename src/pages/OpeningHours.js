import React from "react";

const hours = [
  { day: "Monday", hours: "8:00 till 00:00" },
  { day: "Tuesday", hours: "8:00 till 00:00" },
  { day: "Wednesday", hours: "8:00 till 00:00" },
  { day: "Thursday", hours: "8:00 till 00:00" },
  { day: "Friday", hours: "8:00 till 00:00" },
  { day: "Saturday", hours: "8:00 till 00:00" },
  { day: "Sunday", hours: "8:00 till 00:00" },
];

export default function OpeningHours() {
  return (
    <section className="page-section" style={{maxWidth:600, margin:"2rem auto"}}>
      <h2 className="menu-heading">Opening Hours</h2>
      <div style={{color:"#d4af37", fontWeight:"bold", marginBottom:"1rem"}}>
        Café menu is served daily from 8:00am till 4pm
      </div>
      <table style={{width:"100%", borderCollapse:"collapse"}}>
        <tbody>
          {hours.map((row, i) => (
            <tr key={i} style={{borderBottom:"1px solid #f3e6b3"}}>
              <td style={{fontWeight:"bold", padding:"0.8rem", color:"var(--primary)"}}>{row.day}</td>
              <td style={{textAlign:"right", padding:"0.8rem", color:"var(--secondary)", fontWeight:"600"}}>{row.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}