import { Mutation, State, Getter } from 'vuex-simple'

export class BarModule {
  @State()
  public counter: number = 10;

  @Getter()
  public get double() {
    return this.counter * 2;
  }

  @Mutation()
  public increment() {
    this.counter++;
  }

  @Mutation()
  public incrementBy(nb: number) {
    this.counter += nb;
  }

  public async asyncIncrement() {
    await new Promise(r => setTimeout(r, 500));
    // call mutation function like you would any other function
    this.increment();
  }
}
