import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import blog_1 from '../public/images/contents/programatuvida_blog_1.png'
import blog_2 from '../public/images/contents/programatuvida_blog_2.png'
import blog_3 from '../public/images/contents/programatuvida_blog_3.png'
import blog_4 from '../public/images/contents/programatuvida_blog_4.png'
import blog_5 from '../public/images/contents/programatuvida_blog_5.png'
import blog_6 from '../public/images/contents/programatuvida_blog_6.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="API Node JS"
            thumbnail={blog_1}
            href="https://programatuvida.com/crear-api-nodejs"
          />
          <GridItem
            title="Crear un blog con angular"
            thumbnail={blog_2}
            href="https://programatuvida.com/crea-un-blog-con-angular-y-mongodb-parte-1"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Crea tu primer aplicación web angular"
            thumbnail={blog_3}
            href="https://programatuvida.com/crea-tu-primer-aplicacion-web-angular"
          />
          <GridItem
            title="La mejor forma de obtener permisos Android"
            thumbnail={blog_4}
            href="https://programatuvida.com/la-mejor-forma-de-obtener-los-permisos-de-android"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Crear App React Native - 1"
            thumbnail={blog_5}
            href="https://programatuvida.com/crear-primer-app-react-native-parte-1"
          />
          <GridItem
            title="Crear App React Native - 2"
            thumbnail={blog_6}
            href="https://programatuvida.com/crear-primer-app-react-native-parte-2"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
