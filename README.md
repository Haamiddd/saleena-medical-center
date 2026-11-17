# Saleena Medical Center website

A responsive React + Vite static website with a premium navy-blue, white and champagne-gold visual theme.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract the ZIP.
2. Open the `saleena-medical-center` folder in VS Code.
3. Open the VS Code terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Configure the clinic details
Open `src/App.jsx` and edit the `CLINIC` object near the top:
- `phoneDisplay`: displayed phone number
- `phoneLink`: phone number for click-to-call, digits with country code
- `whatsapp`: WhatsApp number, digits only, with country code (no +)
- `email`: clinic email address
- `address`: full clinic address
- `mapQuery`: a precise Google Maps search query for the clinic
- `hours`: clinic opening hours

Replace sample doctor profiles, stock photos and illustrative testimonials in the same file with actual, approved clinic information. Do not publish sample reviews as real patient reviews.

## Contact form note
The contact form currently prepares an email using the visitor's default email application (`mailto:`). It does not securely store or directly deliver submissions on its own. For a production form that submits without opening an email app, connect a trusted form service or a secure backend, and configure spam protection and privacy requirements. Avoid collecting sensitive patient or medical information through a basic website form.

## Build for Tasjeel cPanel
Run:

```bash
npm run build
```

Vite creates a `dist` folder. Upload the **contents** of `dist` into the website's `public_html` folder using Tasjeel cPanel File Manager or FTP. Ensure `index.html` is directly inside `public_html`, not nested inside another folder.

The site is a static frontend and does not require Node.js hosting after the build. Keep the domain's DNS pointed to the Tasjeel hosting account and enable SSL/HTTPS in cPanel.

## Before publishing checklist
- [ ] Confirm clinic name and legal business details.
- [ ] Replace phone, WhatsApp, email, address, map query and opening hours.
- [ ] Replace sample doctor names, credentials and portraits.
- [ ] Replace illustrative testimonials with genuine approved reviews or remove the section.
- [ ] Use clinic-owned/licensed photographs and confirm image usage rights.
- [ ] Test all links, the contact form and mobile layout.
- [ ] Confirm privacy, consent and local healthcare advertising requirements.
