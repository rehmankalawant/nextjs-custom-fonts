import { Card } from "@/components/ui/card"
import GithubButton from "@/components/social-buttons/github-button"
import LinkedinButton from "@/components/social-buttons/linkedin-button"
import TwitterButton from "@/components/social-buttons/twitter-button"
import PortfolioButton from "@/components/social-buttons/portfolio-button"

const SocialHandles = () => {
  return (
    <>
      <div className="mb-8">
        <Card className="h-fit w-fit rounded-full p-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <GithubButton />
            <LinkedinButton />
            <TwitterButton />
            <PortfolioButton />
          </div>
        </Card>
      </div>
    </>
  )
}

export default SocialHandles
