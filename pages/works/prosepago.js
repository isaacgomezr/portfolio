import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Prosepago">
    <Container>
      <Title>
        Prosepago <Badge>2018 -</Badge>
      </Title>
      <P>
      Since 2011 we have developed our technological platform innovating in the payment method market. We have advanced technologically, creating secure tools, providing practical solutions that make the means of collection more efficient. We have grown as a company facing the needs on the battlefield close to the clients, attending to real problems. With the collection tools we provide, our clients work oriented towards what they know how to do well, sell! And our support for this work is to ensure that the alternative of charging with bank cards does not represent in any way a difficulty or a risk.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.prosepago.com/">
          https://www.prosepago.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>.NET, Javascript, SQL</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://programatuvida.com/">
            Programatuvida.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/prosepago_1.png" alt="Prosepago" />
      <WorkImage src="/images/works/prosepago_2.png" alt="Prosepago" />
    </Container>
  </Layout>
)

export default Work
