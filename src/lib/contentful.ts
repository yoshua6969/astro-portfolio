import contentful from 'contentful'

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID, // ID del espacio Contentful
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN // Si es un entorno de desarrollo, se usa el token de previsualización
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN 
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN, // Si no es desarrollo, se usa el token de entrega
  host: import.meta.env.DEV 
    ? 'preview.contentful.com' // Si es entorno de desarrollo, se conecta al host de preview
    : 'cdn.contentful.com', // En producción, se conecta al host de contenido
})
