
export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://nursinginsights.vercel.app/sitemap.xml',
    }
}