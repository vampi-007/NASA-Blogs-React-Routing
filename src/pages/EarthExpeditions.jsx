import Blog from "/src/components/blog/Blog.jsx";
import FeatureBlog from "/src/components/feature-Blog/FeatureBlog";
import MoreBlogs from "/src/components/more-Blogs/MoreBlogs";


export default function EarthExpeditions() {
  return (
    <div className="app-hero">
      <Blog
        heading="A Day in the Life of the Ocean Currents"
        blogDetails="While doing oceanographic fieldwork, we live and work on the ship. This is the second week that we have been at sea. While there is a rhythm to life at sea, every day is different. Since we are studying ocean dynamics that change quickly, we sample adaptively, meaning that we adjust when and where we sample to follow quickly moving ocean features. I am a postdoctoral fellow at University of California, San Diego’s Scripps Institution of Oceanography. I am working on sampling biological communities to understand how ocean currents, particularly a type of current called submesoscale that spans up to 6.2 miles, or 10 kilometers, across, affect plankton, which form the base of the food web in the ocean. We work as a team on the ship, and I work most closely with the biological sampling team: Kelly Luis (NASA’s Jet Propulsion Laboratory), Sarah Lang and Pat Kelly (University of Rhode Island), Dante Capone (UC San Diego), and Élise Beaudin (Brown University)."
        postDetails="on June 6, 2023 on Space Station"
      />

      <FeatureBlog name="Feature" />
      <Blog
        heading="In Dust and Clouds Over Africa, Scientists Find Clues to How Hurricanes Form"
        blogDetails="When the dust that wafts off the Sahel and Sahara regions of Africa mixes with tropical clouds, it creates what’s known as a rainy “disturbance” in the eastern Atlantic. These disturbances are hurricanes in their youngest form, and as they travel across the ocean, they can either dissipate or grow into powerful storms."
        postDetails="May 24, 2023 on Space Station"
      />
      <MoreBlogs />
    </div>
  );
}
