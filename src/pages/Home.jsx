import Blog from "/src/components/blog/Blog.jsx";
import FeatureBlog from "/src/components/feature-Blog/FeatureBlog";
import MoreBlogs from "/src/components/more-Blogs/MoreBlogs";


export default function Home(){
    return (
        <div className="app-hero">
        <Blog
          heading="Station Goes into Final Handovers Before Next Crew Departs"
          blogDetails="Two crews aboard the International Space Station are continuing mission handover responsibilities before four Expedition 70 crewmates return to Earth next week. In the meantime, a host of advanced space research is underway to improve life on Earth and in space. The next crew to leave the orbital outpost is due"
          postDetails="Posted Mar 8, 2024 at 5:36 pm on Space Station"
        />
       
        <FeatureBlog name="Feature" />
        <Blog
          heading="Station Goes into Final Handovers Before Next Crew Departs"
          blogDetails="Two crews aboard the International Space Station are continuing mission handover responsibilities before four Expedition 70 crewmates return to Earth next week. In the meantime, a host of advanced space research is underway to improve life on Earth and in space. The next crew to leave the orbital outpost is due"
          postDetails="Posted Mar 8, 2024 at 5:36 pm on Space Station"
        />
        <MoreBlogs />
        <Blog
          heading="Station Goes into Final Handovers Before Next Crew Departs"
          blogDetails="Two crews aboard the International Space Station are continuing mission handover responsibilities before four Expedition 70 crewmates return to Earth next week. In the meantime, a host of advanced space research is underway to improve life on Earth and in space. The next crew to leave the orbital outpost is due"
          postDetails="Posted Mar 8, 2024 at 5:36 pm on Space Station"
        />
      </div>
    )
        
    
}