import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"

const CardTwo = () => {
  return (
    <>
      <>
        <Card className="h-fit w-full">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose which email and push alerts you want to receive.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <FieldSet>
              <FieldGroup className="gap-4">
                <Field orientation="horizontal" className="items-start gap-3">
                  <Checkbox
                    id="transaction-alerts"
                    name="transaction-alerts"
                    defaultChecked
                  />

                  <Field orientation="vertical" className="gap-1">
                    <FieldLabel
                      htmlFor="transaction-alerts"
                      className="font-normal"
                    >
                      Transaction alerts
                    </FieldLabel>

                    <p className="text-sm text-muted-foreground">
                      Deposits, withdrawals, and transfers.
                    </p>
                  </Field>
                </Field>

                <Field orientation="horizontal" className="items-start gap-3">
                  <Checkbox
                    id="security-alerts"
                    name="security-alerts"
                    defaultChecked
                  />

                  <Field orientation="vertical" className="gap-1">
                    <FieldLabel
                      htmlFor="security-alerts"
                      className="font-normal"
                    >
                      Security alerts
                    </FieldLabel>

                    <p className="text-sm text-muted-foreground">
                      Login attempts, password changes, and suspicious activity.
                    </p>
                  </Field>
                </Field>

                <Field orientation="horizontal" className="items-start gap-3">
                  <Checkbox id="goal-milestones" name="goal-milestones" />

                  <Field orientation="vertical" className="gap-1">
                    <FieldLabel
                      htmlFor="goal-milestones"
                      className="font-normal"
                    >
                      Goal milestones
                    </FieldLabel>

                    <p className="text-sm text-muted-foreground">
                      Progress updates when you reach savings goals.
                    </p>
                  </Field>
                </Field>

                <Field orientation="horizontal" className="items-start gap-3">
                <Checkbox id="market-updates" name="market-updates" />

                <Field orientation="vertical" className="gap-1">
                  <FieldLabel htmlFor="market-updates" className="font-normal">
                    Market updates
                  </FieldLabel>

                  <p className="text-sm text-muted-foreground">
                    News and trends related to your investments.
                  </p>
                </Field>
              </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
          <Button size="sm" className="mx-4">
            Save Preferences
          </Button>
        </Card>
      </>
    </>
  )
}

export default CardTwo
