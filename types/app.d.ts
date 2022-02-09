type ExampleTypeDefinition = 'Hello'
interface Next<T extends Vue = Vue> {
    (to?: (vm: T) => any): void
  }