import { Link } from "react-router-dom"

export default function MoreBlogs() {

    let obj = ["Artemis Program",
        "Commercial Lunar Payload Services",
       "Earth Expeditions",
        "Earth Observatory Earth Matters",
        "Earth Observatory Notes from the Field",
        "Imaging X-ray Polarimetry Explorer",
        "Interns: Interstellar Experiences",
        "ISS On-Orbit Status Report",
        "James Webb Space Telescope",
        "Kennedy Space Center",
        "Northrop Grumman Cargo Missions",
        "Office of Diversity and Equal Opportunity",
        "OSIRIS-REx"]
  return (
    <>
      <div className="feature">
        <h2>FEATURED BLOGS</h2>
        <ul>
            {obj.map(item=><li><Link to={`/${item}`}>{item}</Link></li>)}
        </ul>
      </div>
    </>
  );
}
