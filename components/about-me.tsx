import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import { mySkills, type skills } from "@/app/config/skills"
import { Card } from "@/components/ui/card"

const AboutMe = () => {
  return (
    <>
      <Card className="animate-fade-in-blur container m-auto h-fit w-fit max-w-3xl px-4">
        <div>
          <p className="text-sm text-foreground">About</p>
          <h2 className="text-2xl font-bold">Me</h2>
        </div>
        {/* About me */}
        <div className="flex flex-col gap-4 md:flex-row">
          <Image
            src="/github/avatar.png"
            alt="About"
            width={100}
            height={100}
            className="size-60 rounded-md border-2 border-secondary bg-blue-300 dark:bg-yellow-300 grayscale hover:grayscale-0 duration-500"
          />
          <div className="mt-4">
            <h3 className="text-2xl font-bold">Rehman Kalawant</h3>
            <p className="mt-4 text-foreground">
              I&#39;m a Full Stack web developer and Open Source Contributor, I
              love building products to solve real-world problems. I&#39;m
              specialized in building NEXT JS applications.
            </p>
            <p className="mt-8 font-bold text-foreground">Skills</p>
            <div className="flex flex-wrap gap-2">
              {mySkills.map((skill: skills) => (
                <Tooltip key={skill.skillName}>
                  <TooltipTrigger asChild>
                    <div className="mt-4 size-6 hover:cursor-pointer">
                      <Image
                        src={`${skill.svg}`}
                        width={40}
                        height={20}
                        alt="skill"
                        className="grayscale hover:grayscale-0 duration-400"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{skill.skillName}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default AboutMe
