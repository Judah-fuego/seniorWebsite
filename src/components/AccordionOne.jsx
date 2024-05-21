import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFooter1() {
  return (
    <Accordion type="single" collapsible className=" ml-3 w-1/6">
      <AccordionItem value="item-1">
        <AccordionTrigger>Who is the fairest of them all?</AccordionTrigger>
        <AccordionContent>
          Ye An Kim
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Best Style?</AccordionTrigger>
        <AccordionContent>
          Nora Oh
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Best Eyes?</AccordionTrigger>
        <AccordionContent>
          Judah Boyce
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
