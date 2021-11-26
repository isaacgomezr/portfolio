import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Programatuvida">
    <Container>
      <Title>
        Programa tu vida <Badge>2021 -</Badge>
      </Title>
      <P>
      Software development blog to help developers engage with technology stuff.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://programatuvida.com/">
          https://programatuvida.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Wordpress</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://programatuvida.com/">
            Programatuvida.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/programatuvida.png" alt="Programatuvida" />
      <WorkImage src="/images/works/programatuvida_1.png" alt="Programatuvida screen" />
    </Container>
  </Layout>
)

export default Work
