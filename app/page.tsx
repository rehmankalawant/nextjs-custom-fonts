import AboutMe from "@/components/about-me"
import SocialHandles from "@/components/social-handles"

const page = () => {
  return (
    <>
      <div className="mx-4 flex flex-col gap-8 md:mx-auto">
        <AboutMe />
        <SocialHandles />
      </div>
    </>
  )
}

export default page
