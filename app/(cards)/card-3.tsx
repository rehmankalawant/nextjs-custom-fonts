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
            <Image
              src="/github/github-qr.png"
              alt="GitHub QR"
              width={200}
              height={200}
              className="rounded-xl"
            />
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
