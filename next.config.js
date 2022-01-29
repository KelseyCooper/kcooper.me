// Placeholder domain, should be deleted on build
module.exports = {
  images: {
    domains: ["via.placeholder.com", "www.fillmurray.com"],
  },
};

// Vercel NextBlurHash patch
if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}