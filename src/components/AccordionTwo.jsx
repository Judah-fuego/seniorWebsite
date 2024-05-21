import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFooter2() {
  return (
    <Accordion type="single" collapsible className=" ml-3 w-1/6">
      <AccordionItem value="item-1">
        <AccordionTrigger>Biggest Eater</AccordionTrigger>
        <AccordionContent>
          Younice and Caleb
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Best Dance Partners</AccordionTrigger>
        <AccordionContent>
          Jesse and Eliana
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Supposedly "Not a Swifty"</AccordionTrigger>
        <AccordionContent>
          Elise Burt 
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
