import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import GitHub from "@/public/icons/github"
import { SquareArrowOutUpRight } from "lucide-react"
import Link from "next/link"

const GithubButton = () => {
  return (
    <>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <GitHub className="h-7 w-7 text-black dark:text-white" />
        </Button>
        <Button size="sm" variant="outline">
          GitHub
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link href="https://github.com/rehmankalawant" target="_blank">
            <SquareArrowOutUpRight />
          </Link>
        </Button>
      </ButtonGroup>
    </>
  )
}

export default GithubButton
