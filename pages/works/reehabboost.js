import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Reehabboost">
    <Container>
      <Title>
        Reehab Boost <Badge>2020</Badge>
      </Title>
      <P>
      Control system for physiotherapists.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/isaacgomezr/SistemaDeControlDePacientes">
          https://github.com/isaacgomezr/SistemaDeControlDePacientes <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/reehabboost.png" alt="Reehabboost" />
    </Container>
  </Layout>
)

export default Work
