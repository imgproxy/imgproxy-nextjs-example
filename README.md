# Next.js + imgproxy example

This is a simple example of how to use imgproxy for image processing in a Next.js application. This repository contains several branches, each demonstrating different approaches to integrating imgproxy with Next.js:

- [basic-example](https://github.com/imgproxy/imgproxy-nextjs-example/tree/basic-example): A basic setup containing an image loader allowing Next.js to generate imgproxy URLs for the `<Image>` component.
- [presets-only-example](https://github.com/imgproxy/imgproxy-nextjs-example/tree/presets-only-example): A more secure setup that uses imgproxy in presets-only mode.
- [server-component-example](https://github.com/imgproxy/imgproxy-nextjs-example/tree/server-component-example): An advanced setup that unleashes the full power of imgproxy by using a custom `<Imgproxy>` server component.

Read our [blog post](https://imgproxy.net/blog/image-optimization-for-nextjs-with-imgproxy) for more details.

## Launching the example

First, create the `.env.local` file in the root of the project with the following content:

```env
IMGPROXY_KEY=736563726574
IMGPROXY_SALT=68656C6C6F
```

Next, you need imgproxy running. The easiest way to do this is to use Docker:

```bash
docker run --rm \
  -p 8080:8080 \
  -e IMGPROXY_WATERMARK_DATA=$(base64 public/watermark.svg | tr -d '\n') \
  --env-file=.env.local \
  -it ghcr.io/imgproxy/imgproxy:latest
```

And finally, run the Next.js application:

```bash
# Install dependencies
pnpm install
# Start the development server
pnpm dev
```

Now you can open your browser and navigate to `http://localhost:8100` to see the example in action.
