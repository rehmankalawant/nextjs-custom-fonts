import { Card } from "@/components/ui/card"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconWorld,
} from "@tabler/icons-react"
import Link from "next/link"

const SocialHandles = () => {
  return (
    <>
      <div className="mb-8">
        <Card className="h-fit w-fit p-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ButtonGroup className="flex items-center gap-1">
              <Button
                size="icon-lg"
                variant="outline"
                className="rounded-md transition-colors hover:bg-muted"
              >
                <IconBrandGithub stroke={1.5} />
              </Button>
              <Button
                size="icon-lg"
                variant="outline"
                asChild
                className="rounded-md transition-colors hover:bg-muted"
              >
                <Link href="https://github.com/rehmankalawant" target="_blank">
                  <IconArrowUpRight stroke={2} />
                </Link>
              </Button>
            </ButtonGroup>

            <ButtonGroup className="flex items-center gap-1">
              <Button
                size="icon-lg"
                variant="outline"
                className="rounded-md transition-colors hover:bg-muted"
              >
                <IconBrandLinkedin stroke={2} />
              </Button>
              <Button
                size="icon-lg"
                variant="outline"
                asChild
                className="rounded-md transition-colors hover:bg-muted"
              >
                <Link
                  href="https://linkedin.com/in/rehmankalawant"
                  target="_blank"
                >
                  <IconArrowUpRight stroke={2} />
                </Link>
              </Button>
            </ButtonGroup>

            <ButtonGroup className="flex items-center gap-1">
              <Button
                size="icon-lg"
                variant="outline"
                className="rounded-md transition-colors hover:bg-muted"
              >
                <IconBrandX stroke={2} />
              </Button>
              <Button
                size="icon-lg"
                variant="outline"
                asChild
                className="rounded-md transition-colors hover:bg-muted"
              >
                <Link href="https://x.com/rehman3001" target="_blank">
                  <IconArrowUpRight stroke={2} />
                </Link>
              </Button>
            </ButtonGroup>

            <ButtonGroup className="flex items-center gap-1">
              <Button
                size="icon-lg"
                variant="outline"
                className="rounded-md transition-colors hover:bg-muted"
              >
                <IconWorld stroke={2} />
              </Button>
              <Button
                size="icon-lg"
                variant="outline"
                asChild
                className="rounded-md transition-colors hover:bg-muted"
              >
                <Link href="https://rehmankalawant.vercel.app" target="_blank">
                  <IconArrowUpRight stroke={2} />
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
