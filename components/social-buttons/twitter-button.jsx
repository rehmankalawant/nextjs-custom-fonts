import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ButtonGroup } from "@/components/ui/button-group"
import X from "@/public/icons/x"
import { SquareArrowOutUpRight } from "lucide-react"

const TwitterButton = () => {
  return (
    <>
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
    </>
  )
}

export default TwitterButton
