import {
    Box,
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Pagos Valle">
      <Container>
        <Title>
        Pagos Valle <Badge>2019</Badge>
        </Title>
        <P>
        Tool that processes payments with bank cards for goods or services granted by universities and colleges, consults and updates user debts in the administrative platform with the result of the operation.
        </P>
        <UnorderedList my={4}>
          <ListItem>Valle de Méxicali</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS / Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native, Javascript, Java</span>
          </ListItem>
        </List>
  
        <Box align="center" my={6}>
          <Link
            className="link-appstore"
            href="https://apps.apple.com/app/id1528047578"
            target="_blank"
          >
            <Image
              maxW={240}
              src="/images/works/appstore.png"
              className="image-appstore"
              alt="Download on App Store"
            />
          </Link>
        </Box>

        <Box align="center" my={6}>
          <Link
            className="link-android"
            href="https://play.google.com/store/apps/details?id=com.prosepago.com.pagosvalle"
            target="_blank"
          >
            <Image
              maxW={240}
              src="/images/works/playstore.png"
              className="image-appstore"
              alt="Download on Play Store"
            />
          </Link>
        </Box>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/pagosvalle_1.png" alt="Psm Escolar" />
          <WorkImage src="/images/works/pagosvalle_2.png" alt="Psm Escolar" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  