import Blog from "/src/components/blog/Blog.jsx";
import FeatureBlog from "/src/components/feature-Blog/FeatureBlog";
import MoreBlogs from "/src/components/more-Blogs/MoreBlogs";


export default function Artemis() {
  return (
    <div className="app-hero">
      <Blog
        heading="NASA, Intuitive Machines Share Images from the Moon, Provide Science Updates"
        blogDetails="NASA and Intuitive Machines co-hosted a news conference on Feb. 28 to provide a status update on the six NASA instruments that collected data on the IM-1 mission.  Mission challenges and successes were discussed during the briefing including more than 350 megabits of science data downloaded ready for analysis. During transit, all powered NASA payloads operated and received data. During descent and landing, guidance and navigation data was collected that will help improve landing precision in the future, and all three payloads that were designed to operate on the surface have received data."
        postDetails="February 28, 2024 6:36 pm on Space Station"
      />

      <FeatureBlog name="Feature" />
      <Blog
        heading="NASA Science Touches Down on Moon with Intuitive Machines’ Mission"
        blogDetails="Carrying NASA science and technology to the Moon, Intuitive Machines’ uncrewed lunar lander touched down at 5:23 p.m. CST on Thursday. The instruments aboard Odysseus will prepare NASA for future human exploration of the Moon under Artemis. Additional updates will be available Friday, Feb. 23."
        postDetails="February 22, 2024 10:55 pm on Space Station"
      />
      <MoreBlogs />
    </div>
  );
}
