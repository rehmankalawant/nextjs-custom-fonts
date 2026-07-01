import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ButtonGroup } from "@/components/ui/button-group"
import LinkedIn from "@/public/icons/linkedin"
import { SquareArrowOutUpRight } from "lucide-react"

const LinkedinButton = () => {
  return (
    <>
      <ButtonGroup>
        <Button size="sm" variant="outline">
          <LinkedIn className="h-6 w-6 text-[#0A66C2]" />
        </Button>
        <Button size="sm" variant="outline">
          LinkedIn
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link href="https://linkedin.com/in/rehmankalawant" target="_blank">
            <SquareArrowOutUpRight />
          </Link>
        </Button>
      </ButtonGroup>
    </>
  )
}

export default LinkedinButton
