import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ButtonGroup } from "@/components/ui/button-group"
import { ChevronUp, Search } from "lucide-react"

const CardOne = () => {
  return (
    <>
      <div className="mt- ms-auto h-fit w-1/4 max-w-[29%]">
        <Card className="p-5">
          {/* 1 */}
          <div className="flex justify-start gap-2">
            <Button size="sm" variant="default">
              Button
            </Button>
            <Button size="sm" variant="secondary">
              Secondary
            </Button>
            <Button size="sm" variant="outline">
              Outline
            </Button>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <Input type="search" placeholder="Search..." className="pr-9" />

              <Search className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
            </div>
            <Textarea placeholder="Message"></Textarea>
          </div>
          {/* 3 */}
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Badge variant="default">Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
            <div>
              <RadioGroup
                defaultValue="comfortable"
                className="flex w-fit items-center gap-3"
              >
                <RadioGroupItem value="default" id="r1" />{" "}
                <RadioGroupItem value="comfortable" id="r2" />
                <Checkbox
                  id="terms-checkbox"
                  defaultChecked
                  name="terms-checkbox"
                />
                <Switch id="airplane-mode" />
              </RadioGroup>
            </div>
          </div>
          {/* 4 */}
          <div className="flex justify-between">
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="outline">
                    Alert Dialog
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="w-xs">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Allow accessory to connect ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Do you want to allow the USB accessory to connect to this
                      device and your data?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex items-center gap-3">
                    <AlertDialogCancel className="flex-1">
                      Don&#39;t allow
                    </AlertDialogCancel>

                    <AlertDialogAction className="flex-1">
                      Allow
                    </AlertDialogAction>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div>
              <ButtonGroup>
                <Button size="sm" variant="outline">
                  Button Group
                </Button>
                <Button size="sm" variant="outline">
                  <ChevronUp />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default CardOne