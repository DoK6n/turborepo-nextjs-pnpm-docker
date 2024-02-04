/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_API_MOCKING: string
    readonly AUTH_SECRET: string
    readonly NEXTAUTH_URL: string
  }
}
