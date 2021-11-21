import Head from 'next/head'
import { withUrqlClient } from 'next-urql'
import { Box, Grid, GridItem, Container } from '@chakra-ui/layout'

import client from '../graphql/client'
import Navbar from '../components/Navbar'
import CardBig from '../components/CardBig'
import CardText from '../components/CardText'
import CardMedium from '../components/CardMedium'
import usePostService from '../services/usePostService'

const Home = () => {
  const { posts, loading } = usePostService()

  return (
    <>
      <Navbar />
      <Container py={10} maxW="container.lg">
        <Head>
          <title>Home</title>
        </Head>

        <div>
          {loading ? (
            <p>Loading ...</p>
          ) : (
            posts.map(({ id, title }) => <p key={`posts-${id}`}>{title}</p>)
          )}
        </div>

        {/* <Grid templateColumns="minmax(0, 1fr) 320px" gap="4">
        <GridItem rowSpan={2}>
          <CardBig />
        </GridItem>
        <GridItem>
          <CardText />
        </GridItem>
        <GridItem>
          <CardText />
        </GridItem>
      </Grid>

      <Box mt={4}>
        <CardMedium mb={4} />
        <CardMedium mb={4} />
        <CardMedium mb={4} />
      </Box> */}
      </Container>
    </>
  )
}

export default withUrqlClient(client, { ssr: true })(Home)
