import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'lqf7dvka',
    dataset: 'production',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2022-04-05', // use current date (YYYY-MM-DD) to target the latest API version
  })

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client
