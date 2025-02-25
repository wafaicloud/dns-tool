# Community DNS Tools

A set of browser-based DNS tools for WafaiCloud.

---

<a href="https://www.digitalocean.com/community/tools/dns">
    <img src="src/static/dns-lookup.svg" alt="" align="left" width="150"/>
</a>

## DNS Lookup

A simple browser-based tool to perform DNS lookups. Type a domain, search, and instantly get results.

### [➡️ Use now](https://www.digitalocean.com/community/tools/dns)

---

<a href="https://www.digitalocean.com/community/tools/spf">
    <img src="src/static/spf-explainer.svg" alt="" align="left" width="150"/>
</a>

## SPF Explainer

A tool that explains a domain's SPF records. Search a domain and either explore its records or evaluate an IP for mail sending.

### [➡️ Use now](https://www.digitalocean.com/community/tools/spf)

## Development/Building

To setup the build/develop environment, you will need to run `npm i` with Node 12+ installed. This will install the
 dependencies to allow you to build the project.

To develop for the DNS tool run `npm run dev:tools:dns-lookup`, and to develop for the SPF explainer run
 `npm run dev:tools:spf-explainer`.\
This will start a development server that will automatically reload the codebase when changes occur.

If you wish to host these tools on a service, simply run `npm run build`. This will run all the necessary build scripts
 automatically to build all the tools present in the source folder.\
You can then take the `dist` folder and put it on your web server/bucket. The `dist` folder will contain the folders
 `dns-lookup` and `spf-explainer` which will each have their respective tools inside.

GitHub Actions is setup to do this automatically for this repository to deploy to gh-pages.
It is also configured to deploy each PR commit to DigitalOcean Spaces for PR previews.

## Source Structure

### [`src`](./src)

All the source for the tools is located within the [`src`](./src) directory.

In this directory, there is the [`src/shared`](./src/shared) directory which contains centralised assets and source for
 the tools, such as the main Community styling which is located in [`src/shared/scss`](./src/shared/scss) and the
 generic templates used by all tools in [`src/shared/templates`](./src/shared/templates).
 
Within this directory are also the main tool source directories ([`src/dns-lookup`](./src/dns-lookup) &
 [`src/spf-explainer`](./src/spf-explainer)).\
These directories contain the specific source for that tool, which includes custom templates and style inheritance from
 the centralised styles.

Anything that is data which is used in a tool should be stored in `src/<tool name>/data`.
Any helper functions should be stored in `src/<tool name>/utils`.
Vue templates should be stored in `src/<tool name>/templates` with a name that makes sense for what it does.
The `src/<tool name>/index.html` file should only be used to handle basic head information and initialise the app.
 
### [`build`](./build)

The [`build`](./build) directory contains all the scripts needed to successfully build the tools into a minimal number
 of assets.
 
[`build/cleanDist.js`](./build/cleanDist.js) is a simple script that creates the `dist` directory if it does not exist
 and then ensures that it is completely empty so that the build script has a fresh beginning.

[`build/fetchTemplate.js`](./build/fetchTemplate.js) handles pulling down the blank DigitalOcean Community template
 page, converting it to be a PostHTML-Extend template and save it to `build/base.html`.

[`build/buildSVGs.js`](./build/buildSVGs.js) takes all SVG files located in [`src/shared/assets`](./src/shared/assets)
 and converts them to JS strings (saved to `build/svg/<name>.svg.js`) that allow Vue/Parcel to include the SVGs inline.

[`build/buildTool.js`](./build/buildTool.js) is the main script file for the build process a tool in [`src`](./src).
This builds out the `mount.js` file first, then compiles the `scss/style.scss` file to `style.css`, both using Parcel.
Finally, the script uses PostHTML to bundle the `index.html` file, making use of the generate DigitalOcean Community
 template at `build/base.html`.

## Contributing

If you are contributing, please read the [contributing file](CONTRIBUTING.md) before submitting your pull requests.

## Thanks

Thanks to [Cloudflare](https://cloudflare.com) for their great WHOIS/DNS-over-HTTPS APIs.
You can learn more about the importance of DNS-over-HTTPS and how to use it [here](https://developers.cloudflare.com/1.1.1.1/dns-over-https/).

Thanks to [Matthew Gall](https://twitter.com/matthewgall) for his wonderful [WHOIS API.](https://whoisjs.com/)
