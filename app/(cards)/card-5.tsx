import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import GithubButton from "@/components/social-buttons/github-button"
import LinkedinButton from "@/components/social-buttons/linkedin-button"
import TwitterButton from "@/components/social-buttons/twitter-button"
import PortfolioButton from "@/components/social-buttons/portfolio-button"

const CardFive = () => {
  return (
    <>
      <Card className="h-fit w-full">
        <Tabs defaultValue="social">
          <TabsList className="mx-auto rounded-xl px-2 py-1">
            <TabsTrigger value="introduction">Introduction</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
          <Separator className="my-2" />
          <TabsContent value="introduction">
            <Accordion
              type="single"
              collapsible
              defaultValue="shipping"
              className="max-w-lg rounded-none border-0 bg-none"
            >
              <AccordionItem value="shipping">
                <AccordionTrigger>Who I am ?</AccordionTrigger>
                <AccordionContent>
                  Hello everyone, I am Abdulrehman Kalawant. Basically I am a
                  React JS Developer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger>What I do for living?</AccordionTrigger>
                <AccordionContent>
                  As I am a React JS Developer I turns the ideas into fast,
                  functional web apps.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent className="px-10" value="experience">
            <div className="flex flex-col gap-2 px-2 text-muted-foreground">
              <p>
                {" "}
                I am a React JS Developer at Jaguar Solutions Pvt Ltd. And
                it&#39;s been more than 8 months I served them.
              </p>
              <p>
                {" "}
                I worked on two major projects there, one of them is a ODR Tool
                (Online Dispute Resolution Tool).
              </p>
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <div className="flex flex-wrap justify-center gap-2 px-4 py-1">
              <Badge>React.JS</Badge>
              <Badge>Next.JS</Badge>
              <Badge>Node.JS</Badge>
              <Badge>Express.JS</Badge>
              <Badge>MySQL</Badge>
              <Badge>Javascript</Badge>
              <Badge>Typescript</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Postman</Badge>
              <Badge>Github</Badge>
            </div>
          </TabsContent>
          <TabsContent
            value="social"
            className="flex flex-wrap justify-center gap-2 space-y-3 py-1"
          >
            <GithubButton />
            <LinkedinButton />
            <TwitterButton />
            <PortfolioButton />
          </TabsContent>
        </Tabs>
      </Card>
    </>
  )
}

export default CardFive
