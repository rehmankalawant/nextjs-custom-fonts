import { Card } from "@/components/ui/card"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SquareArrowOutUpRight } from "lucide-react"
import Portfolio from "@/public/icons/portfolio"
import X from "@/public/icons/x"
import LinkedIn from "@/public/icons/linkedin"
import GitHub from "@/public/icons/github"

const SocialHandles = () => {
  return (
    <>
      <div className="mb-8">
        <Card className="h-fit w-fit p-3 rounded-full">
          <div className="flex flex-wrap items-center justify-center gap-3">
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

            <ButtonGroup>
              <Button size="sm" variant="outline">
                <LinkedIn className="h-6 w-6 text-[#0A66C2]" />
              </Button>
              <Button size="sm" variant="outline">
                LinkedIn
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link
                  href="https://linkedin.com/in/rehmankalawant"
                  target="_blank"
                >
                  <SquareArrowOutUpRight />
                </Link>
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button size="sm" variant="outline">
                <X />
              </Button>
              <Button size="sm" variant="outline">
                X
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="https://x.com/rehman3001" target="_blank">
                  <SquareArrowOutUpRight />
                </Link>
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button size="sm" variant="outline">
                <Portfolio className="h-6 w-6 text-[#36CFCC]" />
              </Button>
              <Button size="sm" variant="outline">
                Portfolio
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="https://rehmankalawant.vercel.app" target="_blank">
                  <SquareArrowOutUpRight />
                </Link>
              </Button>
            </ButtonGroup>
          </div>
        </Card>
      </div>
    </>
  )
}

export default SocialHandles
