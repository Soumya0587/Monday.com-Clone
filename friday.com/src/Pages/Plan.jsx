import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Plan = () => {
  return (
    <div>
      <Box backgroundColor="#f9f9f9" p="150px">
        <Heading mb="50px" mt="50px">
          Frequently Asked Questions
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box h="50px" as="span" flex="1" textAlign="left">
                  Is there a free version of monday.com?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes! Our Individual Plan is for independent professionals looking
              to keep track of their tasks and work. If you are interested in
              using only the most essential features of monday.com, this is the
              plan for you!
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How much does monday.com cost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              monday.com starts from $24 per month for 3 users and goes up from
              there based on your chosen plan and team size. If you are over 40
              users, you can request a quote to get an exact price
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Can you pay for monday.com monthly?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, you can pay monthly for your account. Choose the monthly
              option on the pricing page and you will be able to pay on a per
              month basis. The monthly plan is not discounted so if you are
              looking to save, we recommend the yearly plan.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Which pricing plan is right for me?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We understand that each organization is unique, requiring specific
              features to support its workflows and projects. Above you can see
              the features included in the different plans to support your
              needs. If you need help in choosing the right plan for you, check
              out this article or reach out to our sales team.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How does our pricing work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Our pricing is based on 2 variables: the feature plan you’d like
              to use, and the number of users on the platform. Once you’ve
              decided on the feature plan and users, choose your preferred
              subscription payment: month-to-month or annual. Payment is made in
              one upfront installment (so if you purchase a plan for one year,
              you will pay for one year upfront).
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What if I change my mind?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              If you’ve paid for a yearly subscription in the last 30-days, and
              need to cancel your account, you are entitled to a prorated
              refund. We will automatically refund you the remaining balance
              from your original purchase. Simply cancel the account from the
              Admin section, and your account will be automatically refunded. If
              you have any questions, you can always reach out to
              support@monday.com
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Do you offer any discounted plans?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, through choosing a yearly plan, you will receive an 18%
              discount.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Does monday.com offer plans for students?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, our Student Program offers great opportunities and options
              for students and student organizations who would like to implement
              monday.com in their classes. University/college students, student
              organisations, fraternities, and sororities can all join the
              student programs.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Does monday.com offer plans to nonprofits and NGOs?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              monday.com is a proud supporter of organizations that do great
              things around the world. That’s why we offer discounted pricing
              for qualified nonprofit organisations. Click here to find out more
              about our nonprofit plan and pricing.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How can I manage my billing?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              If you are an admin of your account, you can access your purchase
              history, invoices, payment details, plan type, and more. Learn how
              to manage your billing details here.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Can I change my plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              You can make changes to your plan at any time by changing your
              plan type and adding and removing users (Note that post the refund
              period, we offer no refunds for downgrades). To change your plan,
              simply go into the Admin section and click on the Billing option.
              From there, click on 'change plan', pick the desired plan, and
              enjoy!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How secure is monday.com?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The security of our customer’s data is our top priority.
              monday.com is built with strict security requirements and
              protocols to secure your data, such as ISO/IEC 27001 and ISO/IEC
              27018, and is undergoing annual security audits and assessments.
              We use high physical, procedural, and technical security measures
              to preserve the integrity and security of your data, as well as
              adhering to the strictest data protection laws.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What payment methods do you accept?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We accept the following payment methods: All the major credit
              cards (excluding debit cards) - Visa, Master Card, American
              Express, Discover, Diners Club, JCB, Carte Bleue, Union Pay. You
              can also purchase your monday.com subscription with PayPal. (Note
              this may be subject to change depending on your location.) We
              accept invoices for Enterprise orders that meet a minimum fee -
              Feel free to reach out to support@monday.com for more information.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Do you have mobile apps?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, the platform is available on both IOS and Android devices.
              You can download them on the Apple or Google Play Stores. Learn
              more here.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>

      </Box>
    </div>
  );
};

export default Plan;
