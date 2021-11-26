import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbProsepago from '../public/images/works/prosepago_web.png'
import thumbReehab from '../public/images/works/reehabboost.jpg'
import thumbProgramatuvida from '../public/images/works/programatuvida.png'
import thumbPSM from '../public/images/works/psmescolar_pantalla.png'
import thumbPagosValle from '../public/images/works/pagosvalle_pantalla.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="prosepago" title="Prosepago" thumbnail={thumbProsepago}>
            A financial enterprise that provides bank terminals to differente companies.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Reehabboost"
            title="ReehabBoost"
            thumbnail={thumbReehab}
          >
            Control system for physiotherapists
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="programatuvida"
            title="Programa tu vida"
            thumbnail={thumbProgramatuvida}
          >
            Software development blog to help developers engage with technology stuff.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Mobile Apps
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="psmescolar"
            thumbnail={thumbPSM}
            title="Psm Escolar"
          >
            Tool that processes payments with bank cards
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="pagosvalle"
            thumbnail={thumbPagosValle}
            title="Pagos Valle"
          >
            Tool that processes payments with bank cards for Valle De Mexicali
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
