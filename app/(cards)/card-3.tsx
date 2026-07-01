import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const CardThree = () => {
  return (
    <>
      <Card className="h-fit w-full">
        <CardHeader className="flex justify-center">
          <Link href="https://github.com/rehmankalawant" target="_blank">
            <div className="relative rounded-2xl p-2">
  <svg
    className="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="calc(100% - 2px)"
      height="calc(100% - 2px)"
      rx="16"
      ry="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="12 8"
      className="text-muted-foreground"
    />
  </svg>

  <Image
    src="/github/github-qr.png"
    alt="GitHub QR"
    width={210}
    height={210}
    className="relative rounded-xl"
  />
</div>
          </Link>
        </CardHeader>

        <CardContent className="text-center">
          <h3 className="text-base font-semibold">
            Let&#39;s connect with me on GitHub
          </h3>

          <CardDescription className="mt-2">
            Scan this QR code to visit my GitHub profile and explore my
            projects.
          </CardDescription>
        </CardContent>
      </Card>
    </>
  )
}

export default CardThree
