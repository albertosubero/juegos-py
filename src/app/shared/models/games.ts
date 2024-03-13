export interface GameModel {
  Title: string,
  Md5: string,
  Description: string,
  Instructions: string,
  Type: string,
  SubType: string,
  Mobile: string,
  MobileMode: null,
  Height: number,
  Width: number,
  Https: boolean,
  Status: number,
  Url: string,
  Asset: string[],
  Category: string[],
  Tag: string[],
  Bundle: []
}