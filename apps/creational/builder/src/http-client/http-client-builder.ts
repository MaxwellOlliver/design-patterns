import { HttpClient } from "./http-client";

export class HttpClientBuilder {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = "";
    this.headers = {};
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  setHeaders(headers: Record<string, string>) {
    this.headers = headers;
    return this;
  }

  build() {
    return new HttpClient(this.baseUrl, this.headers);
  }
}
