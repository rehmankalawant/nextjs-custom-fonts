import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ButtonGroup } from "@/components/ui/button-group"
import Portfolio from "@/public/icons/portfolio"
import { SquareArrowOutUpRight } from "lucide-react"

const PortfolioButton = () => {
  return (
    <>
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
    </>
  )
}

export default PortfolioButton
