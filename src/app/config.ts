import dotenv, { DotenvParseOutput } from 'dotenv'

const result = dotenv.config({
  path: process.env.APP_ENV === 'test' ? '.env.testing' : '.env'
})

if (result.error) {
  throw result.error
}

export class Config {
  private envs: DotenvParseOutput;

  constructor () {
    const { parsed: envs } = result
    this.envs = envs as DotenvParseOutput
  }

  get (attribute: string): string {
    return this.envs[attribute]
  }

  all (): DotenvParseOutput {
    return this.envs
  }
}

export default new Config()
