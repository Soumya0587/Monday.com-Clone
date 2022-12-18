import { Box, Grid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <div >
        <Box pt="100px" pb="100px">
        <Grid templateColumns='repeat(6, 1fr)'>
            <VStack>
                <Text fontSize='sm' color="grey">Pricing</Text>
                <Text fontSize='sm' color="grey">Contact us</Text>
                <Text fontSize='sm' color="grey">Templates</Text>
                <Text fontSize='sm' color="grey">SMB</Text>
                <Text fontSize='sm' color="grey">Enterprise</Text>
                <Text fontSize='sm' color="grey">Nonprofits</Text>
                <Text fontSize='sm' color="grey">Apps marketplace</Text>
                <Text fontSize='sm' color="grey">24/7 support</Text>
            </VStack>
            <VStack>
                <Text fontSize='sm' color="grey">Features</Text>
                <Text fontSize='sm' color="grey">Docs</Text>
                <Text fontSize='sm' color="grey">Integrations</Text>
                <Text fontSize='sm' color="grey">Automations</Text>
                <Text fontSize='sm' color="grey">Files</Text>
                <Text fontSize='sm' color="grey">Dashboards</Text>
                <Text fontSize='sm' color="grey">Kanban</Text>
                <Text fontSize='sm' color="grey">Gantt</Text>
            </VStack>
            <VStack>
                <Text fontSize='sm' color="grey">monday products</Text>
                <Text fontSize='sm' color="grey">monday work management</Text>
                <Text fontSize='sm' color="grey">monday sales CRM</Text>
                <Text fontSize='sm' color="grey">monday marketer</Text>
                <Text fontSize='sm' color="grey">monday projects</Text>
                <Text fontSize='sm' color="grey">More by monday.com</Text>
                <Text fontSize='sm' color="grey">Canvas</Text>
                <Text fontSize='sm' color="grey">WorkForms</Text>
            </VStack>
            <VStack>
                <Text fontSize='sm' color="grey">Use cases</Text>
                <Text fontSize='sm' color="grey">Marketing</Text>
                <Text fontSize='sm' color="grey">Project management</Text>
                <Text fontSize='sm' color="grey">Sales</Text>
                <Text fontSize='sm' color="grey">Developers</Text>
                <Text fontSize='sm' color="grey">HR</Text>
                <Text fontSize='sm' color="grey">IT</Text>
                <Text fontSize='sm' color="grey">Operations</Text>
            </VStack>
            <VStack>
                <Text fontSize='sm' color="grey">Company</Text>
                <Text fontSize='sm' color="grey">About us</Text>
                <Text fontSize='sm' color="grey">Careers - We're hiring!</Text>
                <Text fontSize='sm' color="grey">monday-U</Text>
                <Text fontSize='sm' color="grey">Press</Text>
                <Text fontSize='sm' color="grey">Customer stories</Text>
                <Text fontSize='sm' color="grey">Become a partner</Text>
                <Text fontSize='sm' color="grey">Sustainability & ESG</Text>
                <Text fontSize='sm' color="grey">Affiliates</Text>
                <Text fontSize='sm' color="grey">Digital Lift</Text>
                <Text fontSize='sm' color="grey">Investor relations</Text>
            </VStack>
            <VStack>
                <Text fontSize='sm' color="grey">Resources</Text>
                <Text fontSize='sm' color="grey">Help Center</Text>
                <Text fontSize='sm' color="grey">Community</Text>
                <Text fontSize='sm' color="grey">Blog</Text>
                <Text fontSize='sm' color="grey">Webinars</Text>
                <Text fontSize='sm' color="grey">Startup for startup</Text>
                <Text fontSize='sm' color="grey">Global events</Text>
                <Text fontSize='sm' color="grey">App development</Text>
                <Text fontSize='sm' color="grey">Find a partner</Text>
                <Text fontSize='sm' color="grey">Compare</Text>
                
            </VStack>
        </Grid>
        </Box>
        
    </div>
  )
}

export default Footer