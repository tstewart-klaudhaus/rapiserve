### Installation

To install RapiServe on any website

1. Sign up or log in to RapiServe.com - it's free!
2. On the "Domains" page click "New Domain" and add the domain name
3. You will provided with a link to the *RapiServe Page* code file for the domain - download it
4. Add the *RapiServe Page* file at your chosen location in your site
5. Ensure your site supports iFrame display *on its own domain*
   * For best-of-breed security it's advised to prevent iFrame display from other domains
   * The setting can be either of the following - or even both (belt-and-braces :)
     * X-Frame-Options: SAMEORIGIN
     * Content-Security-Policy: frame-ancestors 'self'
6. Back in the RapiServe app, review and configure settings as you wish
   1. In particular, you need to set the OpenAI API key - see the instructions here if you don't have one

You can now access and test RapiServe on your site at whatever path you added the RapiServe page file.

### Home Page Redirects

For the best experience, you should use the RapiServe code file as your site's home page  (the one served at the base `/` path of your website, depending on your hosting setup it may also have the identifier `www` ). Move the existing home page to the path `/home` (or choose a different home path within the RapiServe app).

Once you have done this, you want all links to other pages on your site to redirect to `/` in order to allow deep-linked URLs to also benefit from RapiServe. This is sometimes referred to as  "single-page-app routing", "SPA redirects" or similar. Here are guides to achieve this with various platforms:

* Apache
* NGinx
* Netlify
* Vercel
* Wordpress.com
* Heroku
* AWS
* Firebase Hosting

If your platform isn't covered here, review their own documentation around enabling "single-page-app redirects" - it's normally well-supported.

### Administrator Access

If you want other people to be able to access the RapiServe admin and dashboard app for your domain, enter their email in the "Access" page within the RapiServe app. If they are not already a RapiServe member they will receive an invitation email with a registration link.

Whoever first registered the domain is the "Primary Administrator" and can grant and revoke access to other users, but they can transfer this role to another user from within the "Access" page. That user will receive an email with an acceptance link - until they click this, the original user is still in charge!