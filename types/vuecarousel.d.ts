declare module 'vue-carousel' {

    import { PluginObject } from 'vue'
    
    interface PluginOptions {
        installComponents?: boolean
        componentsPrefix?: string
      }
    
      const plugin: PluginObject<PluginOptions> & { version: string }
      export default plugin
    }
