import { HttpClient } from "./http-client/http-client";
import { HttpClientBuilder } from "./http-client/http-client-builder";

const builder = new HttpClientBuilder();
const client: HttpClient = builder
  .setBaseUrl("https://api.github.com")
  .setHeaders({
    "Content-Type": "application/json",
  })
  .build();

const response = await client.get("/users/MaxwellOlliver");
console.log(response);
