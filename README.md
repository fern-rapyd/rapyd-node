# Rapyd Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/rapyd)](https://www.npmjs.com/package/@fern-api/rapyd)

## Documentation

API documentation is available at <https://docs.rapyd.net/build-with-rapyd/reference/api-reference>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-hxrw3s?file=app.ts&view=editor)

```typescript
import { RapydApiClient } from '@fern-api/rapyd';
import { Environment } from "@fern-api/rapyd/environments";

const client = new RapydApiClient({
  environment: Environment.Sandbox,
  auth: {
    accessKey: 'YOUR_KEY',
  },
});

const response = await client.pointOfSale.open({
  otpCode: "abc123",
  posId: "def456",
  phoneNumber: "5551234567"
});

console.log('Received response from Rapyd!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-rapyd/rapyd-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
