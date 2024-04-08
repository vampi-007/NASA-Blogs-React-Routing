import "./Feature.css";

export default function FeatureBlog(props){
    return (

        <div className="feature">
            <h2>FEATURED BLOGS</h2>
            <img src="/public/boi.jpeg" />
            <p>Administrator Bill Nelson</p>

            <p>
            International Space Station <br/>
Daily updates from the orbiting laboratory.
            </p>

            <p>
            Commercial Crew Program <br/>
News on Commercial Crew progress and partners Boeing and SpaceX.
            </p>
        </div>
    )
}