import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Plan = () => {
  return (
    <div>
      <Box p="40px">
        <Heading>Supercharge your teamwork. Start free.</Heading>
        <Text p="20px" color="grey">Unlimited boards and workflows. No credit card needed.</Text>
        <Button
                  rightIcon={<ArrowForwardIcon />}
                  color="white"
                  variant="solid"
                  backgroundColor="#5034ff"
                  _hover={{ borderColor: "white", border: "2px" }}
                >
                  Go to my account
                  
                </Button>
      </Box>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)">
          <Card>
            <CardBody>
              <VStack>
                <Text> <b>Individual</b></Text>
                <HStack>
                  <Text fontSize="4xl"> <b>$0</b>  </Text>
                  <Text color="grey">free forever</Text>
                </HStack>

                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Up to 2 seats</b></Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text color="grey">For individuals looking to keep track of their work</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Individual plan includes:</b> </Text>
                <Text fontSize="sm" color="grey">Up to 3 boards</Text>
                <Text fontSize="sm" color="grey">Unlimited docs</Text>
                <Text fontSize="sm" color="grey">200+ templates</Text>
                <Text fontSize="sm" color="grey">Over 20 column types</Text>
                <Text fontSize="sm" color="grey">Up to 2 team members</Text>
                <Text fontSize="sm" color="grey">iOS and Android apps</Text>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack>
                <Box h="17px" mt="-20px"  backgroundColor="#0085ff">
                  <Text h="1px" pb="10px" color="#0085ff">eeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text></Box>
                <Text><b>Basic</b></Text>
                <HStack>
                  <Text fontSize="4xl"> <b>$8</b> </Text>
                  <Text color="grey">seat/month</Text>
                </HStack>

                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Total $24 / month</b> </Text>
                <Text color="grey" fontSize="sm">Billed annually</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text color="grey"> Manage all your teams’ work in one place</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Includes Individual, plus:</b></Text>
                <Text fontSize="sm" color="grey">Unlimited free viewers</Text>
                <Text fontSize="sm" color="grey">Unlimited items</Text>
                <Text fontSize="sm" color="grey">5 GB file storage</Text>
                <Text fontSize="sm" color="grey">Prioritised customer support</Text>
                <Text fontSize="sm" color="grey">Create a dashboard based on 1 board</Text>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack>
              <Box h="17px" mt="-20px"  backgroundColor="#00ca72">
                  <Text h="1px" pb="10px" color="#00ca72">eeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text></Box>
                <Text><b>Standard</b></Text>
                <HStack>
                  <Text fontSize="4xl"> <b>$10</b></Text>
                  <Text color="grey">seat/month</Text>
                </HStack>

                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Total $30 / month</b></Text>
                <Text  color="grey" fontSize="sm">Billed annually</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text color="grey">Collaborate and optimize your team processes</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Includes Basic, plus:</b></Text>
                <Text fontSize="sm" color="grey">Timeline & Gantt views</Text>
                <Text fontSize="sm" color="grey">Calendar view</Text>
                <Text fontSize="sm" color="grey">Guest access</Text>
                <Text fontSize="sm" color="grey">Automations (250 actions per month)</Text>
                <Text fontSize="sm" color="grey">Integrations (250 actions per month)</Text>
                <Text fontSize="sm" color="grey">Create a dashboard that combines up to 5 boards</Text>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack>
              <Box h="17px" mt="-20px"  backgroundColor="#2b2c5d">
                  <Text h="1px" pb="10px" color="#2b2c5d">eeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text></Box>
                <Text><b>Pro</b></Text>
                <HStack>
                  <Text fontSize="4xl"> <b>$16</b></Text>
                  <Text color="grey">seat/month</Text>
                </HStack>

                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Total $48 / month</b></Text>
                <Text color="grey" fontSize="sm">Billed annually</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text color="grey">Streamline and run your teams’ complex workflows</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text > <b>Includes Standard, plus:</b></Text>
                <Text fontSize="sm" color="grey">Private boards and docs</Text>
                <Text fontSize="sm" color="grey">Chart view</Text>
                <Text fontSize="sm" color="grey">Time tracking</Text>
                <Text fontSize="sm" color="grey">Formula column</Text>
                <Text fontSize="sm" color="grey">Dependency column</Text>
                <Text fontSize="sm" color="grey">Automations (25,000 actions per month)</Text>
                <Text fontSize="sm" color="grey">Integrations (25,000 actions per month)</Text>
                <Text fontSize="sm" color="grey">Create a dashboard that combines up to 10 boards</Text>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack>
              <Box h="17px" mt="-20px"  backgroundColor="#a25ddc">
                  <Text h="1px" pb="10px" color="#a25ddc">eeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text></Box>
                <Text><b>Enterprise</b></Text>
                <Image src="https://monday.com/static/img/pricing/contact_us_plan_enterprise.png" />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text color="grey">For organizations seeking enterprise-grade features</Text>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Text> <b>Includes Pro, plus:</b></Text>
                <Text fontSize="sm" color="grey">Enterprise-scale Automations & Integrations</Text>
                <Text fontSize="sm" color="grey">Enterprise-grade security & governance</Text>
                <Text fontSize="sm" color="grey">Advanced reporting & analytics</Text>
                <Text fontSize="sm" color="grey">Multi-level permissions</Text>
                <Text fontSize="sm" color="grey">Tailored onboarding</Text>
                <Text fontSize="sm" color="grey">Premium support</Text>
                <Text fontSize="sm" color="grey">Create a dashboard that combines up to 50 boards</Text>
                
              </VStack>
            </CardBody>
          </Card>
        </Grid>
      </Box>
      <Box maxW="900px" margin="auto">
        <Grid
          mt="100px"
          mb="100px"
          gap={7}
          templateColumns={{
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(5, 1fr)",
            base: "repeat(3, 1fr)",
          }}
        >
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"
            alt="hulu"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"
            alt="bd"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"
            alt="canva"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png"
            alt="nhl"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"
            alt="cocacola"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png"
            alt="hubspot"
          />
          <Image
            w="100px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png"
            alt="ea"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png"
            alt="nautika"
          />
          <Image
            w="150px"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"
            alt="universal"
          />
        </Grid>
      </Box>
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px"  as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
                <Box h="50px" as="span" flex="1" textAlign="left">
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
      <Box></Box>
    </div>
  );
};

export default Plan;
