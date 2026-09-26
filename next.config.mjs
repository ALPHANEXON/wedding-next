/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Scanning the flyer QR code should save the programme, not open it in the browser.
        source: "/programme-akoi-and-afua.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Programme - Akoi and Afua.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
