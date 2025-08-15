import { test } from "@playwright/test";
enum Environment{
    LOCAL = "LOCAL",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}

function runTests(env: Environment): void{
    console.log(`the environment against which the tests are running ${env}`)

}
runTests(Environment.LOCAL)
runTests(Environment.DEVELOPMENT)
runTests(Environment.STAGING)
runTests(Environment.PRODUCTION)
