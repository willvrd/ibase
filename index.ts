// Importa utilidades de Nuxt Kit para crear módulos, agregar imports, plugins y componentes
import { createResolver, defineNuxtModule, addImportsDir, addPlugin, addComponentsDir, extendPages } from '@nuxt/kit'
import pagesConfig from './config/pages'


// Exporta el módulo Nuxt personalizado usando defineNuxtModule
export default defineNuxtModule({
  // Metadatos del módulo
  meta: {
    name: 'ibase' // Nombre del módulo
  },
  // Función setup que se ejecuta al inicializar el módulo
  async setup(_, nuxt) {
    // Crea un resolvedor de rutas relativo al archivo actual
    const { resolve } = createResolver(import.meta.url)
    // Define la ruta al directorio 'runtime' del módulo
    const runtimeDir = resolve('runtime')
    // Crea un alias para que '#ibase' apunte al directorio runtime del módulo
    nuxt.options.alias['#ibase'] = runtimeDir

    // Agrega automáticamente los composables del directorio 'composables' para auto-importarlos
    //addImportsDir(resolve(runtimeDir, 'composables'))

    // Agrega automáticamente las stores del directorio 'stores' para auto-importarlas
    //addImportsDir(resolve(runtimeDir, 'stores'))

    // Agrega automáticamente las utilidades del directorio 'utils' para auto-importarlas
    addImportsDir(resolve(runtimeDir, 'utils'))

    //Podrías agregar un plugin personalizado aquí
    //addPlugin({ src: resolve(runtimeDir, 'plugins/auth-api-fetch'), mode: 'all' })

    // Agrega automáticamente los componentes del directorio 'components' para auto-registrarlos
    addComponentsDir({ path: resolve(runtimeDir, 'components') })

    //Extend pages
    extendPages((pages) => pagesConfig.forEach(
      page => pages.push({ ...page, file: resolve(page.page) })
    ))

    // Extiende la configuración de i18n para registrar los archivos de idiomas del módulo
    nuxt.hook('i18n:registerModule', register => register({
      langDir: resolve('./i18n'), // Directorio de idiomas
      locales: [
        { code: 'en', file: 'en.json' }, // Inglés
        { code: 'es', file: 'es.json' }  // Español
      ]
    }))


  }
})
