import Head from 'next/head'
import { withUrqlClient } from 'next-urql'
import { Spinner } from '@chakra-ui/spinner'
import { Center, Flex, Heading, Stack } from '@chakra-ui/layout'

import client from '../graphql/client'
import Layout from '../components/Layout'
import CardMedium from '../components/CardMedium'
import usePostService from '../services/usePostService'
import { Button } from '@chakra-ui/button'

const Home = () => {
  const { posts, hasMore, loading, loadMorePosts } = usePostService()

  return (
    <>
      <Layout py={10} maxW="container.lg">
        <Head>
          <title>Home</title>
        </Head>

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
        </Grid> */}

        {!loading && posts ? (
          <Flex flexDir="column">
            <Stack mb={4} spacing={4}>
              {posts.map((post) => (
                <CardMedium key={`cardmedium-${post.id}`} post={post} />
              ))}
            </Stack>
            {hasMore ? (
              <Button onClick={loadMorePosts} variant="outline" mx="auto">
                Load more
              </Button>
            ) : null}
          </Flex>
        ) : (
          <Center>
            <Flex flexDir="column">
              <Spinner mx="auto" mb={5} size="xl" />
              <Heading>Loading...</Heading>
            </Flex>
          </Center>
        )}
      </Layout>
    </>
  )
}

export default withUrqlClient(client, { ssr: true })(Home)
