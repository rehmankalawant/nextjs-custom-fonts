import { Card } from "@/components/ui/card"
import Image from "next/image"

const CardFour = () => {
  return (
    <>
      <Card className="h-fit w-full">
        <div className="flex flex-col md:flex-row">
          {/* Profile Section */}
          <div className="flex shrink-0 flex-col items-center justify-center gap-3 border-b p-2 md:w-72 md:border-r md:border-b-0">
            <Image
              src="/mithila_palkar.jpg"
              alt="Mithila Palkar"
              width={220}
              height={180}
              className="rounded-2xl object-cover"
            />

            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight">
                Mithila Palkar
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Acclaimed Indian Actress & Singer
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8">
            <h3 className="mb-4 text-lg font-semibold">About</h3>

            <p className="leading-7 text-muted-foreground">
              Mithila Palkar is an acclaimed Indian actress&#34; singer&#34; and
              digital creator known for her work in Hindi and Marathi
              entertainment. She gained widespread recognition through her viral
              Marathi &#34;cup song&#34; rendition and further established
              herself with standout performances in popular web series such as
              <span className="font-medium text-foreground">
                {" "}
                Little Things{" "}
              </span>
              and
              <span className="font-medium text-foreground">
                {" "}
                Girl in the City
              </span>
              .
            </p>
          </div>
        </div>
      </Card>
    </>
  )
}

export default CardFour
