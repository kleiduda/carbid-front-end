import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How do I get a quote for my car?",
    answer:
      "Simply fill out our online form with your vehicle details including year, make, model, and condition. You'll receive an instant quote within minutes. You can also call us directly at (123) 456-7890 for immediate assistance.",
  },
  {
    question: "What types of vehicles do you buy?",
    answer:
      "We buy all makes and models of vehicles, regardless of condition. Whether your car is running or not, damaged, or has high mileage, we're interested. This includes sedans, SUVs, trucks, vans, and luxury vehicles.",
  },
  {
    question: "How quickly can I sell my car?",
    answer:
      "The entire process can be completed in as little as 24-48 hours. Once you accept our offer, we'll schedule a convenient pickup time, inspect the vehicle, and pay you on the spot. Many customers complete the sale the same day.",
  },
  {
    question: "Is the quote I receive guaranteed?",
    answer:
      "Yes! The quote we provide is guaranteed and won't change as long as the vehicle condition matches the information you provided. We pride ourselves on transparent, no-hassle pricing with no hidden fees.",
  },
  {
    question: "Do I need to pay for towing?",
    answer:
      "No, absolutely not. We offer free towing and pickup services anywhere within our service area. We'll come to your home, office, or any convenient location at no cost to you.",
  },
  {
    question: "What documents do I need to sell my car?",
    answer:
      "You'll need your vehicle title (pink slip), a valid government-issued ID, and any loan payoff information if applicable. We'll help you with all the DMV paperwork and title transfer documentation.",
  },
  {
    question: "How do I receive payment?",
    answer:
      "Payment is made immediately upon vehicle pickup. We offer several payment methods including cash, certified check, or direct bank transfer, depending on your preference and the transaction amount.",
  },
  {
    question: "What if I still owe money on my car?",
    answer:
      "Not a problem! We can work with you even if you have an outstanding loan. We'll pay off the lien directly to your lender and give you the difference. If you owe more than the car's value, we'll discuss your options.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything
            you need to know about selling your car with Car
            Bid.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}