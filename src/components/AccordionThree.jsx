import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFooter3() {
  return (
    <Accordion className="p-2 border-3 ml-3 w-1/6" type="single" collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger>Certified Lover Boy/Girl</AccordionTrigger>
        <AccordionContent>
          Finn and Stefi
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Best Duo</AccordionTrigger>
        <AccordionContent>
          Jo and Yohan
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Actor/Actress</AccordionTrigger>
        <AccordionContent>
          Ethan and YouKyung
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
