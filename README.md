![snowplow-logo](.github/media/snowplow_logo.png)

# Example Next.js Ecommerce Store for Snowplow

[![License][license-image]][license]

An example retail & ecommerce store, powered by Next.js and instrumented with partial Snowplow tracking.

## Running locally

1. `npm install`
2. Fill the environment variables required in a local env file. `cp .env.example .env.local`
3. `npm run dev`

## Where to start customising?

There is already some partial Snowplow tracking added to this example Ecommerce store. Here are some file locations that you might like to play around with:

#### src/lib/snowplow/snowplow.ts 
- Update the tracker configuration settings with your own
- Add automatic, out-of-the-box Page Pings, Link Clicks, Button Clicks and Form Tracking

#### src/components/analytics/PageTracker.tsx
- Enable automatic, out-of-the-box tracking with `tracker?.trackPageView();`
- Store the User Id for a logged-in user

#### src/components/home/index.tsx
- Sending your own custom, self-describing event based on a Snowplow schema you define

## Project support

Please note the code in this project is provided for your exploration only, and are not formally supported by Snowplow with Service Level Agreements (SLAs). Solutions accelerators are provided AS-IS and we do not make any guarantees of any kind. Please do not submit a support ticket relating to any issues arising from the use of these projects. The source in this project is provided subject to the license set forth below. All included or referenced third party libraries are subject to the licenses set forth below.

Any issues discovered through the use of this project should be filed as GitHub Issues on the repo. They will be reviewed as time permits, but there are no formal SLAs for support.

## Copyright and license

Example Next.js Ecommerce Store for Snowplow is copyright 2024-present Snowplow Analytics Ltd.

Licensed under the [Apache License, Version 2.0][license] (the "License");
you may not use this software except in compliance with the License.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[license]: https://www.apache.org/licenses/LICENSE-2.0
[license-image]: https://img.shields.io/github/license/snowplow/snowplow-android-tracker
