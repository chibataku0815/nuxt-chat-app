export interface MSetHogePayload {
  hoge: int;
  additionalHoge: int;
}
export interface AUpdateHogePayload {
  hoge: int;
}

export class SampleModule {
  @State() public hoge: int = 3;
  @Mutation()
  public setHoge(payload: MSetHogePayload) {
    this.hoge = payload.hoge + payload.additionalHoge;
  }
  @Action()
  public async updateHoge(payload: AUpdateHogePayload) {
    await new Promise(r => setTimeout(r, 200));
    this.setHoge({ hoge: payload.hoge, additionalHoge: 100 });
  }
}
